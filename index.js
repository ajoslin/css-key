'use strict'

module.exports = function cssKey (value) {
  return String(value)
    .replace(/([A-Z])/g, '-$1')
    .replace(/^ms-/, '-ms-') // Internet Explorer vendor prefix.
    .toLowerCase()
}
