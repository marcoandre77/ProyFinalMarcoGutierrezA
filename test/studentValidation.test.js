import { describe, it, expect } from 'vitest';
import { isAdult, isValidDocument, isValidName } from '../src/studentValidation.js';

describe('Validación de estudiante de ingeniería', () => {
    it('fecha de nacimiento debe ser mayor a 18 años', () => {
    const birthDateAdult = new Date('2000-01-01');
    expect(isAdult(birthDateAdult)).toBe(true);

    const birthDateMinor = new Date('2010-01-01');
    expect(isAdult(birthDateMinor)).toBe(false);
    });

    it('documento de identidad debe ser solo numérico', () => {
    expect(isValidDocument('123456')).toBe(true);
    expect(isValidDocument('ABC123')).toBe(false);
    expect(isValidDocument('')).toBe(false);
    });

    it('nombre completo debe ser solo alfabético', () => {
    expect(isValidName('Juan Pérez')).toBe(true);
    expect(isValidName('María José')).toBe(true);
    expect(isValidName('Carlos123')).toBe(false);
    expect(isValidName('')).toBe(false);
    });
});