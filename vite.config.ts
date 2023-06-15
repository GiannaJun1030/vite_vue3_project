import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

console.log(
  '~import.meta.url',
  import.meta.url,
  fileURLToPath(new URL('./src', import.meta.url))
)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // command可以查看pkg.json里面的script,mode查看当前 模式（打包还是开发）
  console.log('~command', command, '~mode', mode)

  // 可以根据mode加载 环境文件
  const result = loadEnv(mode, process.cwd())
  console.log('~result', result)

  return {
    plugins: [vue(), vueJsx(), UnoCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
