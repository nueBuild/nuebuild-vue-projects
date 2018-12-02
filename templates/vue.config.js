const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const argv = require('yargs').argv
const pkgConfig = require('./package.json')

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
  config.configureWebpack.plugins.push(
    new PrerenderSpaPlugin({
      staticDir: path.resolve(__dirname, './dist'),
      routes: ['/'],
      postProcessHtml: function(context) {
        var titles = {
          '/': 'My home page',
        }
        return context.html.replace(/<title>[^<]*<\/title>/i, '<title>' + titles[context.route] + '</title>')
      },
    })
  )
}

module.exports = config
