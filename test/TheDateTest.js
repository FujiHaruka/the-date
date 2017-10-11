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

    const {dateAfter, daysBetween} = new TheDate()
    equal(
      dateAfter(24 * 60 * 60 * 1000, {from: new Date('2016/12/12')}).getTime(),
      new Date('2016/12/13').getTime()
    )

    equal(
      daysBetween(new Date('2016/12/12'), new Date('2016/12/15')),
      3
    )
  })
})

/* global describe, before, after, it */
