import assert from 'assert';
import renameKeys from '../renameKeys';

describe('renameKeys', () => {
  it('works', () => {
    assert.deepEqual(
      renameKeys(
        {
          one: 'oneX',
          two: 'twoX',
        },
        {
          one: 'foo',
          two: 'bar',
          three: 'baz',
        },
      ),
      {
        oneX: 'foo',
        twoX: 'bar',
        three: 'baz',
      },
    );
  });
});
