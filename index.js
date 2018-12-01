#! /usr/bin/env node

/* global __dirname */

const path = require('path')
const lodash = require('lodash')
const { rename, writeFileSync } = require('fs')
const inquirer = require('inquirer')
const { directoryExists } = require('./src/helpers')
const { sourcePaths, destinationPaths } = require('./src/files')
const { questions } = require('./src/questions')

inquirer.prompt(questions).then(answers => {
  answers = Object.assign(answers, { projectSlug: lodash.kebabCase(answers.projectName) })

  const destination = destinationPaths(answers)
  const source = sourcePaths(answers, __dirname)
  let buildFiles = []

  // Build the files.
  Object.keys(destination).forEach(key => {
    directoryExists(destination[key])
    buildFiles = new Promise(resolve => {
      writeFileSync(destination[key], source[key])
      resolve(1)
    })
  })

  // Rename Component filname.
  if (answers.mode == 'component') {
    Promise.all([buildFiles]).then(() => {
      rename(
        `${path.resolve('./')}/${lodash.kebabCase(answers.projectName)}/src/components/MyComponent.vue`,
        `${path.resolve('./')}/${lodash.kebabCase(answers.projectName)}/src/components/${answers.componentName}.vue`,
        err => {
          if (err) console.log('ERROR: ' + err)
        }
      )
    })
  }
})
