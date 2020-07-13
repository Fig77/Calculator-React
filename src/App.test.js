import
calculate
  from './logic/calculate';

describe('especial cases on calculator', () => {
  test('number/0 should return INF', () => {
    const answ = calculate.calculate({
      total: 10,
      next: 0,
      operation: '/',
    }, '=');
    expect(answ.result.total.toString()).toBe('INF');
  });

  test('0/0 should return Undefined', () => {
    const answ = calculate.calculate({
      total: '0',
      next: '0',
      operation: '/',
    }, '=');
    expect(answ.total.toString()).toBe('Undefined');
  });

  test('0 -> operation -> operation should return syntax error', () => {
    const answ = calculate.calculate({
      total: 0,
      next: '+',
      operation: '/',
    }, '=');
    expect(answ.result.total.toString()).toBe('Syntax Error');
  });

  test('operation -> operation -> operation should return syntax error', () => {
    const answ = calculate.calculate({
      total: 0,
      next: '+',
      operation: '/',
    }, '=');
    expect(answ.result.total.toString()).toBe('Syntax Error');
  });
});

describe('Basic algebra test cases', () => {
  test('call +/- and get negative if positive', () => {
    const answ = calculate.calculate({
      total: 10,
      next: '',
      operation: '+/-',
    }, '');
    expect(answ.result.total.toString()).toBe('-10');
  });

  test('number -> null -> = should return the same number', () => {
    const answ = calculate.calculate({
      total: '34562',
      next: '',
      operation: '=',
    }, '=');
    expect(answ.result.total.toString()).toBe('34562');
  });

  test('123 * 2 should return 246', () => {
    const answ = calculate.calculate({
      total: '123',
      next: '2',
      operation: '*',
    }, '=');
    expect(answ.result.total.toString()).toBe('246');
  });

  test('246 / 2 should return 123', () => {
    const answ = calculate.calculate({
      total: '246',
      next: '2',
      operation: '/',
    }, '=');
    expect(answ.result.total.toString()).toBe('123');
  });

  test('31 % 3 should return 1', () => {
    const answ = calculate.calculate({
      total: 31,
      next: '3',
      operation: '%',
    }, '=');
    expect(answ.result.total.toString()).toBe('1');
  });

  test('1234 - 1235 should return -1', () => {
    const answ = calculate.calculate({
      total: '1234',
      next: '1235',
      operation: '-',
    }, '=');
    expect(answ.result.total.toString()).toBe('-1');
  });

  test('9568 + 251 should return 9819', () => {
    const answ = calculate.calculate({
      total: '9568',
      next: '251',
      operation: '+',
    }, '=');
    expect(answ.result.total.toString()).toBe('9819');
  });
});
