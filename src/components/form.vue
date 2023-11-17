<template>
  <div class="container mx-auto p-4">
    <h2 class="text-3xl text-center">Text me here,<br>I will recieve on Telegram!</h2>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto p-8 shadow-md rounded-md">
      <label class="block mb-2 text-sm font-semibold">Email:</label>
      <input v-model="email" type="email" name="email" class="w-full text-black bg-none px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />

      <label class="block mt-4 mb-2 text-sm font-semibold">Message:</label>
      <textarea v-model="message" type="textarea" name="message" class="w-full text-black bg-none px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"> </textarea>

      <button type="submit" class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>

      <p class="mt-2 text-white">{{ status }}</p>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Form",
  data() {
    return {
      email: '',
      message: '',
      status: '',
    };
  },
  methods: {
    async handleSubmit() {
      const data = new FormData();
      data.append('email', this.email);
      data.append('message', this.message);

      try {
        const response = await fetch('https://formspree.io/f/xvojnbap', {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          this.status = 'Thanks for your submission!';
          this.email = ''; // Reset the email field
          this.message = ''; // Reset the message field
        } else {
          const responseData = await response.json();
          if (responseData.errors) {
            this.status = responseData.errors.map((error) => error.message).join(', ');
          } else {
            this.status = 'Oops! There was a problem submitting your form';
          }
        }
      } catch (error) {
        this.status = 'Oops! There was a problem submitting your form';
      }
    },
  },
};
</script>

