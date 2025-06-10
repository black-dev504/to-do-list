<template>
  <section class="bg-[#171717] min-h-screen">
    <div class="bg-[#171717] px-5 lg:px-20 py-15">
      <div class="flex w-6/10 mx-auto gap-4">
        <!-- <div class="relative overflow-hidden w-full min-h-30">/ -->
        <div class="flex h-12 items-center mb-10 group border-b-1 border-[#3E1671] w-full">
          <input
            @click="toggleInput"
            class="text-white py-3 px-2 w-full h-full focus:outline-0"
            placeholder="Task Category"
            type="text"
            v-model="category"
          />
        </div>
        <!-- <div
            v-if="clicked"
            class="transition-transform h-12 duration-700 border-b-1 border-[#3E1671] absolute w-full mb-10 top-16"
          >
            <input
              placeholder="Tasks"
              class="text-white px-3 py-3 h-full w-full flex focus:outline-0"
              type="text"
              v-model="currentList.tasks"
            />
          </div> -->
        <!-- </div> -->
        <button
          @click="addTask"
          class="text-white flex gap-4 justify-center w-10 h-10 bg-[#9E78CF] items-center rounded-lg cursor-pointer"
        >
          <img src="/icons/plus.svg" class="w-5 h-5" alt="" />
        </button>
      </div>
    </div>

    <div class="px-5 lg:px-20">
      <div class="flex gap-5">
        <div v-for="(list, index) in toDoList" :key="index">
          <toDo :category="list.category" :tasks="list.tasks" />
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
      clicked: false,

      category: '',
      tasks: '',

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
    addTask() {
      const exists = this.toDoList.some((list) => list.category === this.category)
      if (!exists && this.category.trim() !== '') {
        this.toDoList.push({
          category: this.category,
          tasks: ['read book', 'write code', 'exercise'],
        })
        this.category = ''
        console.log(this.toDoList)
      }
    },
  },
  mounted() {
    document.title = 'Do it'
  },
}
</script>
