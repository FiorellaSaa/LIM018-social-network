/**
 * @jest-environment jsdom
 */
import { Home } from '../src/components/Home.js';

jest.mock('../src/firebase/auth.js');

describe('Home', () => {
  it('Debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  it('Debería existir un espacio para crear un post, un botón para publicar', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    rootDiv.appendChild(Home());
    const publicationDiv = document.getElementById('publicationDiv');
    const buttonPublication = document.getElementById('buttonPublication');
    expect(publicationDiv instanceof HTMLElement).toBe(true);
    expect(buttonPublication instanceof HTMLElement).toBe(true);
  });
});
/* beforeEach(() => {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
  rootDiv.appendChild(Home());
}); */
