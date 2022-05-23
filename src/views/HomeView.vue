<template>
  <div class="home">
    <section class="relative hero w-full grid lg:grid-cols-2 grid-cols-1">
      <div class="left xl:ml-[180px] lg:ml-[90px] md:ml-[35px] mx-6">
        <div class="max-w-[443px] py-[120px]">
          <h1 class="text-greenDark font-light text-[42px] leading-[50.4px] mb-6">
            We’re professional <br> <span class="font-bold">health nutritionists</span> <br> <span class="font-bold">here for you 24/7</span> <br> with <span class="font-bold">141204</span> members
          </h1>
          <p class="font-light text-[24px] leading-[33.6px] mb-6">
            <span class="font-bold text-[24px] leading-[33.6px]">We and our community help you achieve a healthy lifestyle</span> through our high quality supplements, workouts & diet plans while = staying affordable.
          </p>
          <router-link to="/sign-up">
            <button class="relative flex items-center bg-greenDark text-white rounded-[8px] max-w-[348px] py-4 px-[90px] w-full">
              Become a member
              <span class="absolute right-[19px]">
                <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                </svg>
              </span>
            </button>
          </router-link>
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
    <section class="bg-greenDark py-[96px]">
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
          <div class="left flex flex-col items-center justify-center">
            <h3 class="font-light text-[32px] text-greenDark leading-[38.4px] text-center mb-[4px]">Member Benefits</h3>
            <p class="font-light text-[18px] leading-[18px] text-center">To help you achieve your change</p>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span class="h-[104px] w-[184px]">
                <img src="../assets/member-benefits1.jpeg" alt="" width="100%" height="100%" class="w-full h-full">
              </span>
              <div class="bg-greenDark10 h-[104px] py-[24px] lg:pl-[48px] pl-[20px] w-[344px] rounded-lg">
                <p class="font-bold lg:text-[20px] text-[16px]">Exclusive <span class="text-greenDark">up to -50%</span> <br> Member Discounts</p>
              </div>
            </div>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span class="h-[104px] w-[184px]">
                <img src="../assets/member-benefits1.jpeg" alt="" width="100%" height="100%" class="w-full h-full">
              </span>
              <div class="bg-greenDark10 h-[104px] py-[24px] lg:pl-[48px] pl-[20px] w-[344px] rounded-lg">
                <p class="font-bold lg:text-[20px] text-[16px]">Special Offers &<br/> Product Launches</p>
              </div>
            </div>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span class="h-[104px] w-[184px]">
                <img src="../assets/member-benefits1.jpeg" alt="" width="100%" height="100%" class="w-full h-full">
              </span>
              <div class="bg-greenDark10 h-[104px] py-[24px] lg:pl-[48px] pl-[20px] w-[344px] rounded-lg">
                <p class="font-bold lg:text-[20px] text-[16px]">Supporting Community<br/> and Wellness Coaches</p>
              </div>
            </div>
            <button class="w-full my-2 text-[16px] leading-[16px] font-bold">+ much more</button>

          </div>
          <div class="right">
            <h3 class="font-light text-[32px] text-greenDark leading-[38.4px] text-center mb-[4px]">Tools & Resources</h3>
            <p class="font-light text-[18px] leading-[18px] text-center">To help you be your best</p>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span class="h-[104px] w-[184px]">
                <img src="../assets/member-benefits1.jpeg" alt="" width="100%" height="100%" class="w-full h-full">
              </span>
              <div class="bg-greenDark10 h-[104px] py-[24px] lg:pl-[48px] pl-[20px] w-[344px] rounded-lg">
                <p class="font-bold lg:text-[20px] text-[16px]">Unique Articles <br> & Video Content</p>
              </div>
            </div>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span class="h-[104px] w-[184px]">
                <img src="../assets/member-benefits1.jpeg" alt="" width="100%" height="100%" class="w-full h-full">
              </span>
              <div class="bg-greenDark10 h-[104px] py-[24px] lg:pl-[48px] pl-[20px] w-[344px] rounded-lg">
                <p class="font-bold lg:text-[20px] text-[16px]">Personalized Diet <br> and Exercise Plans</p>
              </div>
            </div>
            <div class="max-h-[104px] w-full flex items-center mt-6">
              <span class="h-[104px] w-[184px]">
                <img src="../assets/member-benefits1.jpeg" alt="" width="100%" height="100%" class="w-full h-full">
              </span>
              <div class="bg-greenDark10 h-[104px] py-[24px] lg:pl-[48px] pl-[20px] w-[344px] rounded-lg">
                <p class="font-bold lg:text-[20px] text-[16px]">Premium Guides <br> Made by Pros</p>
              </div>
            </div>
            <button class="w-full my-2 text-[16px] leading-[16px] font-bold">+ much more</button>

          </div>
        </div>
      </div>
    </section>
    <section class="pt-[40px] pb-[100px] bg-greenDark3">
      <div class="relative xl:mx-[180px] lg:mx-[90px] md:mx-[35px] mx-6">
        <h4 class="font-light text-greenDark text-[32px] leading-[38.4px] text-center mb-[30px]">Shop by <b>Goal</b></h4>
        <div class="grid grid-cols-3 gap-6 sm:gap-12">
          <div class="relative w-full">
            <img src="../assets/weightlossimg.webp" alt="" width="100%" height="100%">
            <div class="absolute top-[0px] leading-[38.4px] text-white flex items-center justify-center w-full md:mt-8 mt-5">
              <p class="md:text-[28px] lg:text-[32px] text-[14px] text-center">Weight loss</p>
              <span class="text-white">
                <svg class="md:w-[40px] md:h-[40px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                </svg>
              </span>
            </div>
            <img src="../assets/appleweightloss.webp" alt="" width="100%" height="100%" class="w-[230px] absolute -bottom-[50px] -right-[30px]">
          </div>
          <div class="relative w-full">
            <img src="../assets/workoutsimg.webp" alt="" width="100%" height="100%">
            <div class="absolute top-[0px] leading-[38.4px] text-white flex items-center justify-center w-full md:mt-8 mt-5">
              <p class="md:text-[28px] lg:text-[32px] text-[14px] text-center">Workouts</p>
              <span class="text-white">
                <svg class="md:w-[40px] md:h-[40px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                </svg>
              </span>
            </div>
            <img src="../assets/workoutstools.webp" alt="" width="100%" height="100%" class="w-[300px] absolute -bottom-[50px] -right-[30px]">
          </div>
          <div class="relative w-full">
            <img src="../assets/bodybuildingimg.webp" alt="" width="100%" height="100%">
            <div class="absolute top-[0px] leading-[38.4px] text-white flex items-center justify-center w-full md:mt-8 mt-5">
              <p class="md:text-[28px] lg:text-[32px] text-[14px] text-center">Bodybuilding</p>
              <span class="text-white">
                <svg class="md:w-[40px] md:h-[40px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                </svg>
              </span>
            </div>
            <img src="../assets/dumbells.webp" alt="" width="100%" height="100%" class="w-[252px] absolute -bottom-[50px] -right-[30px]">
          </div>
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
