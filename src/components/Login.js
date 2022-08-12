/* eslint-disable import/no-cycle */
import { signInWithGoogle, signInWithEmail } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  /* ----- Boton para iniciar sesion con Google ----- */
  const buttonLoginGoogle = document.createElement('input');
  buttonLoginGoogle.type = 'button';
  buttonLoginGoogle.value = 'Inicia sesion Google';
  buttonLoginGoogle.id = 'buttonLoginGoogle';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonLogin = document.createElement('input');
  buttonLogin.type = 'button';
  buttonLogin.value = 'Inicia sesion';// publi-home
  buttonLogin.id = 'buttonLogin';

  // const buttonHome = document.createElement('button');
  // buttonHome.textContent = 'Regresar al home';

  buttonLoginGoogle.addEventListener('click', () => {
    signInWithGoogle();
  });

  buttonLogin.addEventListener('click', () => {
    const email = inputMail.value;
    const password = inputPassword.value;

    signInWithEmail(email, password);
  });

  // buttonHome.addEventListener('click', () => onNavigate('/'));

  // HomeDiv.appendChild(buttonHome);
  HomeDiv.appendChild(titleLogo);
  formLogin.appendChild(buttonLoginGoogle);
  formLogin.appendChild(inputMail);
  formLogin.appendChild(inputPassword);
  HomeDiv.appendChild(formLogin);
  formLogin.appendChild(buttonLogin);

  return HomeDiv;
};
