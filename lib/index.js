/**
 * Date utility for the-framework
 * @module the-date
 */
'use strict'

const TheDate = require('./TheDate')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheDate,
  create
})

module.exports = lib
