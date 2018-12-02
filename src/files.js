const path = require('path')
const { readFileSync } = require('fs')
const ejs = require('ejs')

module.exports = {
  files: answers => {
    let files = [
      // root/
      'package.json',
      '.browserslistrc',
      '.env.development',
      '.env.production',
      '.env.test',
      '.eslintignore',
      '.eslintrc.js',
      '.gitattributes',
      '.##gitignore##',
      '.postcssrc.js',
      '.prettierignore',
      '.prettierrc.js',
      '.stylelintignore',
      'babel.config.js',
      'cypress.json',
      'jest.config.js',
      'README.md',
      'stylelint.config.js',
      'vue.config.js',

      // docs/
      'docs/README.md',

      // docs/.vuepress/
      'docs/.vuepress/config.js',

      // docs/settings/
      'docs/settings/child.md',
      'docs/settings/README.md',

      // src/assets/sass/
      'src/assets/sass/_dependencies.scss',
      'src/assets/sass/index.scss',

      // src/assets/sass/base/
      'src/assets/sass/base/_accessibility.scss',
      'src/assets/sass/base/_alignments.scss',
      'src/assets/sass/base/_clearings.scss',
      'src/assets/sass/base/_core.scss',
      'src/assets/sass/base/_elements.scss',
      'src/assets/sass/base/_index.scss',
      'src/assets/sass/base/_media-queries.scss',
      'src/assets/sass/base/_media.scss',
      'src/assets/sass/base/_typography.scss',

      // src/assets/sass/functions/
      'src/assets/sass/functions/_columns.scss',
      'src/assets/sass/functions/_grid-width.scss',
      'src/assets/sass/functions/_index.scss',
      'src/assets/sass/functions/_px-to.scss',
      'src/assets/sass/functions/_strip-units.scss',

      // src/assets/sass/layout/
      'src/assets/sass/layout/_core.scss',
      'src/assets/sass/layout/_flexbox.scss',
      'src/assets/sass/layout/_float.scss',
      'src/assets/sass/layout/_index.scss',
      'src/assets/sass/layout/_media-queries.scss',

      // src/assets/sass/mixins/
      'src/assets/sass/mixins/_clearfix.scss',
      'src/assets/sass/mixins/_font-legibility.scss',
      'src/assets/sass/mixins/_font-size.scss',
      'src/assets/sass/mixins/_font-smoothing.scss',
      'src/assets/sass/mixins/_hyphens.scss',
      'src/assets/sass/mixins/_index.scss',
      'src/assets/sass/mixins/_list-reset.scss',
      'src/assets/sass/mixins/_margin-auto.scss',
      'src/assets/sass/mixins/_margin-padding-reset.scss',
      'src/assets/sass/mixins/_placeholder.scss',
      'src/assets/sass/mixins/_svg-background.scss',
      'src/assets/sass/mixins/_vertical-align.scss',
      'src/assets/sass/mixins/_word-break.scss',

      // src/assets/sass/variables/
      'src/assets/sass/variables/_colors.scss',
      'src/assets/sass/variables/_index.scss',
      'src/assets/sass/variables/_layout.scss',
      'src/assets/sass/variables/_paths.scss',
      'src/assets/sass/variables/_typography.scss',

      // src/router/
      'src/router/appRoutes.js',
      'src/router/index.js',

      // src/store/
      'src/store/modules/default.js',
      'src/store/modules/index.js',
      'src/store/index.js',

      // src/
      'src/App.vue',
      'src/main.js',

      // tests/e2e/
      'tests/e2e/plugins/index.js',
      'tests/e2e/specs/test.js',
      'tests/e2e/support/commands.js',
      'tests/e2e/support/index.js',
      'tests/e2e/.eslintrc.js',

      // tests/unit/
      'tests/unit/.eslintrc.js',
      'tests/unit/App.spec.js',

      // tests/
      'tests/helpers.js',
    ]

    // public/
    if (answers.mode == 'app') {
      // src/public
      files.push('public/favicon.ico')
      files.push('public/index.html')

      // src/components/
      files.push('src/components/copyright/Copyright.vue')
      files.push('src/components/nav/MainNav.vue')

      // src/views/
      files.push('src/views/Home.vue')

      // tests/unit/
      files.push('tests/unit/views/.eslintrc.js')
      files.push('tests/unit/views/Home.spec.js')
      files.push('tests/unit/components/copyright/Copyright.spec.js')
      files.push('tests/unit/components/copyright/.eslintrc.js')
      files.push('tests/unit/components/nav/MainNav.spec.js')
      files.push('tests/unit/components/nav/.eslintrc.js')
    }

    if (answers.mode == 'component' || answers.mode == 'component-library') {
      // src/
      files.push('src/entry.js')

      // src/build/
      files.push('build/rollup.config.js')

      // src/components
      files.push('src/components/MyComponent.vue')
      files.push('src/components/index.js')

      // tests/unit/
      files.push('tests/unit/components/MyComponent.spec.js')
      files.push('tests/unit/components/.eslintrc.js')
    }

    return files
  },

  // The template source files.
  sourcePaths: (answers, dirname) => {
    const files = module.exports.files(answers)
    const paths = []

    files.forEach(file => {
      paths.push(ejs.render(readFileSync(path.join(dirname, 'templates', file)).toString(), answers))
    })

    return paths
  },

  // Destination to write the files.
  destinationPaths: answers => {
    const files = module.exports.files(answers)
    const paths = []

    files.forEach(file => {
      paths.push(path.join(answers.projectPath, file))
    })

    return paths
  },
}
