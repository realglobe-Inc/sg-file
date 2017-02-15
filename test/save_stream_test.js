/**
 * Test case for saveStream.
 * Runs with mocha.
 */
'use strict'

const saveStream = require('../lib/save_stream.js')
const assert = require('assert')
const co = require('co')
const fs = require('fs')

describe('save-stream', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Save stream', () => co(function * () {
    yield saveStream(
      `${__dirname}/../tmp/foo.txt`,
      fs.createReadStream(__filename)
    )
  }))
})

/* global describe, before, after, it */
