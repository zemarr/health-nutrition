<template>
  <div class="relative max-w-[1440px] mx-auto h-[max-content]">
    <Navbar />
    <div class="translate-y-[95px] md:translate-y-[93px] pb-[150px]">
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
