import { join, replace, pipe, toLower } from 'ramda';

import deburr from './deburr';
import words from './words';

const slugify = pipe(
  toLower,
  deburr,
  words,
  join('-'),
  replace(/[^a-zA-Z\d-]+/g, ''),
);

export default slugify;
