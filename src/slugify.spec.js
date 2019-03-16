import assert from 'assert';
import slugify from './slugify';

describe('slugify', () => {
  it('works', () => {
    assert.equal(slugify('My name is Earl'), 'my-name-is-earl');
    assert.equal(slugify('José Manuel Lucas Muñoz'), 'jose-manuel-lucas-munoz');
  });
});
