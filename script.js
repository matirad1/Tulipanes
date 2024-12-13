// Selecciona el elemento que contendrá las estrellas
const cielo = document.querySelector('.cielo');

// Define la cantidad de estrellas que deseas generar
const cantidadEstrellas = 100;

// Genera estrellas de forma aleatoria
for (let i = 0; i < cantidadEstrellas; i++) {
  const estrella = document.createElement('div');
  estrella.className = 'estrella';

  // Genera una posición aleatoria para la estrella
  const top = Math.random() * 100 + '%';
  const left = Math.random() * 100 + '%';

  estrella.style.top = top;
  estrella.style.left = left;

  cielo.appendChild(estrella);
}
const botonAvanzar = document.querySelector('.boton-avanzar');
const tulipanes = document.querySelector('.tulipanes');

botonAvanzar.addEventListener('click', () => {
  document.querySelector('.introduccion').style.display = 'none';
  tulipanes.style.display = 'block';
});