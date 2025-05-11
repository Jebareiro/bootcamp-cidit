<template>
  <div class="add-task-container">
    <h1>Añadir Tarea</h1>
    <div class="input-group mb-4">
      <input 
        v-model="newTask" 
        @keyup.enter="addTask" 
        placeholder="Añadir nueva tarea" 
        class="form-control task-input"
      />
      <button @click="addTask" class="btn btn-primary ms-2">
        <i class="fas fa-plus-circle"></i> Añadir
      </button>
    </div>

    <div v-if="tasks.length > 0" class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task-item d-flex justify-content-between align-items-center p-3 mb-2 bg-light rounded shadow-sm">
        <span :class="{ completed: task.completed }">{{ task.todo }}</span>
        <div>
          <button @click="toggleTaskCompletion(task)" class="btn btn-success me-2">
            {{ task.completed ? 'Desmarcar' : 'Completar' }}
          </button>
          <button @click="deleteTask(task)" class="btn btn-danger">
            <i class="fas fa-trash-alt"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTask: "", // Campo de entrada para la nueva tarea
      tasks: [],   // Lista de tareas locales
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;

      const newTask = {
        todo: this.newTask,
        completed: false,
        id: Date.now(), 
      };

      // Añadir la nueva tarea al inicio de la lista
      this.tasks.unshift(newTask);
      this.newTask = ""; // Limpiar el campo de entrada después de agregar
    },

    // Elimina una tarea específica de la lista
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },

    // Cambia el estado de la tarea entre completada y no completada
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },
  },
};
</script>

<style scoped>
.add-task-container {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #35495E;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  justify-content: center;
}

.task-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.task-input:focus {
  border-color: #007bff;
}

.add-button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #0056b3;
}

.add-button i {
  margin-right: 8px;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-item:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
}

.btn-complete {
  background-color: #28a745;
  color: white;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-complete:hover {
  background-color: #218838;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-delete:hover {
  background-color: #c82333;
}

button i {
  margin-right: 5px;
}
</style>

