import assert from 'assert';
import { prop } from 'ramda';

import ifElseAlways from '../ifElseAlways';

describe('ifElseAlways', () => {
  it('returns first argument', () => {
    assert.equal(ifElseAlways(prop('foo'), 'a', 'b')({ foo: true }), 'a');
    assert.equal(ifElseAlways(true, 'a', 'b')({}), 'a');
  });
  it('returns second argument', () => {
    assert.equal(ifElseAlways(prop('bar'), 'a', 'b')({ foo: false }), 'b');
    assert.equal(ifElseAlways(false, 'a', 'b')(), 'b');
  });
});
