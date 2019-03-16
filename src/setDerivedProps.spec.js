import assert from 'assert';
import setDerivedProps from './setDerivedProps';

describe('reverseConcat', () => {
  it('works', () => {
    const result = setDerivedProps(
      {
        result: ({ a, b }) => `${a}${b}`,
        c: {
          d: ({ a }) => a,
        },
      },
      {
        a: 'foo',
        b: 'bar',
        c: {
          e: 'bar',
        },
      },
    );

    assert.deepEqual(result, {
      a: 'foo',
      b: 'bar',
      result: 'foobar',
      c: {
        d: 'foo',
        e: 'bar',
      },
    });
  });
});
