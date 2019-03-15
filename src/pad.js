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

export const padStart = padSide(concat);

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

export const pad = (len, char, str) => {
  const appended = getAppended(len, char, str);
  const parts = juxt([getPart(take, Math.floor), getPart(takeLast, Math.ceil)])(appended);
  return pipe(
    insert(1, str),
    join(''),
  )(parts);
};
