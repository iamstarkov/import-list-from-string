import { parse } from 'acorn';
import R from 'ramda';

const importsList = R.pipe(
  string => parse(string, { ecmaVersion: 6, sourceType: 'module' }),
  // R.prop('body'),
  // R.head,
  // R.prop('expression'),
  R.identity
)

export default function importListFromString(input) {
  if (!input) return;
  const res = importsList(input);
  console.log(res);
  return input;
};
