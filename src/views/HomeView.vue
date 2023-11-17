<template>
  <div>
    <HelloWorld class="p-4 m-5 border-2 border-black rounded-sm backdrop-blur-md backdrop-brightness-50 text-white" msg="Arnav Ghosh 👨‍💻"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
