import { adjust, is, join, pipe, toUpper, when } from 'ramda';

import camelCase from './camelCase';

const pascalCase = pipe(
  camelCase,
  adjust(0, toUpper),
  when(is(Array), join('')),
);

export default pascalCase;