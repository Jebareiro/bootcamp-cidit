<template>
  <div class="task-list-container">
    <h1 class="text-center my-4">Lista de Tareas</h1>
    <button class="btn btn-primary mb-4" @click="fetchTasks">
      Cargar Tareas
    </button>

    <div v-if="tasks.length > 0">
      <div v-for="task in tasks" :key="task.id" class="task-item card mb-3">
        <div class="card-body">
          <h5 
            class="card-title" 
            :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
          >
            {{ task.todo }}
          </h5>
          <p 
            class="card-text" 
            :class="{ 'text-success': task.completed, 'text-danger': !task.completed }"
          >
            {{ task.completed ? 'Completada' : 'Pendiente' }}
          </p>
          
          <div class="d-flex justify-content-center">
            <div class="btn-group" role="group">
              <button 
                class="btn btn-sm btn-success" 
                @click="toggleTaskCompletion(task)"
              >
                <i class="fas fa-check"></i> {{ task.completed ? 'Desmarcar' : 'Completar' }}
              </button>
              <button 
                class="btn btn-sm btn-danger" 
                @click="deleteTask(task)"
              >
                <i class="fas fa-trash-alt"></i> Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-info text-center">
      No hay tareas cargadas.
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: [], // Aquí se almacenarán las tareas traídas de la API
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        this.tasks = response.data.todos; // Asume que la respuesta tiene un array "todos"
      } catch (error) {
        console.error('Error al cargar las tareas desde la API:', error);
      }
    },
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
  },
};
</script>

<style scoped>
.task-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.task-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px; /* Ajustamos el ancho de las tarjetas */
  margin: 10px auto; /* Centrado de las tarjetas */
}

.task-item:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-text {
  font-size: 14px;
}

button {
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
}

.btn-group .btn {
  margin-right: 10px; /* Ajustamos el espacio entre los botones */
}

.btn-success {
  transition: background-color 0.3s ease;
}

.btn-success:hover {
  background-color: #218838;
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

.card-body {
  background-color: #ffffff;
}

/* Estilos para los iconos */
button i {
  margin-right: 5px;
  font-size: 16px;
}
</style>

<!-- Código dentro de la etiqueta <head> del archivo index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
