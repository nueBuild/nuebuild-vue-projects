const path = require('path')
const { existsSync, mkdirSync } = require('fs')

module.exports = {
  // Directory exists.
  directoryExists: filePath => {
    const dirname = path.dirname(filePath)
    if (existsSync(dirname)) {
      return true
    }
    module.exports.directoryExists(dirname)
    return mkdirSync(dirname)
  },

  // Require Question.
  required: input => {
    if (input) {
      return true
    }
    return
  },
}
