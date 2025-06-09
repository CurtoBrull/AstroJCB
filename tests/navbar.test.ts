import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import { mostrarOcultarMenu } from '../src/scripts/navbar';

describe('NavBar script', () => {
  it('mostrarOcultarMenu toggles responsive class', () => {
    const dom = new JSDOM(`<nav id="nav" class="navigation"></nav>`);
    // @ts-ignore
    global.document = dom.window.document;

    const nav = dom.window.document.getElementById('nav')!;
    expect(nav.classList.contains('responsive')).toBe(false);

    mostrarOcultarMenu();
    expect(nav.classList.contains('responsive')).toBe(true);

    mostrarOcultarMenu();
    expect(nav.classList.contains('responsive')).toBe(false);
  });
});
