<template>
  <section class="bg-[#171717] min-h-screen primary-font px-5 lg:px-20 py-15">
    <div class="flex gap-4 mx-auto category-input w-6/10">
      <div class="flex h-12 items-center mb-10 group border-b-1 border-[#3E1671] w-full">
        <input
          @click="toggleInput"
          class="w-full h-full px-2 py-3 text-white focus:outline-0"
          placeholder="Task Category"
          type="text"
          v-model="category"
        />
      </div>

      <button
        @click="addCategory"
        class="text-white flex gap-4 justify-center w-10 h-10 bg-[#9E78CF] items-center rounded-lg cursor-pointer"
      >
        <img src="/icons/plus.svg" class="w-5 h-5" alt="" />
      </button>
    </div>

    <div class="py-20">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(list, index) in toDoList" :key="index">
          <toDo
            :category="list.category"
            :tasks="list.tasks"
            @add-task="addTask"
            @delete-task="deleteTask"
            @remove-category="removeCategory"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import toDo from '../components/toDo.vue'
export default {
  name: 'Home',
  data() {
    return {
      category: '',
      tasks: [],
      toDoList: [],
    }
  },
  components: {
    toDo,
  },
  methods: {
    toggleInput() {
      this.clicked = true
    },

    addCategory() {
      const exists = this.toDoList.some((list) => list.category === this.category)
      if (!exists && this.category.trim() !== '') {
        this.toDoList.push({
          category: this.category,
          tasks: [],
        })
        this.category = ''
      }
    },

    removeCategory(category) {
      this.toDoList = this.toDoList.filter((list) => list.category !== category)
    },

    addTask(category, newTask) {
      const currentList = this.toDoList.find((list) => list.category === category)
      if (currentList) {
        currentList.tasks.push({ id: Date.now() + Math.random(), text: newTask, completed: false })
      }
    },

    deleteTask(category, id) {
      const currentList = this.toDoList.find((list) => list.category === category)

      if (currentList) {
        currentList.tasks = currentList.tasks.filter((task) => task.id !== id)
      }
    },
  },
}
</script>
