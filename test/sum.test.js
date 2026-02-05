import { describe, it, expect } from 'vitest';
import { sum } from '../src/sum.js';

describe('sum', () => {
    it('suma dos números', () => {
    expect(sum(2, 3)).toBe(5);
    });

    it('suma dos números pares', () => {
    expect(sum(4, 6)).toBe(10);
    });
});
