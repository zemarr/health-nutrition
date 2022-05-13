<template>
  <div class="home">
    <section class="relative hero w-full grid lg:grid-cols-2 grid-cols-1 bg-greenDark">
      <div class="left xl:ml-[180px] lg:ml-[90px] md:ml-[35px] mx-6">
        <div class="max-w-[443px] py-[120px]">
          <h1 class="text-brandGreen font-light text-[42px] leading-[50.4px] mb-6">
            We’re professional <br> <span class="font-bold">health nutritionists</span> <br> <span class="font-bold">here for you 24/7</span> <br> with <span class="font-bold">141204</span> members
          </h1>
          <p class="font-light text-[24px] leading-[33.6px] mb-6">
            <span class="font-bold text-[24px] leading-[33.6px]">We and our community help you achieve a healthy lifestyle</span> through our high quality supplements, workouts & diet plans while = staying affordable.
          </p>
          <button class="relative flex items-center bg-brandGreen text-white rounded-[8px] max-w-[348px] py-4 px-[90px] w-full">
            Become a member
            <span class="absolute right-[19px]">
              <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="right grid grid-cols-3">
        <span>
          <img src="../assets/heroimg1.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg2.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg3.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg4.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg5.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg6.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg7.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img src="../assets/heroimg8.jpeg" alt="" class="w-full h-full" />
        </span>
        <span>
          <img  src="../assets/heroimg9.jpeg" alt="" class="w-full h-full" />
        </span>
      </div>
    </section>
    <section class="bg-brandGreen py-[96px]">
      <div class="xl:mx-[180px] lg:mx-[90px] md:mx-[35px] mx-6">
        <p class="text-white font-light text-[32px] leading-[38.5px] text-center">Our members get <span class="font-bold">up to 50% OFF</span> our exclusive brands</p>
        <div class="grid grid-cols-7 gap-6 mt-6">
          <span>
            <img src="../assets/brandimg1.png" alt="" class="w-full h-full">
          </span>
          <span>
            <img src="../assets/brandimg2.png" alt="" class="w-full h-full">
          </span>
          <span>
            <img src="../assets/brandimg3.png" alt="" class="w-full h-full">
          </span>
          <span>
            <img src="../assets/brandimg4.png" alt="" class="w-full h-full">
          </span>
          <span>
            <img src="../assets/brandimg5.png" alt="" class="w-full h-full">
          </span>
          <span>
            <img src="../assets/brandimg6.png" alt="" class="w-full h-full">
          </span>
          <span>
            <img src="../assets/brandimg7.png" alt="" class="w-full h-full">
          </span>
        </div>
      </div>
    </section>
    <section class="py-[96px]">
      <div class="relative xl:mx-[180px] lg:mx-[90px] md:mx-[35px] mx-6">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div class="left">
            <h3 class="font-light text-[32px] text-brandGreen leading-[38.4px] text-center mb-[4px]">Member Benefits</h3>
            <p class="font-light text-[18px] leading-[18px] text-center">To help you achieve your change</p>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span>
                <img src="../assets/member-benefits1.jpeg" alt="" class="w-[184px] h-full">
              </span>
              <div>
                <p class="font-bold text-[20px]">Exclusive up to -50% <br> Member Discounts</p>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
