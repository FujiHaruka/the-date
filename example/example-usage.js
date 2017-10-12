'use strict'

const {hours, dateAfter, formatDate} = require('the-date')

async function tryExample () {

  console.log(dateAfter(hours(3))) // 3 hours later

  const d = new Date('2016/10/10')
  console.log(formatDate(d, 'lll', {lang: 'ja'})) // -> "2016年10月10日 00:00"
}

tryExample().catch((err) => console.error(err))
