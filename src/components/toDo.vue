<template>
  <div class="bg-[#2E2E2E] min-w-[300px] p-5 rounded-lg flex flex-col gap-5 justify-between">
    <h1 class="text-[#E8E8E8] font-bold text-2xl">{{ category }}</h1>

    <div class="flex flex-col gap-3">
      <div
        v-for="(task, index) in tasks"
        :key="index"
        class="rounded-lg flex justify-between items-center"
      >
        <div class="flex items-center justify-center gap-3">
          <input
            type="checkbox"
            class="appearance-none checked:bg-[#9E78CF] w-4 h-4 cursor-pointer border-1 border-[#9E78CF] bg-[#2E2E2E] rounded-sm"
            v-model="clicked"
            @click="clicked = !clicked"
          />
          <p class="text-[#9E78CF]">{{ task }}</p>
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
      <button @click="$emit('add-task', newTask)">
        <img class="w-5 h-5 cursor-pointer" src="/icons/addicon.svg" alt="" />
      </button>
      <button>
        <img class="w-5 h-5 cursor-pointer" src="/icons/deleteicon.svg" alt="" />
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
      clicked: false,
    }
  },
}
</script>

<style></style>
