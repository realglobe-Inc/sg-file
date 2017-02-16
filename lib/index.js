/**
 * File utility
 * @module sg-file
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get saveStream () { return d(require('./save_stream')) }
}
