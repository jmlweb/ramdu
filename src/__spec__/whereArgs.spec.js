import assert from 'assert';
import { gt, lt } from 'ramda';

import whereArgs from '../whereArgs';

describe('whereArgs', () => {
  it('returns true', () => {
    assert.equal(
      whereArgs({
        0: lt(1),
        1: gt(3),
      })(2, 2),
      true,
    );
  });
  it('returns false', () => {
    assert.equal(
      whereArgs({
        0: gt(1),
        1: lt(3),
      })(2, 2),
      false,
    );
  });
});
