<template>
  <transition name="fadeInOut">
    <div v-show="modalActive" class="modal-backdrop z-[1500] absolute top-0 left-0 w-full h-screen backdrop-blur">
      <!-- Modal Content -->
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: ['modalActive'],
  setup () {
    return {}
  }
}
</script>

<style scoped>
.fadeInOut-enter-from {
  opacity: 0;
}
.fadeInOut-enter-to {
  opacity: 1;
}
.fadeInOut-enter-active {
  transition: all .4s ease;
}
.fadeInOut-leave-from {
  opacity: 1;
}
.fadeInOut-leave-to {
  opacity: 0;
}
</style>
