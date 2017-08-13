'use strict'

const {hours, dateAfter} = require('the-date')

async function tryExample () {
  console.log(dateAfter(hours(3))) // 3 hours later
}

tryExample().catch((err) => console.error(err))
