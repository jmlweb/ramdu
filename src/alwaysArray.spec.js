import assert from 'assert';
import alwaysArray from './alwaysArray';

describe('alwaysArray', () => {
  it('works', () => {
    assert.deepEqual(alwaysArray(), []);
  });
});
