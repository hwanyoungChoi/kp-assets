import { toFormattedPrice } from './utils';

describe('utils', () => {
  test('toFormattedPrice', () => {
    expect(toFormattedPrice(0)).toBe('0원');
    expect(toFormattedPrice()).toBe('0원');
    expect(toFormattedPrice(-400)).toBe('-400원');
    expect(toFormattedPrice(512345)).toBe('512,345원');
  });
});
