import { always } from 'ramda';

/**
 * Returns always an empty object
 *
 * @function
 * @param {Any}
 * @returns {Object}
 *
 * @example
 * alwaysObject(); // {}
 * alwaysObject('foo'); // {}
 */
const alwaysObject = always({});

export default alwaysObject;
