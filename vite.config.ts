import path from 'path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

console.log(
  '~import.meta.url',
  import.meta.url,
  fileURLToPath(new URL('./src', import.meta.url))
);

// src的路径
const pathTypes = path.resolve(__dirname, 'types');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // command可以查看pkg.json里面的script,mode查看当前 模式（打包还是开发）
  console.log('~command', command, '~mode', mode);

  // 可以根据mode加载 环境文件
  const env = loadEnv(mode, process.cwd());
  console.log('~result', env);

  console.log(env.VITE_APP_BASE_URL, 'env.VITE_APP_BASE_URL');

  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(), // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        dts: path.resolve(pathTypes, 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ],
        dts: path.resolve(pathTypes, 'components.d.ts')
      }),
      Icons({
        autoInstall: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // sass混入
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/theme.scss';`
        }
      }
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
