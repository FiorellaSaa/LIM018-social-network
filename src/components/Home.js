/* eslint-disable import/no-cycle */
import { signOutLogOut } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const divContainer = document.createElement('div');
  divContainer.className = 'divContainer';

  const headerTitle = document.createElement('div');
  headerTitle.className = 'headerTitle';

  const titleLogoHome = document.createElement('h2');
  titleLogoHome.textContent = 'HEALTHY FOOD LOVERS';
  titleLogoHome.className = 'titleLogoHome';

  const logo = document.createElement('div');
  logo.className = 'logo';
  const logoImg = document.createElement('img');
  logoImg.src = '../img/healthyfood.png';

  const logoLogout = document.createElement('div');
  logoLogout.className = 'logoLogout';
  const imgLogoLogout = document.createElement('img');
  imgLogoLogout.src = '../img/logout.png';

  //const logout = document.createElement('a');
  //logout.textContent = 'Cerrar Sesión';
  //logout.className = 'logout';
  //logout.addEventListener('click', () => onNavigate('/'));
  imgLogoLogout.addEventListener('click', () => {
    signOutLogOut()
    .then((userCredential) => {
      onNavigate('/')
    });
  });
    //logout.addEventListener('click', () => onNavigate('/'));

  const divPublication = document.createElement('div');
  divPublication.className = 'divPublication';

  const inputPublication = document.createElement('input');
  inputPublication.placeholder = '¿Qué estás pensando?';
  inputPublication.className = 'inputPublication';

  const buttonPublication = document.createElement('input');
  buttonPublication.className = 'buttonPublication';
  buttonPublication.type = 'button';
  buttonPublication.value = 'Publicar';

  const showPublication = document.createElement('div');
  showPublication.className = 'showPublication';

  const publication = document.createElement('p');
  publication.textContent = 'Aquí se publica';
  
  buttonPublication.addEventListener('click', () =>{
    let enterPublication = inputPublication.value;
    if(enterPublication !== ''){
      console.log(enterPublication);
    }else{
      console.log('nada');
    }
  });

  const footer = document.createElement('div');
  footer.textContent = 'Hola';
  footer.className = 'footer';

  HomeDiv.appendChild(divContainer);
  logo.appendChild(logoImg);
  headerTitle.appendChild(logo);
  headerTitle.appendChild(titleLogoHome);
  headerTitle.appendChild(logoLogout);
  logoLogout.appendChild(imgLogoLogout);
  //headerTitle.appendChild(logout);
  divContainer.appendChild(headerTitle);
  divContainer.appendChild(divPublication);
  divPublication.appendChild(inputPublication);
  divPublication.appendChild(buttonPublication);
  divContainer.appendChild(showPublication);
  divContainer.appendChild(footer);
  showPublication.appendChild(publication);

  return HomeDiv;
};
