<template>
  <div class="relative max-w-[1440px] mx-auto h-[max-content]">
    <Navbar />
    <div class="pt-[95px] md:pt-[93px]">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  name: 'LogoComponent',
  components: {
    Navbar,
    Footer
  },
  setup () {

  }
}
</script>

<style>
</style>
