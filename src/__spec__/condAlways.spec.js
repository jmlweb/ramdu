import assert from 'assert';
import { prop } from 'ramda';

import condAlways from '../condAlways';

describe('condAlways', () => {
  const fn = condAlways([[prop('foo'), 'a'], [prop('bar'), 'b']]);
  it('returns first value', () => {
    assert.equal(fn({ foo: true }), 'a');
  });
  it('returns second value', () => {
    assert.equal(fn({ bar: true }), 'b');
  });
  it('returns undefined', () => {
    assert.equal(fn({}), undefined);
  });
});
