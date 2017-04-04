#!/usr/bin/env node
var argv = require('yargs').argv
var createDefaults = require('../src/createDefaults')

createDefaults({ overwrite: argv.force === true })
