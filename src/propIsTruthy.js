import { propSatisfies } from 'ramda';

import isTruthy from './isTruthy';

const propIsTruthy = propSatisfies(isTruthy);

export default propIsTruthy;
