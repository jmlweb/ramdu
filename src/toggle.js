import { curry, equals } from 'ramda';
import xIfElse from './xIfElse';

const toggle = curry((firstValue, secondValue, currentValue) =>
  xIfElse(equals(currentValue, firstValue), secondValue, firstValue),
);

export default toggle;
