<template>
  <div class="relative max-w-[1440px] mx-auto">
    <Navbar />
    <router-view/>
  </div>
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
