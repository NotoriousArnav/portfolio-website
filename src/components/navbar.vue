<template>
  <nav class="">
    <div class="flex sm:gap-8 items-center justify-between">
      <!-- Logo or Branding -->
      <div class="text-white font-bold text-lg">Arnav Ghosh</div>

      <!-- Hamburger Icon for Mobile -->
      <button @click="toggleNavbar" class="lg:hidden text-white focus:outline-none">
        <font-awesome-icon :icon="['fas', 'bars']" />
        <i class="fas fa-bars"></i>
      </button>

      <!-- Navbar Links -->
      <div :class="{ 'hidden': !isNavbarOpen }" class="lg:flex flex-grow items-center transition-all">
        <a href="#" class="group text-white duration-200 transition text-sm sm:text-lg px-1 py-1">
          Home
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href="#" class="group text-white duration-200 transition text-sm sm:text-lg px-1 py-1">
          Blogs
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href="#" class="group text-white duration-200 transition text-sm sm:text-lg px-1 py-1">
          Leave a Text
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Navigation',
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
