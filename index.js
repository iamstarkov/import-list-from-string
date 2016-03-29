import { parse } from 'acorn';
import R from 'ramda';

// contract :: String -> Constructor -> a
const contract = R.curry((name, ctor, param) => R.unless(
  R.is(ctor),
  () => { throw new TypeError(`\`${name}\` should be \`${R.type(ctor())}\`, but got \`${R.type(param)}\``); }
)(param));

const importList = R.unary(R.pipe(
  contract('input', String),
  string => parse(string, { ecmaVersion: 6, sourceType: 'module' }),
  R.prop('body'),
  R.map(R.path(['source', 'value'])),
  R.reject(R.isNil)
));

export default importList;
