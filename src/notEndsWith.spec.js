import assert from 'assert';
import notEndsWith from './notEndsWith';

describe('notEndsWith', () => {
  it('returns true', () => {
    assert.equal(notEndsWith('mar', 'mc hammer'), true);
    assert.equal(notEndsWith('mar')('mc hammer'), true);
  });
  it('returns false', () => {
    assert.equal(notEndsWith('mer', 'mc hammer'), false);
  });
});
