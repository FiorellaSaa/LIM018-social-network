// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { createUserWithEmail, updateProfileUser } from '../firebase/auth.js';

// Función validación de email, inputMail
export const validateEmail = (inputMail, error) => {
  const messageRegister = error;
  // eslint-disable-next-line no-useless-escape
  const validateEmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  if (!validateEmailReg.test(inputMail)) {
    messageRegister.innerHTML = 'El email debería tener las siguientes características: email@ejemplo.algo';
    messageRegister.classList.add('show-messageError');
  } else {
    messageRegister.innerHTML = '';
    messageRegister.classList.remove('show-messageError');
  }
};

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'homeDiv';

  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv';
  const imgLogo = document.createElement('img');
  imgLogo.src = '../img/comida-sana-green.png';
  imgLogo.id = 'imgLogo';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';

  /* ---------- */

  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.id = 'inputName';
  inputName.placeholder = 'Ingresa tu nombre';

  const inputMail = document.createElement('input');
  inputMail.type = 'email';
  inputMail.id = 'inputMail';
  inputMail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.id = 'inputPassword';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonRegister = document.createElement('input');
  buttonRegister.type = 'button';
  buttonRegister.value = 'Registrarse';
  buttonRegister.id = 'buttonRegister';

  const textRegister = document.createElement('p');
  textRegister.textContent = 'Ya tengo una cuenta';
  textRegister.className = 'textRegister';
  const backLogin = document.createElement('a');
  backLogin.textContent = 'Inicia Sesión';

  const messageRegister = document.createElement('p');
  messageRegister.className = 'mensajeRegistro';
  messageRegister.id = 'mensajeRegistro';

  backLogin.addEventListener('click', () => onNavigate('/login'));

  inputMail.addEventListener('change', () => {
    validateEmail(inputMail.value, messageRegister);
  });

  // eslint-disable-next-line consistent-return
  buttonRegister.addEventListener('click', () => {
    if (inputName.value === '' || inputMail.value === '' || inputPassword.value === '') {
      // eslint-disable-next-line no-return-assign
      return (messageRegister.innerHTML = 'Ingresa los datos solicitados');
    }
    if (inputName.value.length < 3) {
      // eslint-disable-next-line no-return-assign
      return (messageRegister.innerHTML = 'Tu nombre es muy corto: al menos 3 caracteres');
    }
    // eslint-disable-next-line no-useless-escape
    const validateEmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if (!validateEmailReg.test(inputMail.value)) {
      // eslint-disable-next-line no-return-assign
      return (messageRegister.innerHTML = 'El email debería tener las siguientes características: email@ejemplo.algo');
    }
    if (inputPassword.value.length < 6) {
      // eslint-disable-next-line no-return-assign
      return (messageRegister.innerHTML = 'Password como mínimo con 6 caracteres');
    }

    createUserWithEmail(inputMail.value, inputPassword.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // user.displayName = nameUser;
        const uid = user.uid;
        updateProfileUser(inputName.value, uid)
          // eslint-disable-next-line no-console
          .then(() => console.log('Nombre actualizado'));
        // eslint-disable-next-line no-console
      }).catch((error) => {
        console.log(error);
      });
    onNavigate('/login');
  });

  imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(imgLogoDiv);
  logoTitleDiv.appendChild(titleLogo);
  HomeDiv.appendChild(logoTitleDiv);

  formRegister.appendChild(inputName);
  formRegister.appendChild(inputMail);
  formRegister.appendChild(inputPassword);
  formRegister.appendChild(buttonRegister);
  formRegister.appendChild(messageRegister);
  HomeDiv.appendChild(formRegister);
  HomeDiv.appendChild(textRegister);
  textRegister.appendChild(backLogin);
  return HomeDiv;
};
