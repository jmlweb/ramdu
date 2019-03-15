import assert from 'assert';
import compact from './compact';

describe('compact', () => {
  it('works', () => {
    assert.deepEqual(compact([undefined, 1, null, 'a', '']), [1, 'a']);
  });
});
