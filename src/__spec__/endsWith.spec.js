import assert from 'assert';
import endsWith from '../endsWith';

describe('endsWith', () => {
  it('returns true', () => {
    assert.equal(endsWith('px')('5px'), true);
  });
  it('returns false', () => {
    assert.equal(endsWith('px')('5'), false);
    assert.equal(endsWith('px')('5PX'), false);
  });
});
