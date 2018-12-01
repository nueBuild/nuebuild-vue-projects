const lodash = require('lodash')
const { required } = require('./helpers')

module.exports = {
  questions: [
    {
      type: 'list',
      name: 'mode',
      message: 'What kind of Vue.js project is this?',
      choices: ['App', 'Component', 'Component Library'],
      filter: value => lodash.kebabCase(value),
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Project Name (*):',
      validate: input => required(input),
    },
    {
      type: 'input',
      name: 'componentName',
      message: "Components's name:",
      default: answers => lodash.upperFirst(lodash.camelCase(answers.projectName)),
      when: answers => answers.mode == 'component',
    },
    {
      type: 'input',
      name: 'authorName',
      message: "Author's Name:",
      validate: input => required(input),
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Project Description:',
    },
    {
      type: 'input',
      name: 'projectVersion',
      message: 'Project Version:',
      default: '1.0.0',
    },
    {
      type: 'input',
      name: 'projectLicense',
      message: 'Project License:',
      default: 'MIT',
    },
    {
      type: 'input',
      name: 'projectRepo',
      message: 'Project repository URL:',
    },
    {
      type: 'input',
      name: 'projectPath',
      message: 'Project directory path:',
      default: answers => `./${lodash.kebabCase(answers.projectName)}`,
    },
  ],
}
