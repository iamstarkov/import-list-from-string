# import-list-from-string

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/import-list-from-string.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get list of es2015 imports from string

## Install

    npm install --save import-list-from-string

## Usage

```js
import importList from 'import-list-from-string';

const input = `
import out from 'out';
import local from './local';

console.log('yo');`;

importList(input); // ['out', './local']
```

## API

### importList(input)

#### input

*Required*  
Type: `String`

Your stringified JavaScript code in es2015.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/import-list-from-string
[npm-image]: https://img.shields.io/npm/v/import-list-from-string.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/import-list-from-string
[travis-image]: https://img.shields.io/travis/iamstarkov/import-list-from-string.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/import-list-from-string
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/import-list-from-string.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/import-list-from-string
[depstat-image]: https://david-dm.org/iamstarkov/import-list-from-string.svg?style=flat-square
