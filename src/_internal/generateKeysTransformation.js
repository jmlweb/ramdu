import { assoc, curry, keys, prop, reduce } from 'ramda';

const generateKeysTransformation = getKey =>
  curry((transformArg, obj) =>
    reduce((acc, curr) => assoc(getKey(transformArg, curr), prop(curr, obj), acc), {})(keys(obj)),
  );

export default generateKeysTransformation;
