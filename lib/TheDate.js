/**
 * @class TheDate
 */
'use strict'

const abind = require('abind')
const moment = require('moment')
require('moment/locale/ja')

const now = () => new Date()
const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

const toMoment = (date, {lang = 'en'} = {}) => {
  if (!date) {
    return null
  }
  moment.locale(lang)
  return moment(new Date(date))
}

/** @lends TheDate */
class TheDate {
  constructor () {
    const s = this
    abind(s)
  }

  /**
   * Get hours in milliseconds
   * @param {number} [n=1] - Hours
   * @returns {number}
   */
  hours (n = 1) {
    return n * HOUR
  }

  /**
   * Get days in milliseconds
   * @param {number} [n=1] - Days
   * @returns {number}
   */
  days (n = 1) {
    return n * DAY
  }

  /**
   * Current date
   * @returns {Date}
   */
  now () {
    return now()
  }

  /**
   * Date after
   * @param msecs - Milliseconds to after
   * @param {Object} [options] - Optional settings
   * @param {Date} [options.from=now()] - Base date
   * @returns {Date}
   */
  dateAfter (msecs, options = {}) {
    const s = this
    const {from = s.now()} = options
    return new Date(Number(from) + msecs)
  }

  /**
   * Date after
   * @param msecs - Milliseconds to after
   * @param {Object} [options] - Optional settings
   * @param {Date} [options.from=now()] - Base date
   * @returns {Date}
   */
  dateBefore (msecs, options = {}) {
    const s = this
    return s.dateAfter(Number(msecs) * -1, options)
  }

  /**
   * Get dates between
   * @param {Date} date1
   * @param {Date} date2
   * @returns {number}
   */
  daysBetween (date1, date2) {
    return (new Date(date2) - new Date(date1)) / DAY
  }

  /**
   * Format date into string
   * @param {Date} date
   * @param {string} [format] - Moment date format
   * @param {Object} [options={}] - Optional settings
   * @returns {?string}
   */
  formatDate (date, format = 'lll', options = {}) {
    if (!date) {
      return null
    }
    const {lang = 'en'} = options
    const moment = toMoment(date, {lang})
    return moment.format(format)
  }

  /**
   * Date string from now
   * @param {Date} date
   * @param {Object} [options={}] - Optional settings
   * @returns {?string}
   */
  dateStringFromNow (date, options = {}) {
    if (!date) {
      return null
    }
    const {lang = 'en'} = options
    const moment = toMoment(date, {lang})
    return moment.fromNow()
  }
}

module.exports = TheDate
