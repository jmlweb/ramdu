import { complement } from 'ramda';

import endsWith from './endsWith';

const notEndsWith = complement(endsWith);

export default notEndsWith;
