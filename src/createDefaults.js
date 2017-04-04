var path = require('path')
var fs = require('fs-extra')

module.exports = function (options) {
  options = options || {}
  // options.basedir = options.basedir || path.resolve(__dirname, '..')

  var source = path.resolve.bind(path, __dirname, '..')
  var target = path.resolve.bind(path, __dirname, '..', '..', '..')

  function createCopy (overwrite) {
    return function (file) {
      fs.copySync(source(file), target(file), { overwrite: !!overwrite })
    }
  }

  if (!fs.existsSync(source('.gitignore'))) {
    fs.renameSync(source('gitignore'), source('.gitignore'))
  }

  var files = [ '.editorconfig', '.eslintrc', '.gitignore', '.vscode' ]
  files.forEach(createCopy(!!options.overwrite))
}
