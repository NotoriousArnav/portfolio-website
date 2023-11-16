<template>
  <Navigation class="m-5 border-2 border-black rounded-sm text-white backdrop-blur-md backdrop-brightness-50 p-4" />
  <HelloWorld class="p-4 m-5 border-2 border-black rounded-sm backdrop-blur-md backdrop-brightness-50 text-white" msg="Arnav Ghosh 👨‍💻"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
