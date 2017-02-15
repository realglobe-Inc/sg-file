/**
 * Save stream into file
 * @function saveStream
 * @param {string} filename - File name to save
 * @param {Stream} stream - File stream to save
 * @param {Object} [options={}] - Optional settings
 * @returns {Promise}
 */
'use strict'

const { mkdirpAsync } = require('asfs')
const fs = require('fs')
const path = require('path')
const co = require('co')

/** @lends saveStream */
function saveStream (filename, stream, options = {}) {
  return co(function * () {
    yield mkdirpAsync(path.dirname(filename))
    let write = fs.createWriteStream(filename)
    stream.pipe(write)
    yield new Promise((resolve, reject) => {
      write
        .on('close', () => resolve())
        .on('error', (err) => reject(err))
    })
    return filename
  })
}

module.exports = saveStream
