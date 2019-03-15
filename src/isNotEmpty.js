import { complement, isEmpty } from 'ramda';

const isNotEmpty = complement(isEmpty);

export default isNotEmpty;
