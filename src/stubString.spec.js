import assert from 'assert';
import stubString from './stubString';

describe('stubString', () => {
  it('works', () => {
    assert.equal(stubString(), '');
  });
});
