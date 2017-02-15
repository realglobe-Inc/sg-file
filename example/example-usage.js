'use strict'

const { saveStream } = require('sg-file')
const co = require('co')
const fs = require('fs')

co(function * () {
  let stream = fs.createReadStream('foo.txt')
  yield saveStream('copies/foo-copy.txt', stream)
}).catch((err) => console.error(err))
