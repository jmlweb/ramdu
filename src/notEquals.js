import { complement, equals } from 'ramda';

const notEquals = complement(equals);

export default notEquals;
