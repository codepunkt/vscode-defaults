var fs = require('fs-extra')
var path = require('path')

var source = path.resolve.bind(path, process.cwd())
var target = path.resolve.bind(path, process.cwd(), '..', '..')

function copy (file) {
  fs.copySync(source(file), target(file))
}

fs.renameSync(source('gitignore'), source('.gitignore'))
var files = [ '.editorconfig', '.eslintrc', '.gitignore', '.vscode' ]
files.forEach(copy)
