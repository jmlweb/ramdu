import assert from 'assert';
import strAssocPath from '../strAssocPath';

describe('strAssocPath', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  const result = {
    a: {
      b: {
        c: 'bar',
      },
    },
  };
  it('works', () => {
    assert.deepEqual(strAssocPath('a.b.c', 'bar', obj), result);
    assert.deepEqual(strAssocPath('a.b.c', 'bar')(obj), result);
    assert.deepEqual(strAssocPath('a.b.c')('bar', obj), result);
  });
});
