<template>
 <Header />
 <Home />

</template>

<script>
import Header from './views/Header.vue'
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Header, Home
  },
  data() {
    return {
    
    }
  },
  mounted() {
    document.title = this.title;
  }

}
</script>

<style>

</style>