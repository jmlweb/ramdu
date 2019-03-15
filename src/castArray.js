import { both, when, of } from 'ramda';

import isNot from './isNot';
import isNotNil from './isNotNil';

/**
 * Forces an argument to be of type Array when is not undefined
 *
 * @function
 * @param {*}
 * @returns {Array|undefined}
 *
 * @example
 * castArray('a'); // ['a']
 * castArray(['a']); // ['a']
 * castArray(undefined); // undefined
 */
const castArray = when(both(isNot(Array), isNotNil), of);

export default castArray;
