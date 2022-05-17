<template>
  <div class="relative max-w-[1440px] mx-auto h-[max-content]">
    <Navbar />
    <div class="translate-y-[95px] md:translate-y-[93px]">
      <router-view/>
    </div>
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
