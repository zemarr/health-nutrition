<template>
    <div class="signup-page bg-white">
      <div class="relative">
        <transition name="fadeInOut">
          <div v-show="authStage1 === false" class="flex md:flex-row flex-col-reverse">
            <div class="left md:w-[50%] w-full flex flex-col items-center justify-center sm:px-0 px-6 py-12">
              <h1 class="md:mb-[86px] mb-[24px] font-normal md:text-[32px] text-[22px] leading-[38.4px] md:leading-[26.4px] text-greenDark">Become a member</h1>
              <div class="relative flex flex-col max-w-[344px]">
                <h3 class="font-bold text-[22px] leading-[26.4px] text-grayDark mb-6 text-center">Create account</h3>
                <div class="relative w-full sm:mb-6 mb-3">
                  <label
                    class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                    htmlFor="email"
                  >
                    EMAIL
                    <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
                    placeholder="Your Email"
                    style="transition: 'all .15s ease'"
                    v-model="signUpData.email"
                  />
                  <!-- <div v-if="v$.company_summary.$error">
                    <p
                      v-if="v$.company_summary.required.$invalid"
                      class="text-red-400 text-[10px] font-light"
                    >Company Summary is required</p>
                    <p
                      v-if="v$.company_summary.minLengthValue.$invalid"
                      class="text-red-400 text-[10px] font-light"
                    >Company summary should be at least 3 characters long</p>
                  </div> -->
                </div>
                <div class="relative w-full sm:mb-6 mb-3">
                  <label
                    class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                    htmlFor="username"
                  >
                    USERNAME
                    <span>*</span>
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
                    placeholder="Choose a username"
                    style="transition: 'all .15s ease'"
                    v-model="signUpData.username"
                  />
                  <span class="font-light text-[12px] leading-[12px] text-grayDark ml-4">Used for tagging & your profile page URL.</span>
                  <!-- <div v-if="v$.company_summary.$error">
                    <p
                      v-if="v$.company_summary.required.$invalid"
                      class="text-red-400 text-[10px] font-light"
                    >Company Summary is required</p>
                    <p
                      v-if="v$.company_summary.minLengthValue.$invalid"
                      class="text-red-400 text-[10px] font-light"
                    >Company summary should be at least 3 characters long</p>
                  </div> -->
                </div>
                <div class="relative w-full sm:mb-6 mb-6">
                  <label
                    class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                    htmlFor="password"
                  >
                    PASSWORD
                    <span>*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
                    placeholder="Choose a password"
                    style="transition: 'all .15s ease'"
                    v-model="signUpData.password"
                  />
                  <!-- <div v-if="v$.company_summary.$error">
                    <p
                      v-if="v$.company_summary.required.$invalid"
                      class="text-red-400 text-[10px] font-light"
                    >Company Summary is required</p>
                    <p
                      v-if="v$.company_summary.minLengthValue.$invalid"
                      class="text-red-400 text-[10px] font-light"
                    >Company summary should be at least 3 characters long</p>
                  </div> -->
                </div>
                <div class="relative">
                  <button @click.prevent="checkAuthStage('stage1')" class="relative flex items-center justify-center bg-greenDark text-white rounded-[8px] py-4 md:px-[112px] w-full">
                    Create account
                    <span class="absolute right-[19px]">
                      <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="right md:w-[50%] w-full bg-greenDark3 py-[115px] lg:px-[104px] px-6">
              <h1 class="text-greenDark md:text-[22px] md:leading-[26.4px] md:max-w-[80%] max-w-full mb-7">These <b>EXCLUSIVE</b> member benefits are waiting for you</h1>
              <div class="relative">
                <ul class="font-light">
                  <li class="flex items-center lg:text-[16px] md:leading-[19.2px] text-[14px] leading-[19.6px] my-2">
                    <span class="mr-[12px]">
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#A2DC0C" stroke-width="2"/>
                        <path d="M5.14258 10.3991L11.9431 17.1995L25.714 3.42859" stroke="#00A600" stroke-width="4"/>
                      </svg>
                    </span>
                    <span>
                      <b class="text-greenDark">Up to 50% OFF</b>&nbsp; all purchases + special offers
                    </span>
                  </li>
                  <li class="flex items-center lg:text-[16px] md:leading-[19.2px] text-[14px] leading-[19.6px] my-2">
                    <span class="mr-[12px]">
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#A2DC0C" stroke-width="2"/>
                        <path d="M5.14258 10.3991L11.9431 17.1995L25.714 3.42859" stroke="#00A600" stroke-width="4"/>
                      </svg>
                    </span>
                    <span>
                      <b class="text-greenDark">FREE SHIPPING</b>&nbsp; worldwide + faster delivery
                    </span>
                  </li>
                  <li class="flex items-center lg:text-[16px] md:leading-[19.2px] text-[14px] leading-[19.6px] my-2">
                    <span class="mr-[12px]">
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#A2DC0C" stroke-width="2"/>
                        <path d="M5.14258 10.3991L11.9431 17.1995L25.714 3.42859" stroke="#00A600" stroke-width="4"/>
                      </svg>
                    </span>
                    <span>
                      <b class="text-greenDark">LIVE & ON DEMAND</b>&nbsp; videos and classes
                    </span>
                  </li>
                  <li class="flex items-center lg:text-[16px] md:leading-[19.2px] text-[14px] leading-[19.6px] my-2">
                    <span class="mr-[12px]">
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#A2DC0C" stroke-width="2"/>
                        <path d="M5.14258 10.3991L11.9431 17.1995L25.714 3.42859" stroke="#00A600" stroke-width="4"/>
                      </svg>
                    </span>
                    <span>
                      <b class="text-greenDark">FREE WELNESS COACHING</b>&nbsp; to achieve your goals and a healthy body
                    </span>
                  </li>
                  <li class="flex items-center lg:text-[16px] md:leading-[19.2px] text-[14px] leading-[19.6px] my-2">
                    <span class="mr-[12px]">
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#A2DC0C" stroke-width="2"/>
                        <path d="M5.14258 10.3991L11.9431 17.1995L25.714 3.42859" stroke="#00A600" stroke-width="4"/>
                      </svg>
                    </span>
                    <span>
                      <b class="text-greenDark">PERSONALIZED</b>&nbsp; diet and exercise plans
                    </span>
                  </li>
                  <li class="flex items-center lg:text-[16px] md:leading-[19.2px] text-[14px] leading-[19.6px] my-2">
                    <span class="mr-[12px]">
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#A2DC0C" stroke-width="2"/>
                        <path d="M5.14258 10.3991L11.9431 17.1995L25.714 3.42859" stroke="#00A600" stroke-width="4"/>
                      </svg>
                    </span>
                    <span>
                      <b class="text-greenDark">FREE ACCESS</b>&nbsp; to our courses, premium articles, workout & diet plans and more
                    </span>
                  </li>
                </ul>
                <div class="mt-6">
                  <p class="text-[12px] leading-[16.8px] text-grayDark font-light">Get the latest weekly health news, occasional surveys and special offers delivered right to your inbox.</p>
                  <p class="text-[12px] leading-[16.8px] text-grayDark font-light">
                    <b class="text-greenDark">Terms and Conditions</b>  and <b class="text-greenDark">Privacy Policy</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="authStage1 === true && authStage2 === false" class="bg-greenDark3 md:px-12 px-6 py-12">
            <h1 class="md:mb-[24px] mb-[23px] font-normal md:text-[32px] text-[22px] leading-[38.4px] md:leading-[26.4px] text-center text-greenDark">Choose membership</h1>
            <div class="all-membership flex items-center justify-center mb-[15px]">
              <span class="font-bold text-[12px] leading-[12px] tracking-[1px]" :class="!monthlyMembership ? 'text-greenDark' : 'text-grayLight'">MONTHLY</span>
              <Switch
                v-model="monthlyMembership"
                value="monthly"
                name="membership"
                :class="monthlyMembership ? 'bg-grayLighter' : 'bg-grayLighter'"
                class="relative inline-flex h-6 w-11 items-center rounded-full border-[0.6px] border-greenDark mx-2"
              >
                <span
                  :class="monthlyMembership ? 'translate-x-6' : 'translate-x-1'"
                  class="inline-block h-4 w-4 transform rounded-full bg-greenDark"
                />
              </Switch>
              <span class="font-bold text-[12px] leading-[12px] tracking-[1px]" :class="monthlyMembership ? 'text-greenDark' : 'text-grayLight'">YEARLY</span>
            </div>
            <div class="relative grid md:grid-cols-2 grid-cols-1 gap-4 max-w-[max-content] mx-auto">
              <div class="flex flex-col p-4 rounded-[8px] border-grayLight border-[1px]">
                <span class="font-bold text-greenDark text-[24px] leading-[24px] text-left">FREE</span>
                <h2 class="plan-name font-bold my-4">BRONZE PLAN</h2>
                <div class="w-full mb-4">
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    10% DISCOUNT
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9" stroke="#555555" stroke-width="2"/>
                        <path d="M9 1L1 9" stroke="#555555" stroke-width="2"/>
                      </svg>
                    </span>
                    WELLNESS COACH
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9" stroke="#555555" stroke-width="2"/>
                        <path d="M9 1L1 9" stroke="#555555" stroke-width="2"/>
                      </svg>
                    </span>
                    DIET PLAN
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9" stroke="#555555" stroke-width="2"/>
                        <path d="M9 1L1 9" stroke="#555555" stroke-width="2"/>
                      </svg>
                    </span>
                    EXERCISE PLAN
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    ARTICLE CONTENT
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    VIDEO CONTENT
                  </div>
                </div>
                <button @click="checkAuthStage('BRONZE')" class="relative flex items-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                  Choose BRONZE
                  <span class="absolute right-[19px]">
                    <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                    </svg>
                  </span>
                </button>
              </div>
              <div class="flex flex-col p-4 rounded-[8px] border-grayLight border-[1px]">
                <span class="font-[800] text-greenDark text-[24px] leading-[24px] text-left">$4.99/mo</span>
                <h2 class="plan-name my-4 font-bold">SILVER PLAN</h2>
                <div class="w-full mb-4">
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    20% DISCOUNT
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    WELLNESS COACH
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    DIET PLAN
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    EXERCISE PLAN
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    ARTICLE CONTENT
                  </div>
                  <div class="flex items-center font-[600]">
                    <span class="mr-3">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L7 12L17 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    VIDEO CONTENT
                  </div>
                </div>
                <button @click="checkAuthStage('SILVER')" class="relative flex items-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                  Choose SILVER
                  <span class="absolute right-[19px]">
                    <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="authStage1 === true && authStage2 === true && authStage3 === false" class="bg-greenDark3 md:px-12 px-6 py-12">
            <h1 class="md:mb-[49px] mb-[25px] font-normal md:text-[32px] text-[22px] leading-[38.4px] md:leading-[26.4px] text-center text-greenDark">Payment Information</h1>
            <div class="md:max-w-[345px] max-w-[326px] w-full mx-auto">
              <div class="flex items-center justify-between pb-[25px] border-grayLight border-b-[1px]">
                <span class="font-bold tracking-[1px]">{{currentPlan.plan}}</span>
                <span v-if="currentPlan.price === ''" class="font-bold text-greenDark text-[18px]">FREE</span>
                <span v-else class="font-bold text-greenDark text-[18px]">${{currentPlan.price}}/mo</span>
              </div>
              <div class="md:py-[24px] py-[12px] w-[80%] mx-auto">
                <div class="grid grid-cols-6 gap-[7.54px] mb-[4px]">
                  <span class="w-[30.86px] h-[24px]">
                    <img src="../../assets/svgs/visacard.webp" alt="" class="w-full h-full">
                  </span>
                  <span class="w-[30.86px] h-[24px]">
                    <img src="../../assets/svgs/mastercard.webp" alt="" class="w-full h-full">
                  </span>
                  <span class="w-[30.86px] h-[24px]">
                    <img src="../../assets/svgs/americanexpress.webp" alt="" class="w-full h-full">
                  </span>
                  <span class="w-[30.86px] h-[24px]">
                    <img src="../../assets/svgs/discover.webp" alt="" class="w-full h-full">
                  </span>
                  <span class="w-[30.86px] h-[24px]">
                    <img src="../../assets/svgs/odcardss.webp" alt="" class="w-full h-full">
                  </span>
                  <span class="w-[30.86px] h-[24px]">
                    <img src="../../assets/svgs/jcb.webp" alt="" class="w-full h-full">
                  </span>
                </div>
                <p class="text-center font-light text-[11px] text-grayDark leading-[11px] tracking-[0.5px]">256-BIT ENCRYPTION • SSL SECURED</p>
              </div>
              <div class="relative">
                <label
                  class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                  htmlFor="addressLine2"
                >
                  CARD INFORMATION
                </label>
                <div class="relative">
                  <div class="flex-col border-[1px] border-grayLight rounded-[8px] overflow-hidden">
                    <div class="top h-[46px]">
                      <input type="number" placeholder="1234 1234 1234 1234" class="max-w-full h-full py-4 px-4 placeholder-grayLight text-black text-sm w-full focus:outline-none focus:border-none hover:border-none focus:ring-0">
                    </div>
                    <div class="bottom grid grid-cols-2 border-t-[1px] border-grayLight">
                      <div class="left border-r-[1px] border-grayLight">
                        <input type="month" placeholder="MM / YY" value="2022-05" min="2020-05" max="2030-12" class="max-w-full h-full py-4 px-4 placeholder-grayLight text-black text-sm w-full focus:outline-none focus:border-none hover:border-none focus:ring-0">
                      </div>
                      <div class="right">
                        <input type="number" placeholder="CCV" class="max-w-full h-full py-4 px-4 placeholder-grayLight text-black text-sm w-full focus:outline-none focus:border-none hover:border-none focus:ring-0">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative my-[24px]">
                  <input type="text" placeholder="Name on card" class="max-w-full h-full py-4 px-4 placeholder-grayLight text-black text-sm w-full focus:outline-none border-grayLight border-[1px] rounded-[8px] focus:border-grayLight hover:border-grayLight focus:ring-0">
                </div>
                <button @click="checkAuthStage('ONBOARDING')" class="relative flex items-center justify-center bg-greenDark text-white rounded-[8px] max-w-[344px] py-4 px-[90px] w-full">
                  SUBSCRIBE
                  <span class="absolute right-[19px]">
                    <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                    </svg>
                  </span>
                </button>
                <span class="block mt-[12px] text-center font-light text-[12px] leading-[12px] tracking-[1px]">PAUSE OR CANCEL ANYTIME</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <Modal :modalActive="subscribed">
        <div class="mx-auto md:w-[344px] w-[326px] translate-y-44">
          <div class="bg-black rounded-[8px] flex items-center md:py-[16px] py-[24px] md:px-[24px] px-[27px]">
            <span class="md:w-[44px] w-[36px] mr-[24px]">
              <svg class="w-full h-full" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16.5" stroke="white" stroke-width="3"/>
                <path d="M12.2734 18L16.3643 22.0909L24.5462 13.9091" stroke="white" stroke-width="3"/>
              </svg>
            </span>
            <span class="max-w-[223px]">
              <p class="md:text-[18px] text-[16px] md:leading-[18px] leading-[16px] tracking-[1px] text-white font-bold">PAYMENT SUCCESFUL</p>
              <p class="md:text-[16px] text-[14px] md:leading-[16px] leading-[14px] tracking-[1px] text-white font-light">Your account was created</p>
            </span>
          </div>
          <div class="flex items-center py-[24px] max-w-[178px] mx-auto">
            <span class="w-[34px] mr-[24px]">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5625 2.9375C7.9375 3.5 7.9375 4.5 8.5625 5.0625L13.4375 9.5H1.5C0.625 9.5 0 10.1875 0 11V13C0 13.875 0.625 14.5 1.5 14.5H13.4375L8.625 18.9375C7.9375 19.5625 7.9375 20.5 8.5625 21.125L9.9375 22.5C10.5 23.0625 11.4375 23.0625 12.0625 22.5L21.5 13.125C22.125 12.5 22.125 11.5625 21.5 10.9375L12.0625 1.5625C11.4375 0.9375 10.5 1 9.9375 1.5625L8.5625 2.9375ZM32 18V6C32 2.6875 29.3125 0 26 0H20.75C20.3125 0 20 0.375 20 0.75V3.25C20 3.6875 20.3125 4 20.75 4H26C27.0625 4 28 4.9375 28 6V18C28 19.125 27.0625 20 26 20H20.75C20.3125 20 20 20.375 20 20.75V23.25C20 23.6875 20.3125 24 20.75 24H26C29.3125 24 32 21.3125 32 18Z" fill="black"/>
              </svg>
            </span>
            <span class="max-w-[223px]">
              <p class="text-[14px] leading-[19.6px] tracking-[2px] font-bold">REDIRECTING...</p>
              <p class="text-[14px] leading-[19.6px] tracking-[2px] font-light">PLEASE WAIT</p>
            </span>
          </div>
        </div>
      </Modal>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { Switch } from '@headlessui/vue'
