import assert from 'assert';

import ellipsize from '../ellipsize';

describe('ellipsize', () => {
  it('ellipis', () => {
    assert.equal(ellipsize(2, 'foo'), 'fo…');
    assert.equal(ellipsize(2)('foo'), 'fo…');
  });
  it('no ellipsis', () => {
    assert.equal(ellipsize(3, 'foo'), 'foo');
    assert.equal(ellipsize(5)('foo'), 'foo');
  });
});
