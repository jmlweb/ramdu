import assert from 'assert';
import stubArray from './stubArray';

describe('stubArray', () => {
  it('works', () => {
    assert.deepEqual(stubArray(), []);
  });
});
