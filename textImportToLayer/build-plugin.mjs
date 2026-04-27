import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url))
process.chdir(root)

const htmlPath = path.join('dist', 'index.html')
const isWatch = process.argv.includes('--watch')

function readHtml() {
  if (!fs.existsSync(htmlPath)) {
    if (!isWatch) {
      console.error(
        'dist/index.html이 없습니다. 먼저 npm run build:ui (vite build)를 실행하세요.',
      )
      process.exit(1)
    }
    return '<!DOCTYPE html><html><body><p>UI 빌드 대기 중…</p></body></html>'
  }
  return fs.readFileSync(htmlPath, 'utf8')
}

async function run() {
  if (!isWatch) {
    await esbuild.build({
      entryPoints: ['src/plugin/code.ts'],
      bundle: true,
      outfile: 'dist/code.js',
      target: 'es6',
      define: { __html__: JSON.stringify(readHtml()) },
    })
    return
  }

  let ctx = null
  async function createContext() {
    await ctx?.dispose?.()
    ctx = await esbuild.context({
      entryPoints: ['src/plugin/code.ts'],
      bundle: true,
      outfile: 'dist/code.js',
      target: 'es6',
      define: { __html__: JSON.stringify(readHtml()) },
    })
  }

  await createContext()
  await ctx.watch()

  fs.watchFile(htmlPath, { interval: 400 }, async () => {
    if (!fs.existsSync(htmlPath)) return
    console.log('dist/index.html 변경 → code.js 재번들')
    await createContext()
    await ctx.watch()
  })
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
