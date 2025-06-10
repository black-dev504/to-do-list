<template>
  <div class="bg-[#2E2E2E] min-w-[300px] p-5 rounded-lg flex flex-col gap-5 justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-[#E8E8E8] font-bold text-2xl">{{ category }}</h1>
    </div>

    <div class="flex flex-col gap-3">
      <div
        v-for="(task, index) in tasks"
        :key="index"
        class="rounded-lg flex justify-between items-center w-full"
      >
        <div class="flex items-center justify-center gap-3 w-full">
          <input
            @click="task.completed = !task.completed"
            v-model="task.completed"
            type="checkbox"
            class="appearance-none checked:bg-[#a09f9f] w-4 h-4 cursor-pointer border-1 border-[#9E78CF] bg-[#2E2E2E] rounded-sm"
          />
          <div class="flex justify-between items-center w-full">
            <p
              :class="[
                'w-full text-sm',
                checkedTasks.includes(index) ? 'line-through text-[#a09f9f]' : 'text-[#9E78CF]',
              ]"
            >
              {{ task.text }}
            </p>
            <button @click="deleteTask(task.id)">
              <img src="/icons/deleteicon.svg" class="w-3 h-3 cursor-pointer" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-2 items-center">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add new task"
        class="text-white px-2 py-1 border-b-1 border-[#9E78CF] w-full focus:outline-0"
      />
    </div>
    <div class="flex justify-between items-center">
      <button @click="addTask">
        <img class="w-5 h-5 cursor-pointer" src="/icons/addicon.svg" alt="" />
      </button>
      <button>
        <img
          @click="removeCategory"
          class="w-5 h-5 cursor-pointer"
          src="/icons/deleteicon.svg"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    category: {
      type: String,
    },
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newTask: '',
      checkedTasks: [],
    }
  },
  methods: {
    removeCategory() {
      this.$emit('remove-category', this.category)
    },

    addTask() {
      if (this.newTask.trim() !== '') {
        this.$emit('add-task', this.category, this.newTask)
        this.newTask = ''
      }
    },

    deleteTask(index) {
      this.$emit('delete-task', this.category, index)
    },

    toggleChecked(index) {
      if (this.checkedTasks.includes(index)) {
        this.checkedTasks = this.checkedTasks.filter((i) => i !== index)
      } else {
        this.checkedTasks.push(index)
      }
    },
  },
}
</script>
