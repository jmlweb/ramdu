import { call } from 'ramda';

import { generateKeysTransformation } from './_internal';

/**
 * Maps the keys of the object based on the functions passed as argument
 *
 * @function
 * @param {Function} transformation - The transformation to be applied to all the keys
 * @param {Object} obj - The source object
 * @returns {Object}
 *
 * @example
 * mapKeys({ toUpper }, { a: 'a', b: 'b' }); // { A: 'a', B: 'b' }
 */
const mapKeys = generateKeysTransformation(call);

export default mapKeys;
