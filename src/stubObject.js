import { always } from 'ramda';

/**
 * Returns always an empty object
 *
 * @function
 * @param {Any}
 * @returns {Object}
 *
 * @example
 * stubObject(); // {}
 * stubObject('foo'); // {}
 */
const stubObject = always({});

export default stubObject;
