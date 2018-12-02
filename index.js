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
  const projectName = lodash.kebabCase(answers.projectName)
  answers = Object.assign(answers, { projectSlug: projectName })

  const destination = destinationPaths(answers)
  const source = sourcePaths(answers, __dirname)
  const componentName = answers.componentName
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
        `${path.resolve('./')}/${projectName}/src/components/MyComponent.vue`,
        `${path.resolve('./')}/${projectName}/src/components/${componentName}.vue`,
        err => {
          if (err) console.log('ERROR: ' + err)
        }
      )
      rename(
        `${path.resolve('./')}/${projectName}/tests/unit/components/MyComponent.spec.js`,
        `${path.resolve('./')}/${projectName}/tests/unit/components/${componentName}.spec.js`,
        err => {
          if (err) console.log('ERROR: ' + err)
        }
      )
    })
  }
})
