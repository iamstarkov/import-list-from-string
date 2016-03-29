import { parse } from 'acorn';
import R from 'ramda';

// contract :: String -> Constructor -> a
const contract = R.curry((name, ctor, param) => R.unless(
  R.is(ctor),
  () => { throw new TypeError(`\`${name}\` should be \`${R.type(ctor())}\`, but got \`${R.type(param)}\``); }
)(param));

const log = console.log.bind(console);

const importList = R.unary(R.pipe(
  contract('input', String),
  string => parse(string, { sourceType: 'module' }),
  R.prop('body'),
  R.filter(R.propEq('type', 'ImportDeclaration')),
  R.map(R.path(['source', 'value'])),
  R.identity
));

export default importList;
