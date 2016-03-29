import { parse as _parse } from 'acorn';
import { simple } from 'acorn/dist/walk';
import R from 'ramda';

// contract :: String -> Constructor -> a
const contract = R.curry((name, ctor, param) => R.unless(
  R.is(ctor),
  () => { throw new TypeError(`\`${name}\` should be \`${R.type(ctor())}\`, but got \`${R.type(param)}\``); }
)(param));

const parse = input => _parse(input, { sourceType: 'module' });
const importValue = R.path(['source', 'value']);

const importList = R.unary(R.pipe(
  contract('input', String),
  parse,
  ast => {
    let list = [];
    const addToList = item => { list = list.concat(item); };
    simple(ast, {
      ImportDeclaration: R.pipe(importValue, addToList)
    });
    return list;
  }
));

export default importList;
