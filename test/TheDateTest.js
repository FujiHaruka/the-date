/**
 * Test for TheDate.
 * Runs with mocha.
 */
'use strict'

const TheDate = require('../lib/TheDate')
const {ok, equal} = require('assert')

describe('the-date', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    ok(TheDate)

    const {
      dateAfter,
      daysBetween,
      formatDate,
      minutes,
      hours,
      days,
      today,
      hourStrippedDate
    } = new TheDate()

    equal(minutes(3), 3 * 60 * 1000)

    equal(
      dateAfter(24 * 60 * 60 * 1000, {from: new Date('2016/12/12')}).getTime(),
      new Date('2016/12/13').getTime()
    )

    equal(
      daysBetween(new Date('2016/12/12'), new Date('2016/12/15')),
      3
    )

    equal(
      formatDate(new Date('2016/10/10'), 'lll', {lang: 'ja'}),
      '2016年10月10日 00:00'
    )

    for (const timezone of ['America/Thule', 'Asia/Tokyo']) {
      console.log(timezone,
        formatDate(new Date('2016/10/10'), 'lll', {
          lang: 'ja',
          timezone
        }),
        '2016年10月10日 00:00'
      )
    }

    equal(
      hours(3),
      3 * 60 * 60 * 1000
    )

    ok(today())
    // console.log(today())
    // console.log(today('Asia/Tokyo'))

    equal(
      Number(hourStrippedDate(new Date('2017/07/07 11:12:10'))),
      Number(new Date('2017/07/07'))
    )
  })
})

/* global describe, before, after, it */
