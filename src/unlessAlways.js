import { always, unless } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * Executes unless with a fixed value
 *
 * @function
 * @param {Function} pred - The predicate
 * @param {*} value - Value returned when pred evaluates true
 * @param {*} val - The value to evaluate
 * @returns {value|val}
 *
 * @example
 * whenAlways(prop('foo'), 'a', { foo: true }); // 'a'
 * whenAlways(prop('foo'), 'a', { foo: false }); // { foo: false }
 */
const unlessAlways = withEvolvedArgs(
  {
    1: always,
  },
  unless,
);

export default unlessAlways;
