var createDefaults = require('../src/createDefaults')
var argv = require('yargs').argv

createDefaults(argv.force === true)
