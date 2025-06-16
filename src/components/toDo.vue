<template>
  <div class="bg-[#2E2E2E] min-w-[250px] p-5 rounded-lg flex flex-col gap-5 justify-between">
    <div class="flex items-center justify-between">
      <h1 class="text-[#E8E8E8] font-bold text-2xl">{{ category }}</h1>
      <p
        v-if="tasks.length > 0"
        :class="['text-[#8d8d8d]', percentageCompleted === 'Completed' && 'text-green-400']"
      >
        {{ percentageCompleted }}
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <div
        v-for="(task, index) in tasks"
        :key="index"
        class="flex items-center justify-between w-full rounded-lg"
      >
        <div class="flex items-center justify-center w-full gap-3">
          <input
            @click="toggleCheck(task)"
            v-model="task.completed"
            type="checkbox"
            :id="task.id"
            :value="task.completed"
            required
            class="appearance-none checked:bg-[#a09f9f] w-4 h-4 cursor-pointer border-1 border-[#9E78CF] bg-[#2E2E2E] rounded-sm"
          />
          <div class="flex items-center justify-between w-full">
            <p
              :class="[
                'w-full text-sm',
                task.completed ? 'line-through text-[#a09f9f]' : 'text-[#9E78CF]',
              ]"
            >
              {{ task.text }}
            </p>
            <button @click="deleteTask(task)">
              <img src="/icons/deleteicon.svg" class="w-3 h-3 cursor-pointer" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add new task"
        @keyup.enter="addTask"
        class="text-white px-2 py-1 border-b-1 border-[#9E78CF] w-full focus:outline-0"
      />
    </div>
    <div class="flex items-center justify-between">
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
      done: 0,
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

    deleteTask(task) {
      this.$emit('delete-task', this.category, task.id)
      task.completed && this.done--
    },
    toggleCheck(task) {
      task.completed = !task.completed
      task.completed ? this.done++ : this.done--
    },
  },
  computed: {
    percentageCompleted() {
      if (!this.tasks.length) return 0
      const done = this.tasks.filter((task) => task.completed).length
      const percentage = Math.floor((done / this.tasks.length) * 100)
      return percentage === 100 ? 'Completed' : `${percentage}% completed`
    },
  },
}
</script>
