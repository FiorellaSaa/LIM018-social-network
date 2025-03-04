/* eslint-disable import/no-cycle */
import { signInWithGoogle, signInWithEmail } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';

  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv imgLogo';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  /* ---------- */

  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  /* ----- Boton para iniciar sesion con Google ----- */
  const buttonLoginGoogle = document.createElement('input');
  buttonLoginGoogle.type = 'button';
  buttonLoginGoogle.value = 'Inicia sesión con Google';
  buttonLoginGoogle.id = 'buttonLoginGoogle';

  const imageGoogle = document.createElement('img');
  imageGoogle.id = 'imageGoogle';
  imageGoogle.src = './img/google.png';
  imageGoogle.alt = 'imagen de google';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonLogin = document.createElement('input');
  buttonLogin.type = 'button';
  buttonLogin.value = 'Inicia sesion';
  buttonLogin.id = 'buttonLogin';

  const messageErrorLogin = document.createElement('p');
  messageErrorLogin.id = 'messageErrorLogin';

  const textLogin = document.createElement('p');
  textLogin.textContent = 'No tengo cuenta';
  textLogin.className = 'textLogin';
  const backRegister = document.createElement('a');
  backRegister.textContent = 'Regístrate';

  backRegister.addEventListener('click', () => onNavigate('/register'));

  buttonLoginGoogle.addEventListener('click', () => {
    signInWithGoogle()
      .then(() => {
        onNavigate('/home');
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
      });
  });

  buttonLogin.addEventListener('click', () => {
    const email = inputMail.value;
    const password = inputPassword.value;

    signInWithEmail(email, password)
      .then((userCredential) => {
      // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        onNavigate('/home');
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        // eslint-disable-next-line no-unused-vars
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage.includes('Error (auth/wrong-password)')) {
          messageErrorLogin.innerHTML = 'Correo o contraseña incorrecta';
        } else if (errorMessage.includes('Error (auth/invalid-email)')) {
          messageErrorLogin.innerHTML = 'Correo o contraseña incorrecta';
        } else if (errorMessage.includes('Error (auth/user-not-found)')) {
          messageErrorLogin.innerHTML = 'Usuario no registrado';
        } else {
          messageErrorLogin.innerHTML = 'Ingrese los datos solicitados';
        }
      });
  });

  // imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(imgLogoDiv);
  logoTitleDiv.appendChild(titleLogo);
  HomeDiv.appendChild(logoTitleDiv);

  formLogin.appendChild(buttonLoginGoogle);
  buttonLoginGoogle.appendChild(imageGoogle);
  formLogin.appendChild(inputMail);
  formLogin.appendChild(inputPassword);
  HomeDiv.appendChild(formLogin);
  formLogin.appendChild(buttonLogin);
  formLogin.appendChild(messageErrorLogin);
  HomeDiv.appendChild(textLogin);
  textLogin.appendChild(backRegister);

  return HomeDiv;
};
