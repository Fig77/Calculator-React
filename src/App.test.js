import React from 'react';
import {
  render
} from '@testing-library/react';
import App from './components/App';
import
calculate
from './logic/calculate';

describe('quick calculatortest', () => {
  test('call +/- and get negative if positive', () => {
    let answ = calculate.calculate({
      total: 10,
      next: '',
      operation: '+/-'
    }, '');
    expect(answ.result.total.toString()).toBe('-10');
  });

  test('number/0 should return INF', () => {
    let answ = calculate.calculate({
      total: 10,
      next: 0,
      operation: '/'
    }, '=');
    expect(answ.result.total.toString()).toBe('INF');
  });

  test('0/0 should return Undefined', () => {
    let answ = calculate.calculate({
      total: '0',
      next: '0',
      operation: '/'
    }, '=');
    expect(answ.total.toString()).toBe('Undefined');
  });

  test('0 -> operation -> operation should return syntax error', () => {
    let answ = calculate.calculate({
      total: 0,
      next: '+',
      operation: '/'
    }, '=');
    expect(answ.result.total.toString()).toBe('Syntax Error');
  });

  test('0 -> operation -> operation should return syntax error', () => {
    let answ = calculate.calculate({
      total: 0,
      next: '+',
      operation: '/'
    }, '=');
    expect(answ.result.total.toString()).toBe('Syntax Error');
  });

  test('number -> null -> = should return the same number', () => {
    let answ = calculate.calculate({
      total: '34562',
      next: '',
      operation: '='
    }, '=');
    expect(answ.result.total.toString()).toBe('34562');
  });

  test('123 * 2 should return 246', () => {
    let answ = calculate.calculate({
      total: '123',
      next: '2',
      operation: '*'
    }, '=');
    expect(answ.result.total.toString()).toBe('246');
  });

  test('31 % 3 should return 1', () => {
    let answ = calculate.calculate({
      total: 31,
      next: '3',
      operation: '%'
    }, '=');
    expect(answ.result.total.toString()).toBe('1');
  });

  test('1234 + -1235 should return 2469', () => {
    let answ = calculate.calculate({
      total: '1234',
      next: '-1235',
      operation: '+'
    }, '=');
    expect(answ.result.total.toString()).toBe('-1');
  });

  test('9568 + 251 should return 9819', () => {
    let answ = calculate.calculate({
      total: '9568',
      next: '251',
      operation: '+'
    }, '=');
    expect(answ.result.total.toString()).toBe('9819');
  });
})