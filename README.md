![Ramdu](https://raw.githubusercontent.com/jmlweb/ramdu/master/ramdu.svg?sanitize=true)

# Small utils set built around Ramda

[![Last Commit][last-commit-badge]][last-commit]
[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[last-commit-badge]: https://img.shields.io/github/last-commit/jmlweb/ramdu.svg
[last-commit]: https://github.com/jmlweb/ramdu
[build-badge]: https://img.shields.io/travis/jmlweb/ramdu/master.png?style=flat-square
[build]: https://travis-ci.org/jmlweb/ramdu
[npm-badge]: https://img.shields.io/npm/v/ramdu.png?style=flat-square
[npm]: https://www.npmjs.org/package/ramdu
[coveralls-badge]: https://img.shields.io/coveralls/jmlweb/ramdu/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/jmlweb/ramdu

## Getting started

Ramdu has some goals:

- To be lightweight
- To use only pure functions with a general purpose
- To export currified versions of all functions
- To look like original Ramda as much as possible

### [Documentation](https://jmlweb.github.io/ramdu/)

### Quick start

```sh
yarn add ramdu
# or
npm install ramdu
```

#### es6

```
import * as RU from 'ramdu';
```

```
import { alwaysArray } from 'ramdu';
```

```
import alwaysArray from 'ramdu/alwaysArray';
```

#### node

```
const RU = require('ramdu');
```

## What does include?

### String functions

[camelCase](https://jmlweb.github.io/ramdu/global.html#camelCase), [Capitalize](https://jmlweb.github.io/ramdu/global.html#capitalize), [deburr](https://jmlweb.github.io/ramdu/global.html#deburr), [ellipsize…](https://jmlweb.github.io/ramdu/global.html#ellipsize), [pascal-case](https://jmlweb.github.io/ramdu/global.html#pascalCase), [snake_case](https://jmlweb.github.io/ramdu/global.html#snakeCase), [UPPER_SNAKE_CASE](https://jmlweb.github.io/ramdu/global.html#upperSnakeCase), [pad](https://jmlweb.github.io/ramdu/global.html#pad), [padStart](https://jmlweb.github.io/ramdu/global.html#padStart), [padEnd](https://jmlweb.github.io/ramdu/global.html#padEnd), [words](https://jmlweb.github.io/ramdu/global.html#words)

### Keys transformation functions

[renameKeys](https://jmlweb.github.io/ramdu/global.html#renameKeys), [evolveKeys](https://jmlweb.github.io/ramdu/global.html#evolveKeys), [mapKeys](https://jmlweb.github.io/ramdu/global.html#mapKeys)

### "is" functions

[isNot](https://jmlweb.github.io/ramdu/global.html#isNot), [isNotEmpty](https://jmlweb.github.io/ramdu/global.html#isNotEmpty), [isNotNil](https://jmlweb.github.io/ramdu/global.html#isNotNil), [isEven](https://jmlweb.github.io/ramdu/global.html#isEven), [isOdd](https://jmlweb.github.io/ramdu/global.html#isOdd), [isFalsy](https://jmlweb.github.io/ramdu/global.html#isFalsy), [isTruthy](https://jmlweb.github.io/ramdu/global.html#isTruthy), [isBetween](https://jmlweb.github.io/ramdu/global.html#isBetween), [isNotBetween](https://jmlweb.github.io/ramdu/global.html#isNotBetween), [propIsFalsy](https://jmlweb.github.io/ramdu/global.html#propIsFalsy), [propIsTruthy](https://jmlweb.github.io/ramdu/global.html#propIsTruthy)

### Indexed functions

[mapIndexed](https://jmlweb.github.io/ramdu/global.html#mapIndexed), [filterIndexed](https://jmlweb.github.io/ramdu/global.html#filterIndexed), [reduceIndexed](https://jmlweb.github.io/ramdu/global.html#reduceIndexed)

### Path as dotted string functions

[strAssocPath](https://jmlweb.github.io/ramdu/global.html#strAssocPath), [strDissocPath](https://jmlweb.github.io/ramdu/global.html#strDissocPath), [strHasPath](https://jmlweb.github.io/ramdu/global.html#strHasPath), [strLensPath](https://jmlweb.github.io/ramdu/global.html#strLensPath), [strNotHasPath](https://jmlweb.github.io/ramdu/global.html#strNotHasPath), [strPath](https://jmlweb.github.io/ramdu/global.html#strPath), [strPathEq](https://jmlweb.github.io/ramdu/global.html#strPathEq), [strPathNotEq](https://jmlweb.github.io/ramdu/global.html#strPathNotEq), [strPathNotSatisfies](https://jmlweb.github.io/ramdu/global.html#strPathNotSatisfies), [strPathOr](https://jmlweb.github.io/ramdu/global.html#strPathOr), [strPathSatisfies](https://jmlweb.github.io/ramdu/global.html#strPathSatisfies)

### "defaultTo" functions

[defaultToArray](https://jmlweb.github.io/ramdu/global.html#defaultToArray), [defaultToFalse](https://jmlweb.github.io/ramdu/global.html#defaultToFalse), [defaultToObject](https://jmlweb.github.io/ramdu/global.html#defaultToObject), [defaultToString](https://jmlweb.github.io/ramdu/global.html#defaultToString), [defaultToTrue](https://jmlweb.github.io/ramdu/global.html#defaultToTrue), [defaultToZero](https://jmlweb.github.io/ramdu/global.html#defaultToZero)

### "always" functions

[alwaysArray](https://jmlweb.github.io/ramdu/global.html#alwaysArray), [alwaysObject](https://jmlweb.github.io/ramdu/global.html#alwaysObject), [alwaysString](https://jmlweb.github.io/ramdu/global.html#alwaysString), [alwaysZero](https://jmlweb.github.io/ramdu/global.html#alwaysZero)

### Argument functions

[list](https://jmlweb.github.io/ramdu/global.html#list), [whenArgs](https://jmlweb.github.io/ramdu/global.html#whenArgs), [withEvolvedArgs](https://jmlweb.github.io/ramdu/global.html#withEvolvedArgs)

### ...and much more

> Ramdu - Small utils set built around Ramda
