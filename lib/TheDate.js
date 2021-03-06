/**
 * @class TheDate
 */
'use strict'

const abind = require('abind')
const moment = require('moment')
const momentTz = require('moment-timezone')

require('moment/locale/ja')
require('moment/locale/en-au')
require('moment/locale/en-ca')
require('moment/locale/en-gb')
require('moment/locale/en-ie')
require('moment/locale/en-nz')

const now = () => new Date()
const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR

const toMoment = (date, {lang = 'en', timezone} = {}) => {
  if (!date) {
    return null
  }
  moment.locale(lang)
  if (timezone) {
    return moment(momentTz(date).tz(timezone))
  } else {
    return moment(new Date(date))
  }
}

/** @lends TheDate */
class TheDate {
  constructor () {
    const s = this
    abind(s)
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
   * Date string from now
   * @param {Date} date
   * @param {Object} [options={}] - Optional settings
   * @returns {?string}
   */
  dateStringFromNow (date, options = {}) {
    if (!date) {
      return null
    }
    const {lang = 'en', timezone} = options
    const moment = toMoment(date, {lang, timezone})
    return moment.fromNow()
  }

  /**
   * Get days in milliseconds
   * @param {number} [n=1] - Days
   * @returns {number}
   */
  days (n = 1) {
    return n * ONE_DAY
  }

  /**
   * Get dates between
   * @param {Date} date1
   * @param {Date} date2
   * @returns {number}
   */
  daysBetween (date1, date2) {
    return (new Date(date2) - new Date(date1)) / ONE_DAY
  }

  /**
   * Format date into string
   * @param {Date} date
   * @param {string} [format] - Moment date format
   * @param {Object} [options={}] - Optional settings
   * @returns {?string}
   */
  formatDate (date, format = 'llll', options = {}) {
    if (!date) {
      return null
    }
    const {lang = 'en', timezone} = options
    const moment = toMoment(date, {lang, timezone})
    return moment.format(format)
  }

  /**
   * Get hours in milliseconds
   * @param {number} [n=1] - Hours
   * @returns {number}
   */
  hours (n = 1) {
    return n * ONE_HOUR
  }

  hourStrippedDate (date, options = {}) {
    const {timezone} = options
    const timezoneOffset = timezone ? momentTz.tz(timezone).utcOffset() * -1 : date.getTimezoneOffset()
    const utc = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      timezoneOffset / 60
    )
    return new Date(utc)
  }

  /**
   * Get minutes in milliseconds
   * @param {number} [n=1] - Hours
   * @returns {number}
   */
  minutes (n = 1) {
    return n * ONE_MINUTE
  }

  /**
   * Current date
   * @returns {Date}
   */
  now () {
    return now()
  }

  today (options = {}) {
    const s = this
    return s.hourStrippedDate(now(), options)
  }

}

module.exports = Object.assign(TheDate, {
  ONE_DAY,
  ONE_HOUR,
  ONE_MINUTE,
  ONE_SECOND,
})
