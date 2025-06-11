<template>
  <section class="w-full mx-auto overflow-hidden">
    <Header />
    <Home />
  </section>
</template>

<script>
import Header from './views/Header.vue'
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
