/**
 * @jest-environment jsdom
 */

import { Register, validateEmail } from '../src/components/Register.js';

jest.mock('../src/firebase/auth.js');

describe('Register', () => {
  beforeEach(() => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Register());
  });
  it('Debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  it('Existen los inputs y botón en registro', () => {
    // console.log(rootDiv.innerHTML);
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputMail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonRegister = document.getElementById('buttonRegister');
    expect(inputName instanceof HTMLElement).toBe(true);
    expect(inputEmail instanceof HTMLElement).toBe(true);
    expect(inputPassword instanceof HTMLElement).toBe(true);
    expect(buttonRegister instanceof HTMLElement).toBe(true);
  });
  it('Click en el botón registro(campos completados) y cambiar de vista', () => {
    const inputName = document.getElementById('inputName');
    const inputMail = document.getElementById('inputMail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonRegister = document.getElementById('buttonRegister');
    inputName.value = 'ejemplo';
    inputMail.value = 'ejemplo@email.com';
    inputPassword.value = 123456;
    buttonRegister.click();
    console.log('hola');
    expect(window.location.pathname).toBe('/login');
    // console.log(document.body.innerHTML);
  });
  it('Click en el botón registro para campos vacíos', () => {
    const inputName = document.getElementById('inputName');
    const inputMail = document.getElementById('inputMail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonRegister = document.getElementById('buttonRegister');
    const errorMessage = document.getElementById('mensajeRegistro');
    inputName.value = '';
    inputMail.value = '';
    inputPassword.value = '';
    buttonRegister.click();
    expect(errorMessage.innerHTML).toBe('Ingresa los datos solicitados');
  });
  it('Mensaje para password menor a 6 caracteres', () => {
    const inputName = document.getElementById('inputName');
    const inputMail = document.getElementById('inputMail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonRegister = document.getElementById('buttonRegister');
    const errorMessage = document.getElementById('mensajeRegistro');
    inputName.value = 'ejemplo';
    inputMail.value = 'ejemplo@email.com';
    inputPassword.value = 123;
    buttonRegister.click();
    expect(errorMessage.innerHTML).toBe('Password como mínimo con 6 caracteres');
  });
  it('Mensaje para email que no cumpla con características', () => {
    // DADO
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Register());
    const inputMail = document.getElementById('inputMail');
    const errorMessage = document.getElementById('mensajeRegistro');
    // CUANDO
    inputMail.value = 'email';
    inputMail.dispatchEvent(new Event('change'));
    // ENTONCES
    expect(errorMessage.innerHTML).toBe('El email debería tener las siguientes características: email@ejemplo.algo');
  });
});
describe('validateEmail', () => {
  it('debería ser una función', () => {
    expect(typeof validateEmail).toBe('function');
  });
});
