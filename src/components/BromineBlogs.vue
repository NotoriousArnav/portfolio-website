<template>
  <div class="gap-2">
    <h1 class="text-5xl">My Blogs on Bromine</h1>
    <div v-show="loading">
      Loading...
    </div>
    <br>
    <ul class="sm:grid sm:grid-cols-2 gap-4">
        <li class="border-0 p-2 hover:p-3 rounded hover:border-2 hover:backdrop-blur-xl transition-all duration-100" v-for="(blog, index) in blogs" :key="index">
          <h2 class="text-xl font-bold mb-2">{{ blog.title }}</h2>
          <p><strong>Created at:</strong> {{ blog.created_at }}</p>
        </li>
    </ul>
  </div>  
</template>

<script>
import axios from 'axios'
// import axiosJsonp from 'axios-jsonp'
export default {
  /* eslint-disable */
  name: 'Blogs',
  props: {
    msg: String
  },
  data () {
    return {
      blogs: [],
      loading: false
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get('/api/blogs/?uuid=&author__username=NotoriousArnav');
        if (Array.isArray(response.data)) {
          this.blogs = response.data;
          this.loading=false
        } else {
          console.error('Invalid response format. Expected an array:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

