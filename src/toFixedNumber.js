import { curry, pipe } from 'ramda';

import toFixed from './toFixed';

const toFixedNumber = pipe(
  toFixed,
  Number,
);

export default curry(toFixedNumber);
