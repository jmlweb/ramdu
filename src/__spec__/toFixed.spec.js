import assert from 'assert';
import toFixed from '../toFixed';

describe('toFixed', () => {
  it('works', () => {
    assert.equal(toFixed(2, 23.56786), '23.57');
    assert.equal(toFixed(2)(23.56212), '23.56');
  });
});
