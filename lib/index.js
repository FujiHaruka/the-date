/**
 * Date utility for the-framework
 * @module the-date
 */
'use strict'

const TheDate = require('./TheDate')
const Timezones = require('./Timezones')
const create = require('./create')

const lib = create({})

Object.assign(lib, TheDate, {
  TheDate,
  Timezones,
  create
})

module.exports = lib
