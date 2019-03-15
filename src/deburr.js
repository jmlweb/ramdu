import { invoker, pipe, replace } from 'ramda';

const normalizer = invoker(1, 'normalize');

const deburr = pipe(
  normalizer('NFD'),
  replace(/[\u0300-\u036f]/g, ''),
);

export default deburr;
