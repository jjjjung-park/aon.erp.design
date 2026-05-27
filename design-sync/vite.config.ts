/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

/**
 * UiScrollAreaScrollBar 같이 등록 이름과 export 이름이 다른 예외 케이스
 */
const UI_COMPONENT_EXCEPTIONS: Record<string, { name: string; from: string }> = {
  UiScrollAreaScrollBar: { name: 'ScrollBar', from: '@/ui/scroll-area' },
}

/**
 * 'Ui' 접두사 컴포넌트를 src/ui/ 폴더에서 자동 resolve
 *
 * 예) UiInputGroupAddon → { name: 'InputGroupAddon', from: '@/ui/input-group' }
 *     UiButton         → { name: 'Button',           from: '@/ui/button'      }
 */
function uiResolver(componentName: string) {
  if (!componentName.startsWith('Ui')) return undefined

  // 예외 케이스 처리
  if (UI_COMPONENT_EXCEPTIONS[componentName]) {
    return UI_COMPONENT_EXCEPTIONS[componentName]
  }

  const stripped = componentName.slice(2) // 'Ui' 제거 → 'InputGroupAddon'

  // PascalCase → kebab-case
  const kebab = stripped.replace(/[A-Z]/g, (c, i) => (i === 0 ? c.toLowerCase() : '-' + c.toLowerCase()))

  // 길이를 줄여가며 src/ui/ 하위 폴더 탐색
  // 'input-group-addon' → 'input-group' 폴더를 찾으면 export 이름은 'InputGroupAddon'
  const parts = kebab.split('-')
  for (let len = parts.length; len >= 1; len--) {
    const folder = parts.slice(0, len).join('-')
    if (fs.existsSync(path.join(dirname, 'src', 'ui', folder))) {
      return { name: stripped, from: `@/ui/${folder}` }
    }
  }

  return undefined
}

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),

    // Vue Composition API 자동 임포트 (ref, computed, watch 등)
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),

    // Ui* 컴포넌트 자동 임포트 (빌드 타임 resolve)
    Components({
      dirs: [], // 디렉토리 자동 스캔 비활성화 — resolver만 사용
      resolvers: [uiResolver],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({ configDir: path.join(dirname, '.storybook') }),
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{ browser: 'chromium' }],
        },
      },
    }],
  },
})
