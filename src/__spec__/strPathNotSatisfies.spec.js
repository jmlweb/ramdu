import assert from 'assert';
import { equals, isEmpty } from 'ramda';

import strPathNotSatisfies from '../strPathNotSatisfies';

describe('strPathNotSatisfies', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns true', () => {
    assert.equal(strPathNotSatisfies(isEmpty)('a.b.c')(obj), true);
  });
  it('returns false', () => {
    assert.equal(strPathNotSatisfies(equals('foo'), 'a.b.c', obj), false);
  });
});
