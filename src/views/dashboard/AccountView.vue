<template>
  <div>
    <h1 class="sm:text-[32px] text-[22px] sm:leading-[38.4px] leading-[26.4px] font-bold sm:mb-6 my-10">Your Personal Information</h1>
    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div class="relative">
        <div class="relative w-full sm:mb-6 mb-3">
          <label
            class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
            htmlFor="emailAddress"
          >
            EMAIL ADDRESS
            <span>*</span>
          </label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
            placeholder=""
            style="transition: 'all .15s ease'"
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
        <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-6">
          <div class="relative w-full sm:mb-6 mb-3">
            <label
              class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
              htmlFor="emailAddress"
            >
              FIRST NAME
              <span>*</span>
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
              placeholder=""
              style="transition: 'all .15s ease'"
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
              htmlFor="emailAddress"
            >
              LAST NAME
              <span>*</span>
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
              placeholder=""
              style="transition: 'all .15s ease'"
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
        </div>
        <div class="relative w-full sm:mb-6 mb-3">
          <label
            class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
            htmlFor="addressLine1"
          >
            ADDRESS LINE 1
            <span>*</span>
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
            placeholder=""
            style="transition: 'all .15s ease'"
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
            htmlFor="addressLine2"
          >
            ADDRESS LINE 2
            <span>*</span>
          </label>
          <input
            id="addressLine2"
            name="addressLine2"
            type="text"
            class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
            placeholder=""
            style="transition: 'all .15s ease'"
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
        <div class="grid grid-cols-2 gap-6">
          <div class="relative w-full sm:mb-6 mb-3">
            <label
              class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
              htmlFor="city"
            >
              CITY
              <span>*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
              placeholder=""
              style="transition: 'all .15s ease'"
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
              htmlFor="state-province"
            >
              STATE/PROVINCE
              <span>*</span>
            </label>
            <input
              id="state-province"
              name="state-province"
              type="text"
              class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
              placeholder=""
              style="transition: 'all .15s ease'"
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
              htmlFor="postalCode"
            >
              POSTAL CODE
              <span>*</span>
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="number"
              class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
              placeholder=""
              style="transition: 'all .15s ease'"
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
              htmlFor="country"
            >
              COUNTRY
              <span>*</span>
            </label>
            <input
              id="country"
              name="country"
              type="text"
              class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
              placeholder=""
              style="transition: 'all .15s ease'"
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
        </div>
        <div class="relative w-full sm:mb-6 mb-6">
          <label
            class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
            htmlFor="phoneNumber"
          >
            PHONE NUMBER
            <span>*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
            placeholder=""
            style="transition: 'all .15s ease'"
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
        <div class="relative flex items-center justify-end">
          <button class="relative flex items-center bg-greenDark text-white text-[14px] leading-[14px] rounded-[8px] max-w-[250px] py-[17px] px-[100px] w-full">
            SAVE
            <span class="absolute right-[19px]">
              <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="relative mt-12">
      <h2 class="font-bold text-[22px] leading-[26.4px] mb-3">Notifications</h2>
      <!-- <table>
        <thead>
          <tr>
            <td>BRAND</td>
            <td>NAME</td>
            <td>PERIOD</td>
            <td>TYPE</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table> -->
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
