// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Welcome = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  homeDiv.id = 'welcome';

  const imgFood = document.createElement('div');
  imgFood.className = 'imgFood';

  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'welcomeDiv';

  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv imgLogo';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'HEALTHY FOOD LOVERS';
  titleLogo.className = 'titleLogo';
  titleLogo.id = 'titleWelcome';

  /* ---------- */

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';

  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'buttonRegister';

  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'buttonLogin';

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(imgFood);

  logoTitleDiv.appendChild(imgLogoDiv);
  logoTitleDiv.appendChild(titleLogo);
  welcomeDiv.appendChild(logoTitleDiv);

  homeDiv.appendChild(welcomeDiv);
  buttonDiv.appendChild(buttonRegister);
  buttonDiv.appendChild(buttonLogin);
  welcomeDiv.appendChild(buttonDiv);

  return homeDiv;
};
