import { deepEqual, throws } from 'assert';
import importListFromString from './index';

const input = `
import out from 'out';
import local from './local';`;

const extended = `
import out from 'out';
import local from './local';

console.log('yo');
`;

it('should importListFromString', () =>
  deepEqual(importListFromString(input), ['out', './local']));

it('should importListFromString extended', () =>
  deepEqual(importListFromString(extended), ['out', './local']));

it('should throw TypeError on empty input', () =>
  throws(() => { importListFromString(); }, TypeError));

it('should throw TypeError on invalid input', () =>
  throws(() => { importListFromString(1); }, TypeError));
