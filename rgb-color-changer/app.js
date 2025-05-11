// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  // Cambia el color de fondo usando los valores RGB.
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Función para actualizar el texto y el color de fondo al cambiar el slider
function actualizarValores() {
  // Actualizacion de los valores de los textos
  textoRojo.textContent = inputRojo.value;
  textoVerde.textContent = inputVerde.value;
  textoAzul.textContent = inputAzul.value;

  // función para actualizar el color de fondo
  actualizarColor(inputRojo.value, inputVerde.value, inputAzul.value);
}

// Agrega event listeners para los inputs de color.
inputRojo.addEventListener('input', actualizarValores);
inputVerde.addEventListener('input', actualizarValores);
inputAzul.addEventListener('input', actualizarValores);

// Llamar a la función para establecer el color inicial.
actualizarValores();
