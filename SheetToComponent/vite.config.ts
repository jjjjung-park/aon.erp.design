import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import esbuild from 'esbuild'
import { escapePath } from 'tinyglobby'
import type { Plugin } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(root, 'dist')
const distHtml = path.join(distDir, 'index.html')
const pluginDistDir = path.join(root, 'plugin-dist')
const pluginMainOut = path.join(pluginDistDir, 'code.js')

const isViteBuildWatch = process.argv.includes('--watch')

/** UI(dist/)와 분리해 플러그인 main을 출력 — Vite watch가 code.js 갱신으로 재빌드되지 않음 */
function bundleFigmaPluginMain(): Plugin {
  return {
    name: 'bundle-figma-plugin-main',
    apply: 'build',
    async closeBundle() {
      if (!fs.existsSync(distHtml)) {
        console.warn('[bundle-figma-plugin-main] dist/index.html 없음 — code.js 생략')
        return
      }
      fs.mkdirSync(pluginDistDir, { recursive: true })
      const html = fs.readFileSync(distHtml, 'utf8')
      await esbuild.build({
        entryPoints: [path.join(root, 'src', 'plugin', 'code.ts')],
        bundle: true,
        outfile: pluginMainOut,
        target: 'es6',
        define: { __html__: JSON.stringify(html) },
      })
    },
  }
}

export default defineConfig({
  plugins: [tailwindcss(), vue(), viteSingleFile(), bundleFigmaPluginMain()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    // watch 옵션을 항상 두면 `vite build`(프로덕션)도 감시 모드로 들어가 멈춘다. --watch일 때만 적용.
    ...(isViteBuildWatch
      ? {
          watch: {
            chokidar: {
              ignored: [escapePath(distDir) + '/**', escapePath(pluginDistDir) + '/**'],
            },
          },
        }
      : {}),
    rollupOptions: {
      input: 'index.html',
    },
    cssCodeSplit: false,
  },
})
