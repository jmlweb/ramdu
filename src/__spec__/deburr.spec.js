import assert from 'assert';
import deburr from '../deburr';

describe('deburr', () => {
  it('works', () => {
    assert.deepEqual(deburr('José Manuel Lucas Muñoz'), 'Jose Manuel Lucas Munoz');
  });
});
