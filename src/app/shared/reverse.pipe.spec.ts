import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('reverses a string', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toBe('olleh');
  });
});
