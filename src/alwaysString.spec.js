import assert from 'assert';
import alwaysString from './alwaysString';

describe('alwaysString', () => {
  it('works', () => {
    assert.equal(alwaysString(), '');
  });
});
