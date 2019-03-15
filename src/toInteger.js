import { partialRight } from 'ramda';

const toInteger = partialRight(parseInt, [10]);

export default toInteger;
