// https://vitejs.dev/config/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const config = {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/css/override.scss" as *;`,
      }
    }
  },
  plugins: [
    vue(),
    // Se pone importStyle: false para que "unplugin-auto-import" y "unplugin-vue-components" en el resolver de element NO importen los estilos de
    // esa librería y en su lugar cargue los que importé desde el archivo "override.css"
    AutoImport({
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver({ importStyle: false })]
    }),
    Components({ resolvers: [ElementPlusResolver({ importStyle: false })] })
  ],
  base: './'
  /* server: {
    port: 8081
  } */
}

export default ({ mode }) => {
  console.log(`MODO: ${mode}`)
  /* const env = loadEnv(mode, process.cwd())
  console.log(env) */

  /* if (mode !== 'development') config.base = './' */

  return defineConfig(config)
}
