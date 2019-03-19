import assert from 'assert';
import reverseConcat from '../reverseConcat';

describe('reverseConcat', () => {
  it('works', () => {
    assert.equal(reverseConcat('oo', 'f'), 'foo');
    assert.deepEqual(reverseConcat(['o', 'o'], ['f']), ['f', 'o', 'o']);
  });
});
