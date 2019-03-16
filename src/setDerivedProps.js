import { applySpec, curry, mergeDeepRight } from 'ramda';

/**
 * Generates new properties based on calculations over the object provided
 *
 * @function
 * @param {Object} specObj - The object defining the transformations
 * @param {Object} obj - The source object
 * @returns {Object}
 *
 * @example
 * setDerivedProps({ c: ({ a, b }) => a + 1 }, { a: 1, b: 2 }); // { a: 1, b: 2, c: 3 }
 */
const setDerivedProps = (specObj, obj) => {
  const result = applySpec(specObj)(obj);
  return mergeDeepRight(obj, result);
};

export default curry(setDerivedProps);
