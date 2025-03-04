const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack').default
const Components = require('unplugin-vue-components/webpack').default

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue'],
        dts: 'src/auto-imports.d.ts'
      }),
      Components({
        dirs: ['./src/components/'],
        extensions: ['vue'],
        deep: true,
        dts: 'src/components.d.ts'
      })
    ]
  },
  transpileDependencies: true
})
