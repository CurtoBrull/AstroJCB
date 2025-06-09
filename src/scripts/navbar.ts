let menuVisible = false;

export function mostrarOcultarMenu(): void {
  const navElement = document.getElementById('nav');
  if (navElement) {
    navElement.classList.toggle('responsive');
  }
  menuVisible = !menuVisible;
}

export function seleccionar(): void {
  const navElement = document.getElementById('nav');
  if (navElement) {
    navElement.classList.remove('responsive');
  }
  menuVisible = false;
}
