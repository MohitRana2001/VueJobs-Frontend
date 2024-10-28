<script>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue'
  import { RouterView } from 'vue-router';

  export default {
    components: {
      Navbar,
      Hero,
      HomeCards,
    }
  }
</script>

<template>
  <Navbar />
  <RouterView />
</template>