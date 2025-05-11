<template>
  <div id="app">
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg p-3" style="background-color: #0B5ED7; border-bottom: 2px solid #0B5ED7;">
      <div class="container-fluid">
        <!-- Título con ícono de Vue.js -->
        <span class="navbar-brand d-flex align-items-center fw-bold" style="color: white;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="30" height="30" class="me-2">
          Gestor de Tareas
        </span>

       <!-- Botones de navegación -->
        <ul class="nav">
          <li class="nav-item me-2">
            <router-link class="nav-link d-flex align-items-center justify-content-center" to="/addtask" style="background-color: #35495E; color: white; padding: 10px 20px; border-radius: 5px;">
              <i class="fas fa-plus-circle text-white me-2"></i> Agregar Tarea
            </router-link>
          </li>
          <li class="nav-item me-2">
            <router-link class="nav-link d-flex align-items-center justify-content-center" to="/tasklist" style="background-color: #35495E; color: white; padding: 10px 20px; border-radius: 5px;">
              <i class="fas fa-list-ul text-white me-2"></i> Lista de Tareas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center justify-content-center" to="/combinedview" style="background-color: #35495E; color: white; padding: 10px 20px; border-radius: 5px;">
              <i class="fas fa-th-large text-white me-2"></i> Vista Combinada
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>