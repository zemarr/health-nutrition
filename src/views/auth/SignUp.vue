<template>
  <div class="signup-page bg-white">
    <div class="">
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
        <div class="relative">
          <table class="text-center mx-auto">
            <thead>
              <tr>
                <td></td>
                <td>BRONZE PLAN</td>
                <td>SILVER PLAN</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DISCOUNT</td>
                <td>10%</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>WELLNESS COACH</td>
                <td>NO</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>DIET PLAN</td>
                <td>NO</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>EXERCISE PLAN</td>
                <td>NO</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>ARTICLE CONTENT</td>
                <td>NO</td>
                <td>PREMIUM</td>
              </tr>
              <tr>
                <td>VIDEO CONTENT</td>
                <td>NO</td>
                <td>PREMIUM</td>
              </tr>
              <tr>
                <td>MONTHLY COST</td>
                <td>FREE</td>
                <td>$4.99/mo <br> <span class="font-light">CANCEL ANYTIME</span></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <button @click="authStage2 = true" class="relative flex items-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                    Choose BRONZE
                    <span class="absolute right-[19px]">
                      <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                      </svg>
                    </span>
                  </button>
                </td>
                <td>
                  <button @click="authStage2 = true" class="relative flex items-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                    Choose SILVER
                    <span class="absolute right-[19px]">
                      <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                      </svg>
                    </span>
                  </button>
                  {{authStage2}}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div v-show="authStage1 === true && authStage2 === true && authStage3 === false">
        A MINOR SETBACK
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { Switch } from '@headlessui/vue'

export default {
  components: {
    Switch
  },
  setup () {
    const authStage1 = ref(false)
    const authStage2 = ref(false)
    const authStage3 = ref(false)
    const monthlyMembership = ref(false)

    const signUpData = reactive({
      email: '',
      username: '',
      password: ''
    })

    const checkAuthStage = (authStage) => {
      switch (authStage) {
        case 'stage1':
          if (signUpData.email.length > 1 && signUpData.username.length > 1 && signUpData.password.length > 1) {
            authStage1.value = true
          }
          break
        default:
          break
      }
    }

    return {
      authStage1,
      authStage2,
      authStage3,
      signUpData,
      checkAuthStage,
      monthlyMembership
    }
  }
}
</script>

<style scoped>
  thead tr {
    border-bottom: solid 1px #CCEDCC !important;
  }
  tbody tr:not(:last-of-type) {
    border-bottom: solid 1px #CCEDCC !important;

  }
  tbody tr:last-of-type {
    border-top: solid 2px #00A600 !important;
  }
  tbody tr td:not(:first-child) {
    border-right: solid 1px #CCEDCC;
    border-left: solid 1px #CCEDCC;
    border-bottom: solid 1px #CCEDCC;
    border-bottom-right-radius: 8px;
    border-radius: 8px;
    border-spacing: 10px;
    border-collapse: separate;
  }

</style>
