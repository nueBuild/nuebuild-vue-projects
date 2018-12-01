const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const argv = require('yargs').argv
const pkgConfig = require('./package.json')
const appRoutes = require('./src/router/appRoutes.js')

const config = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "src/assets/sass/style.scss";',
      },
    },
  },
  pluginOptions: {
    stylelint: {
      fix: true,
      files: '',
      formatter: () => {},
    },
    lintStyleOnBuild: false,
  },
  configureWebpack: {
    name: pkgConfig.name,
    plugins: [],
  },
}

if (argv.preprocess) {
  const routePaths = []
  appRoutes.forEach(key => {
    routePaths.push(key.path)
  })
  config.configureWebpack.plugins.push(
    new PrerenderSpaPlugin({
      staticDir: path.resolve(__dirname, './dist'),
      routes: routePaths,
      postProcessHtml: function(context) {
        var titles = {}
        appRoutes.forEach(key => {
          titles[key.path] = key.title
        })
        return context.html.replace(/<title>[^<]*<\/title>/i, '<title>' + titles[context.route] + '</title>')
      },
    })
  )
}

module.exports = config
