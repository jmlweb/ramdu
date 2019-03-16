import { propSatisfies } from 'ramda';

import isFalsy from './isFalsy';

/**
 * Check if one property is falsy in the object provided as argument
 *
 * @function
 * @param {String} propName - The name of the prop
 * @param {Object} obj - The object provided
 * @returns {Boolean}
 *
 * @example
 * propIsFalsy('a', { b: 1 }); true
 * propIsFalsy('a', { a: null, b: 1 }); true
 * propIsFalsy('a', { a: 2, b: 1 }); false
 */
const propIsFalsy = propSatisfies(isFalsy);

export default propIsFalsy;
