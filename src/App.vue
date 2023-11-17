<template>
  <Navigation class="m-5 border-2 border-black rounded-sm text-white backdrop-blur-md backdrop-brightness-50 p-4" />
  <router-view/>
</template>

<script>
import Navigation from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
body {
  background: url("./assets/bck.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
