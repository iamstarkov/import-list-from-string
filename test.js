import { deepEqual } from 'assert';
import importListFromString from './index';

const input = `
import out from 'out';
import local from './local';`;

it('should importListFromString', () =>
  deepEqual(importListFromString(input), ['out', './local']));

it('should importListFromString invalid input', () =>
  deepEqual(importListFromString(), undefined));
