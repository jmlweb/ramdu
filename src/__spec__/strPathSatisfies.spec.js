import assert from 'assert';
import { equals, isEmpty } from 'ramda';

import strPathSatisfies from '../strPathSatisfies';

describe('strPathSatisfies', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns true', () => {
    assert.equal(strPathSatisfies(equals('foo'), 'a.b.c', obj), true);
  });
  it('returns false', () => {
    assert.equal(strPathSatisfies(isEmpty)('a.b.c')(obj), false);
  });
});
