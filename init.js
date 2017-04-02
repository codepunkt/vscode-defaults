var path = require('path')
var fs = require('fs-extra')

var source = path.resolve.bind(path, __dirname)
var target = path.resolve.bind(path, process.cwd())

function copy (file) {
  fs.copySync(source(file), target(file))
}

var files = [ '.editorconfig', '.eslintrc', '.gitignore', '.vscode' ]

files.forEach(copy)
