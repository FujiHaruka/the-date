/**
 * @class TheDate
 */
'use strict'

const abind = require('abind')
const now = () => new Date()
const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

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
   * @param date1
   * @param date2
   * @returns {number}
   */
  daysBetween (date1, date2) {
    return (new Date(date2) - new Date(date1)) / DAY
  }
}

module.exports = TheDate
