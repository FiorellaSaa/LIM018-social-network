/**
 * @jest-environment jsdom
 */

import { Login } from '../src/components/Login.js';

jest.mock('../src/firebase/auth.js');

// document.body.innerHTML = `<div id='root'></div>`

describe('Login', () => {
  it('Debería tener un boton para logearse con google', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Login());
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    // buttonGoogle.click();
    expect(buttonGoogle instanceof HTMLElement).toBe(true);
  });
  it('Click en el botón de google para cambiar de vista', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Login());
    const buttonGoogle = document.getElementById('buttonLoginGoogle');
    buttonGoogle.click();
    setTimeout(() => {
      expect(window.location.pathname).toBe('/home');
    }, 800);
  });
  it('Click en el botón iniciar sesión para cambiar de vista', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Login());
    const buttonLogin = document.getElementById('buttonLogin');
    buttonLogin.click();
    expect(window.location.pathname).toBe('/home');
  });
  // eslint-disable-next-line max-len
  /* it('Al iniciar sesion correctamente debe mostrar el nombre de la usuaria en la pantalla del home', () => {
    const userName = 'beatrux';
    // DADO
    // mockear las funciones dee firebase que uso durante el login
    // renderizar el componente de login

    // CUANDO
    // rellenar los campos del formulario correctamente
    // darle click al boton de iniciar sesion

    // ENTONCES
    const userNameElement = document.querySelector('selectro del elemento que tiene el nombre');
    expect(userNameElement.textContent).toBe(userName); // este expect se debe
    llamar de manera asincrona)
  }); */
});
