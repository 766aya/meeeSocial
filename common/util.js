const createKeccakHash = require('keccak')
const stripHexPrefix = exports.stripHexPrefix = require('strip-hex-prefix')
const Buffer = exports.Buffer = require('safe-buffer').Buffer

/**
 * Creates Keccak hash of the input
 * @param {Buffer} value the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
exports.keccak = function (value, bits) {
  if (!bits) {
    bits = 256
  }

  return createKeccakHash('keccak' + bits).update(value).digest()
}

/**
 * Creates Keccak-256 hash of the input, alias for keccak(value, 256)
 * @param {Buffer|Array|String|Number} value the input data
 * @return {Buffer}
 */
exports.keccak256 = function (value) {
  return exports.keccak(value)
}

/**
 * Creates SHA-3 (Keccak) hash of the input [OBSOLETE]
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the SHA-3 width
 * @return {Buffer}
 */
exports.sha3 = exports.keccak

/**
 * Converts a Buffer or Array to hex string
 * @param {Buffer|Array} value
 * @return {Array|String|null}
 */
exports.baToHexString = function (value) {
  if (Buffer.isBuffer(value)) {
    return '0x' + value.toString('hex')
  } else if (value instanceof Array) {
    const array = []
    for (let i = 0; i < value.length; i++) {
      array.push(exports.baToHexString(value[i]))
    }
    return array
  } else {
    throw new Error('util baToHexString, invalid type.')
  }
}

/**
 * Check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length indicate the byte length of value
 * @returns {Boolean} output
 */
exports.isHexString = function (value, length) {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false
  }

  if (length && value.length !== 2 + 2 * length) {
    return false
  }

  return true
}

/**
 * Pads a String to have an even length, note 0 is not a even number
 * @param {String} value
 * @return {String} output
 */
exports.padToEven = function (value) {
  if (typeof value !== 'string') {
    throw new Error(`utils padToEven, while padding to even, value must be string, is currently ${typeof value}.`)
  }

  if (value.length % 2) {
    value = `0${value}`
  }

  return value
}

/**
 * Attempts to turn a string into a Buffer.
 * @param {String} value the value
 */
exports.stringToBuffer = function (value) {
  if (Buffer.isBuffer(value)) {
    return value
  }

  if (typeof value === 'string') {
    if (exports.isHexString(value)) {
      value = Buffer.from(exports.padToEven(stripHexPrefix(value)), 'hex')
    } else {
      value = Buffer.from(value)
    }

    return value
  }

  throw new Error('uitl stringToBuffer, invalid type.')
}
