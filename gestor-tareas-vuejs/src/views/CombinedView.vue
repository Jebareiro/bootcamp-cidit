<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Lista de Tareas</h1>

    <!-- Campo para añadir nuevas tareas (centrado) -->
    <div class="add-task-container mb-4 d-flex justify-content-center align-items-center">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Añadir una nueva tarea"
        class="form-control me-2"
        style="max-width: 400px"
      />
      <button @click="addTask" class="btn btn-primary">
        Añadir
      </button>
    </div>

    <!-- Mostrar las tareas combinadas, que ya incluyen las tareas de la API -->
    <div v-if="allTasks.length > 0">
      <h3>Tareas:</h3>
      <div v-for="task in allTasks" :key="task.id" class="task card mb-3">
        <div class="card-body">
          <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }" class="card-title">
            {{ task.todo }}
          </h5>
          <span 
            :class="{'text-success': task.completed, 'text-danger': !task.completed}"
            class="d-block mb-2"
          >
            {{ task.completed ? 'Completada' : 'Pendiente' }}
          </span>

          <!-- Botones centrados con iconos -->
          <div class="d-flex justify-content-center">
            <div class="btn-group" role="group">
              <button @click="toggleTaskCompletion(task)" class="btn btn-sm btn-warning">
                <i class="fas fa-check"></i> {{ task.completed ? 'Desmarcar' : 'Completar' }}
              </button>
              <button @click="deleteTask(task)" class="btn btn-sm btn-danger">
                <i class="fas fa-trash-alt"></i> Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-info text-center">
      No hay tareas disponibles.
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CombinedView',
  data() {
    return {
      newTask: '', // Tarea nueva que se va a añadir
      allTasks: [], // Tareas combinadas de la API y las nuevas
    };
  },
  mounted() {
    this.fetchTasks(); // Cargar las tareas desde la API al montar el componente
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        this.allTasks = response.data.todos; // Asume que la respuesta tiene un array "todos"
      } catch (error) {
        console.error('Error al cargar las tareas desde la API:', error);
      }
    },
    addTask() {
      if (this.newTask.trim() === '') return; // No permitir tareas vacías
      const task = {
        todo: this.newTask,
        completed: false,
        id: Date.now(), // Asignamos un ID único con la hora actual
      };
      this.allTasks.unshift(task); // Agregamos la tarea al principio del array
      this.newTask = ''; // Limpiamos el campo de texto
    },
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },
    deleteTask(task) {
      this.allTasks = this.allTasks.filter(t => t.id !== task.id);
    },
  },
};
</script>

<style scoped>
.task {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 10px;
  max-width: 500px; /* Ajustamos el ancho de las tarjetas */
  margin: 10px auto; /* Centrado de las tarjetas */
}

.task:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.card-title {
  font-size: 16px; /* Reducimos el tamaño del texto */
  font-weight: bold;
}

.card-body {
  background-color: #f8f9fa;
}

button {
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
}

.btn-group .btn {
  margin-right: 5px; /* Reduce el espacio entre los botones */
}

.btn-warning {
  transition: background-color 0.3s ease;
}

.btn-warning:hover {
  background-color: #e0a800;
}

.btn-danger {
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
}

.alert {
  font-size: 16px;
  font-weight: bold;
}

.alert-info {
  margin-top: 20px;
}

/* Estilos para los iconos */
button i {
  margin-right: 5px;
  font-size: 16px;
}
</style>

<!-- No olvides importar FontAwesome en tu archivo index.html (si aún no lo has hecho) -->
<!-- Agrega este código dentro de la etiqueta <head> de tu archivo index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
