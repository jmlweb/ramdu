import { defaultTo, identity } from 'ramda';

import { generateKeysTransformation } from './_internal';

const getKey = (keysMap, key) => defaultTo(identity, keysMap[key])(key);

/**
 * Evolves the keys of the object based on the functions map passed as argument
 *
 * @function
 * @param {Object} keysMap - The map defining the changes
 * @param {Object} obj - The source object
 * @returns {Object}
 *
 * @example
 * evolveKeys({ upper: toUpper }, { upper: 'bar' }); // { UPPER: 'a' }
 */
const evolveKeys = generateKeysTransformation(getKey);

export default evolveKeys;
