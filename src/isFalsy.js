import { either, isEmpty, equals, pipe } from 'ramda';

const isFalsy = either(
  isEmpty,
  pipe(
    Boolean,
    equals(false),
  ),
);

export default isFalsy;
