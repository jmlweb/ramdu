import { propSatisfies } from 'ramda';

import isTruthy from './isTruthy';

/**
 * Check if one property is truthy in the object provided as argument
 *
 * @function
 * @param {String} propName - The name of the prop
 * @param {Object} obj - The object provided
 * @returns {Boolean}
 *
 * @example
 * propIsTruthy('a', { a: 2, b: 1 }); // true
 * propIsTruthy('a', { a: null, b: 1 }); // false
 */
const propIsTruthy = propSatisfies(isTruthy);

export default propIsTruthy;
