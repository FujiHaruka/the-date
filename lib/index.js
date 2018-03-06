/**
 * Date utility for the-framework
 * @module the-date
 */
'use strict'

const create = require('./create')
const TheDate = require('./TheDate')
const Timezones = require('./Timezones')

const lib = create({})

Object.assign(lib, TheDate, {
  TheDate,
  Timezones,
  create,
})

module.exports = lib
