import assert from 'assert';
import { toLower, toUpper } from 'ramda';

import evolveKeys from '../evolveKeys';

describe('evolveKeys', () => {
  it('works', () => {
    const obj = {
      upper: 'a',
      LOWER: 'b',
      Normal: 'c',
    };
    assert.deepEqual(
      evolveKeys(
        {
          upper: toUpper,
          LOWER: toLower,
        },
        obj,
      ),
      {
        UPPER: 'a',
        lower: 'b',
        Normal: 'c',
      },
    );
  });
});
