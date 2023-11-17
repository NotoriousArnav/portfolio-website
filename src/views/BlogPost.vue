<template>
  <div>
    <BlogView :slug="slug" class="text-white" msg="Arnav Ghosh 👨‍💻"/>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import BlogView from '@/components/Blog.vue'

export default {
  name: 'BlogPost',
  props: ['slug'],
  components: {
    BlogView
  }
}
</script>
