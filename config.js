System.config({
  transpiler: 'plugin-babel',
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    vue: 'npm:vue@latest/dist/vue.esm.browser.js',
    'vue-loader': 'npm:dx-systemjs-vue-browser@latest/index.js',

    'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js'
  },
  meta: {
    '*.vue': { loader: 'vue-loader' }
  },
  babelOptions: {
    sourceMaps: false,
    stage0: true
  }
});
