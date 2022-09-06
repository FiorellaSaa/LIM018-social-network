import Register, { validateEmail } from "../src/components/Register";

jest.mock('../src/firebase/auth');

escribe('validateEmail', () => {
    it('debería ser una función', () => {
      expect(typeof validateEmail).toBe('function');
    });
  });