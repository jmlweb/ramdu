import { curry, equals, length, multiply, pipe, slice } from 'ramda';

const getStart = pipe(
  length,
  multiply(-1),
);

const endsWith = (testStr, str) =>
  pipe(
    slice(getStart(testStr), Infinity),
    equals(testStr),
  )(str);

export default curry(endsWith);
