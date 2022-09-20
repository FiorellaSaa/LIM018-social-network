/**
 * @jest-environment jsdom
 */
import { signOutUser } from '../src/lib/index.js';

jest.mock('../src/firebase/auth.js');

describe('signOutUser', () => {
  it('Debería ser una función', () => {
    expect(typeof signOutUser).toBe('function');
  });
  it('Al cerrar cesión debe dirigirse a welcome', () => {
    const logOut = document.createElement('logOut');
    logOut.click();
    expect(window.location.pathname).toBe('/');
  });
});
