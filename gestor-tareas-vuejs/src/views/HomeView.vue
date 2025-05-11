<template> 
  <div class="text-center mt-4 p-4" style="background-color: #F8F9FA; border-radius: 8px;">
    <!-- Mensaje de bienvenida -->
    <h1 class="welcome-title">
      Bienvenido a la <span class="highlighted">Aplicación de Tareas con Vue</span>
    </h1>
    <p class="mt-3 description">
      Esta aplicación te permite gestionar tus tareas de manera eficiente.
    </p>
    <p class="description">
      Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" 
      alt="Vue Logo" 
      width="120" 
      class="my-4 interactive-image" 
      title="¡Explora las funcionalidades de Vue.js!" />

    <h3 class="section-title">Secciones de la Aplicación</h3>
    <ul class="list-unstyled features-list">
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API.</li>
      <li><strong>Vista Combinada:</strong> Combina funcionalidades de añadir y ver tareas.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style>
/* Estilo del mensaje de bienvenida */
.welcome-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0B5ED7; /* Azul principal */
}

.welcome-title .highlighted {
  color: #35495E; /* Azul más oscuro */
}

.description {
  font-size: 1.2rem;
  color: #5F5F5F;
}

.interactive-image {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.interactive-image:hover {
  transform: scale(1.1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #0B5ED7;
}

.features-list li {
  font-size: 1.2rem;
  color: #3A3A3A;
  margin: 10px 0;
}

.features-list li strong {
  color: #35495E;
}
</style>
