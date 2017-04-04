var path = require('path')
var fs = require('fs-extra')

var source = path.resolve.bind(path, process.cwd())
var target = path.resolve.bind(path, process.cwd(), '..', '..')

function createCopy (overwrite) {
  return function (file) {
    fs.copySync(source(file), target(file), { overwrite: !!overwrite })
  }
}

module.exports = function (overwrite) {
  fs.renameSync(source('gitignore'), source('.gitignore'))
  var files = [ '.editorconfig', '.eslintrc', '.gitignore', '.vscode' ]
  files.forEach(createCopy(!!overwrite))
}
