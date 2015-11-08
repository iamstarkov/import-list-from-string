import { parse } from 'acorn';
import { pipe, prop, map, path } from 'ramda';

const importList = pipe(
  string => parse(string, { ecmaVersion: 6, sourceType: 'module' }),
  prop('body'),
  map(path(['source', 'value'])));

export default function importListFromString(input) {
  if (!input) return;
  return importList(input);
};
