import { or, prop } from 'ramda';

import { generateKeysTransformation } from './_internal';

const getKey = (keysMap, key) => or(prop(key, keysMap), key);

/**
 * Renames the keys of the object based on the map passed as argument
 *
 * @function
 * @param {Object} keysMap - The map defining the changes
 * @param {Object} obj - The source object
 * @returns {Object}
 *
 * @example
 * renameKeys({ foo: 'bar' }, { foo: 'a', other: 'b' }); // { bar: 'a', other: 'b' }
 */
const renameKeys = generateKeysTransformation(getKey);

export default renameKeys;
