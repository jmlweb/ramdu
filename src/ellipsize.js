import { append, curry, slice, pipe, when } from 'ramda';

import ltLength from './ltLength';

const ellipsize = curry((maxChars, str) =>
  when(
    ltLength(maxChars),
    pipe(
      slice(0, maxChars),
      append('…'),
    ),
  )(str),
);

export default ellipsize;
