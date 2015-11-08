import { equal } from 'assert';
import importListFromString from './index';

const input = `
import out from 'out';
import local from './local';
`;

it('should importListFromString', () =>
  equal(importListFromString('input'), ['out', './local']));

it('should importListFromString invalid input', () =>
  equal(importListFromString(), undefined));
