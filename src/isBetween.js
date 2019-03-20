import { both, curry, lte, gte } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

const isBetweenSrc = curry((min, max, val) => both(lte(min), gte(max))(val));

const isBetween = withEvolvedArgs(
  {
    0: Number,
    1: Number,
    2: Number,
  },
  isBetweenSrc,
);

export default isBetween;
