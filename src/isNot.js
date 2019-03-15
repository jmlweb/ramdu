import { complement, is } from 'ramda';

const isNot = complement(is);

export default isNot;
