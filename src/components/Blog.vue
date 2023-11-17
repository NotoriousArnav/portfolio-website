<template>
  <title>{{ blog.title }}</title>
  <div v-show="loading" class="container mx-auto mt-8  p-4 m-5 border-2 border-black rounded-sm backdrop-blur-md backdrop-brightness-50 text-white">
    <h1 class="text-3xl">Loading...</h1>
  </div>
  <div v-show="!loading" class="container mx-auto mt-8 p-4 m-5 border-2 border-black rounded-sm backdrop-blur-md backdrop-brightness-50 text-white ">
    <h1 class="text-3xl font-bold mb-4">
      <a class="group" :href="'https://bromine.vercel.app/blogs/'+slug" alt="Read this in Bromine">
        {{ blog.title }}
        <span class="group-hover:inline-flex transition-all duration-100 text-sm hidden">Click here to read in Bromine</span>
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </a>
    </h1>
    <div class="mb-4">{{ formatDate(blog.created_at) }}</div>
    <article v-html="blog.content" class="prose text-white"></article>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';

export default {
  name: 'BlogView',
  props: ['slug'],
  data() {
    return {
      blog: {},
      loading: false
    };
  },
  mounted() {
    this.fetchBlogPost();
  },
  methods: {
    async fetchBlogPost() {
      this.loading = true
      try {
        const response = await axios.get(
          '/api/blogs/'+this.slug
        );
        this.blog = response.data;
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
      this.loading=false
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style>
.prose h1, h2, h3, h4, h5, h6, strong{
  color: #fff!important;
}
/* Add your styles here using Tailwind CSS classes */
.prose {
  max-width: 100%!important;
}
</style>

