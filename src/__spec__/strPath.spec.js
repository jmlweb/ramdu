import assert from 'assert';
import strPath from '../strPath';

describe('strPath', () => {
  it('works', () => {
    const obj = {
      a: {
        b: {
          c: 'foo',
        },
      },
    };
    assert.equal(strPath('a.b.c', obj), 'foo');
    assert.equal(strPath('a.b.c')(obj), 'foo');
  });
});
