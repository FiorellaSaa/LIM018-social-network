// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { createUserWithEmail } from '../firebase/auth.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Ingresa tu nombre';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonRegister = document.createElement('input');
  buttonRegister.type = 'button';
  buttonRegister.value = 'Registrarse';
  buttonRegister.id = 'buttonRegister';

  const textLogin = document.createElement('p');
  textLogin.textContent = 'Ya tengo una cuenta';
  textLogin.className = 'textLogin';
  const backLogin = document.createElement('a');
  backLogin.textContent = 'Inicia Sesión';
  backLogin.addEventListener('click', () => onNavigate('/login'));

  buttonRegister.addEventListener('click', () => {
    const email = inputMail.value;
    const password = inputPassword.value;

    createUserWithEmail(email, password);
  });


  HomeDiv.appendChild(titleLogo);
  formLogin.appendChild(inputName);
  formLogin.appendChild(inputMail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(buttonRegister);
  HomeDiv.appendChild(formLogin);
  HomeDiv.appendChild(textLogin);
  textLogin.appendChild(backLogin);
  
  return HomeDiv;
};
