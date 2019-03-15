import { complement, isNil } from 'ramda';

const isNotNil = complement(isNil);

export default isNotNil;
