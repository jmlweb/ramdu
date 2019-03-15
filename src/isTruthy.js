import { complement } from 'ramda';

import isFalsy from './isFalsy';

const isTruthy = complement(isFalsy);

export default isTruthy;
