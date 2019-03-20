import assert from 'assert';
import capitalize from '../capitalize';

describe('capitalize', () => {
  it('works', () => {
    assert.equal(capitalize('hello'), 'Hello');
  });
});
