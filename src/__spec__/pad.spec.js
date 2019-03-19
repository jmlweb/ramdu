import assert from 'assert';

import { padStart, padEnd, pad } from '../pad';

describe('pad functions', () => {
  it('padStart', () => {
    assert.equal(padStart(5, ' ', 'foo'), '  foo');
    assert.equal(padStart(3, ' ', 'foo'), 'foo');
  });
  it('padEnd', () => {
    assert.equal(padEnd(5, ' ', 'foo'), 'foo  ');
    assert.equal(padEnd(3, ' ', 'foo'), 'foo');
  });
  it('pad', () => {
    assert.equal(pad(5, ' ', 'foo'), ' foo ');
    assert.equal(pad(3, ' ', 'foo'), 'foo');
  });
});
