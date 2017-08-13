/**
 * @class TheDate
 */
'use strict'

const abind = require('abind')
const now = () => new Date()

/** @lends TheDate */
class TheDate {
  constructor () {
    const s = this
    abind(s)
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
}

module.exports = TheDate