import Modal from '../../components/ModalComponent.vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  components: {
    Switch,
    Modal
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const authStage1 = ref(false)
    const authStage2 = ref(false)
    const authStage3 = ref(false)
    const monthlyMembership = ref(false)
    const currentPlan = ref('')
    const plans = ref([
      {
        plan: 'BRONZE',
        price: ''
      },
      {
        plan: 'SILVER',
        price: '4.99'
      }
    ])
    const subscribed = ref(false)

    const signUpData = reactive({
      email: '',
      username: '',
      password: '',
      subscriptionPlan: currentPlan
    })
    const goToOnboarding = () => {
      console.log(router.getRoutes())
      router.push('/onboarding')
    }

    const checkAuthStage = (authStage) => {
      switch (authStage) {
        case 'stage1':
          if (signUpData.email.length > 1 && signUpData.username.length > 1 && signUpData.password.length > 1) {
            authStage1.value = true
          }
          break
        case 'BRONZE':
          if (currentPlan.value === '') {
            authStage2.value = true
            currentPlan.value = plans.value[0]
          } else {
            break
          }
          break
        case 'SILVER':
          if (currentPlan.value === '') {
            authStage2.value = true
            currentPlan.value = plans.value[1]
          } else {
            break
          }
          break
        case 'ONBOARDING':
          if (subscribed.value === false) {
            subscribed.value = true
            setTimeout(() => {
              subscribed.value = false
              goToOnboarding()
            }, 3000)
          } else {
            break
          }
          break
        default:
          break
      }
    }

    return {
      route,
      router,
      authStage1,
      authStage2,
      authStage3,
      signUpData,
      checkAuthStage,
      monthlyMembership,
      currentPlan,
      plans,
      subscribed,
      goToOnboarding
    }
  }
}
</script>

<style scoped>
 .plan-name::before {
   content: '';
    display: block;
    width: 20%;
    height: 3px;
    background-color: #CCEDCC;
 }

 .fadeInOut-enter-from {
  opacity: 0;
}
.fadeInOut-enter-to {
  opacity: 1;
}
.fadeInOut-enter-active {
  transition: all .3s ease;
}
.fadeInOut-leave-from {
  opacity: 1;
}
.fadeInOut-leave-to {
  opacity: 0;
}
</style>
