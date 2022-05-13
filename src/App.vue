<template>
  <div class="relative w-full">
    <Navbar />
  </div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'

export default {
  name: 'LogoComponent',
  components: {
    Navbar
  },
  setup () {

  }
}
</script>

<style>
</style>
