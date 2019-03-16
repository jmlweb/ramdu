import {
  always,
  apply,
  concat,
  divide,
  identity,
  insert,
  join,
  juxt,
  length,
  nthArg,
  pipe,
  take,
  takeLast,
  times,
  __,
} from 'ramda';

import reverseConcat from './reverseConcat';

const getAppended = (len, char, str) => {
  const strLen = length(str);
  if (len > strLen) {
    const getChar = always(char);
    const padCharArr = times(getChar, len - strLen);
    return join('', padCharArr);
  }
  return '';
};

const padSide = fn =>
  pipe(
    juxt([getAppended, nthArg(2)]),
    apply(fn),
  );

/**
 * Forces a string to be of n length.
 * If the string is shorter, it will be filled from the start with the char provided
 *
 * @function
 * @param {Number} len
 * @param {String} char - The char for filling
 * @param {String} str - The source string
 * @returns {String}
 *
 * @example
 * padStart(5, '*', 'foo'); // '**foo'
 */
export const padStart = padSide(concat);

/**
 * Forces a string to be of n length.
 * If the string is shorter, it will be filled from the end with the char provided
 *
 * @function
 * @param {Number} len
 * @param {String} char - The char for filling
 * @param {String} str - The source string
 * @returns {String}
 *
 * @example
 * padEnd(5, '*', 'foo'); // 'foo**'
 */
export const padEnd = padSide(reverseConcat);

const getHalf = pipe(
  length,
  divide(__, 2),
);
const getPart = (takeFn, roundFn) =>
  pipe(
    juxt([
      pipe(
        getHalf,
        roundFn,
      ),
      identity,
    ]),
    apply(takeFn),
  );

/**
 * Forces a string to be of n length.
 * If the string is shorter, it will be filled from both sides with the char provided
 *
 * @function
 * @param {Number} len
 * @param {String} char - The char for filling
 * @param {String} str - The source string
 * @returns {String}
 *
 * @example
 * pad(5, '*', 'foo'); // '*foo*'
 * pad(6, '*', 'foo'); // '*foo**'
 * pad(3, '*', 'foo'); // 'foo'
 */
export const pad = (len, char, str) => {
  const appended = getAppended(len, char, str);
  const parts = juxt([getPart(take, Math.floor), getPart(takeLast, Math.ceil)])(appended);
  return pipe(
    insert(1, str),
    join(''),
  )(parts);
};
