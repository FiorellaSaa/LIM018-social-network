// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
/**
 * @jest-environment jsdom
 */
import { Welcome } from '../src/components/Welcome.js';

jest.mock('../src/firebase/auth');

describe('Welcome', () => {
  it('Debería ser una función', () => {
    expect(typeof Welcome).toBe('function');
  });
  it('Existen los botones de registro y login', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Welcome());
    const buttonRegister = document.getElementById('buttonRegister');
    const buttonLogin = document.getElementById('buttonLogin');
    expect(buttonRegister instanceof HTMLElement).toBe(true);
    expect(buttonLogin instanceof HTMLElement).toBe(true);
  });
  it('Click en el botón registrar para ir a la vista register', () => {
    const buttonRegister = document.getElementById('buttonRegister');
    buttonRegister.click();
    expect(window.location.pathname).toBe('/register');
  });
  it('Click en el botón iniciar sesión para ir a la vista login', () => {
    const rootDiv = document.createElement('div');
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Welcome());
    const buttonLogin = document.getElementById('buttonLogin');
    buttonLogin.click();
    expect(window.location.pathname).toBe('/login');
  });
});
