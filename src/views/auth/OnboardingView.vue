<template>
  <div>
    <div class="bg-greenDark3 md:px-12 px-6 py-12">
      <h1 class="md:mb-[24px] mb-[23px] font-normal md:text-[32px] text-[22px] leading-[38.4px] md:leading-[26.4px] text-center text-greenDark">Personalize your experience</h1>
      <p class="text-center md:text-[18px] text-[16px] md:leading-[25.2px] leading-[22.4px]">We need to know you better to be able to create a unique experience for you.</p>

      <div class="relative">
        <div class="progressbar max-w-[327px] md:max-w-[400px] mx-auto h-[5px]">
          <div class="progress h-full w-[0%] bg-greenDark"></div>
        </div>
        <div class="content relative"></div>
        <div class="content relative"></div>
        <div class="content relative"></div>
        <div class="content relative"></div>
        <div class="content relative"></div>
        <div class="content relative"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const progressBar = document.querySelector('.progressbar')
    const progress = document.querySelector('.progress')
    const contents = document.querySelectorAll('.content')
    console.log(contents)
    return {
      progressBar,
      progress
    }
  }
}
</script>

<style scoped>

</style>
