import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url))
process.chdir(root)

const htmlPath = path.join('dist', 'index.html')
const outPath = path.join('dist', 'code.js')

function readHtml() {
  if (!fs.existsSync(htmlPath)) {
    console.error('dist/index.html이 없습니다. 먼저 npm run build:ui (vite build)를 실행하세요.')
    process.exit(1)
  }
  return fs.readFileSync(htmlPath, 'utf8')
}

fs.mkdirSync('dist', { recursive: true })

esbuild
  .build({
    entryPoints: ['src/plugin/code.ts'],
    bundle: true,
    outfile: outPath,
    target: 'es6',
    define: { __html__: JSON.stringify(readHtml()) },
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
