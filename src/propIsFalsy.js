import { propSatisfies } from 'ramda';

import isFalsy from './isFalsy';

const propIsFalsy = propSatisfies(isFalsy);

export default propIsFalsy;
