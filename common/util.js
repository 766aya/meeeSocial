const createKeccakHash = require("keccak")

/**
 * Creates Keccak hash of the input
 * @param {Buffer|Array|String|Number} value the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
exports.keccak = function(value, bits)
{
  value = exports.toBuffer(value);

  if(!bits)
  {
    bits = 256;
  }

  return createKeccakHash("keccak" + bits).update(value).digest();
}

/**
 * Creates Keccak-256 hash of the input, alias for keccak(value, 256)
 * @param {Buffer|Array|String|Number} value the input data
 * @return {Buffer}
 */
exports.keccak256 = function(value)
{
  return exports.keccak(value);
}

/**
 * Creates SHA-3 (Keccak) hash of the input [OBSOLETE]
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the SHA-3 width
 * @return {Buffer}
 */
exports.sha3 = exports.keccak;

/**
 * Converts a Buffer or Array to hex string
 * @param {Buffer|Array} value
 * @return {Array|String|null}
 */
exports.baToHexString = function(value)
{
  if(Buffer.isBuffer(value))
  {
    return "0x" + value.toString("hex");
  }
  else if(value instanceof Array) 
  {
    const array = [];
    for(let i = 0; i < value.length; i++)
    {
      array.push(exports.baToHexString(value[i]));
    }
    return array;
  }
  else
  {
    throw new Error("util baToHexString, invalid type.");
  }
}