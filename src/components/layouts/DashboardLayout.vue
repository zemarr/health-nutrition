<template>
  <div class="flex flex-col">
    <div class="flex sm:flex-row flex-col md:items-center items-start justify-between py-6 bg-greenDark3 xl:px-[180px] lg:px-[90px] md:px-[35px] px-6">
      <div class="block md:mb-0 mb-6">
        <h6 class="mb-[2px] text-[12px] leading-[12px] font-bold tracking-[3px] text-greenDark">DASHBOARD</h6>
        <p class="font-light text-[26px] leading-[31.2px]">Hi, <span class="font-bold">Darjan</span></p>
      </div>
      <div class="max-w-[328px] sm:max-w-[528px] sm:w-auto w-full rounded-[8px] p-[12px] bg-[#111111]">
        <table class="text-white sm:text-[11px] text-[8px] sm:leading-[11px] leading-[8px] tracking-[2px] w-full">
          <tbody>
            <tr>
              <td class="block font-bold whitespace-nowrap">MEMBERSHIP LEVEL:</td>
              <td class="text-right whitespace-nowrap font-light"><span class="bg-bronze py-[3px] px-[8px] rounded-full">BRONZE</span> <span class="underline text-greenDark sm:text-[10px] text-[8px] sm:leading-[10px] leading-[8px]">UPGRADE</span></td>
            </tr>
            <tr>
              <td class="block font-bold whitespace-nowrap">MEMBER DISCOUNT:</td>
              <td class="text-right font-light">10%</td>
            </tr>
            <tr>
              <td class="block font-bold whitespace-nowrap">GOAL:</td>
              <td class="text-right whitespace-nowrap font-light">WEIGHT LOSS <span class="underline text-greenDark sm:text-[10px] text-[8px] sm:leading-[10px] leading-[8px]">CHANGE</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div class="flex items-center py-3 md:w-[max-content] xl:px-[180px] lg:px-[90px] md:px-[35px] px-6 md:mx-auto overflow-x-auto md:overflow-x-hidden text-[#999999]">
      <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/home" v-slot="{ href, navigate, isActive }">
          <a :href="href" @click="navigate" :class="isActive ? 'border-b-[3px] border-greenDark text-black' : 'border-[transparent] text-[#999999]'">
            dashboard
          </a>
        </router-link>
      </div>|
      <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/order-history" v-slot="{ href, navigate, isActive }">
          <a :href="href" @click="navigate" :class="isActive ? 'border-b-[3px] border-greenDark text-black' : 'border-b-[3px] border-[transparent] text-[#999999]'">
            order history
          </a>
        </router-link>
      </div>|
      <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/account" v-slot="{ href, navigate, isActive }">
          <a :href="href" @click="navigate" :class="isActive ? 'border-b-[3px] border-greenDark text-black' : 'border-b-[3px] border-[transparent] text-[#999999]'">
            account
          </a>
        </router-link>
      </div>
      <!-- <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/account">account</router-link>
      </div>|
      <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/account">account</router-link>
      </div>|
      <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/account">account</router-link>
      </div>|
      <div class="mx-3 whitespace-nowrap">
        <router-link to="/dashboard/account">account</router-link>
      </div> -->
      <!-- <li class="">
        <router-link to="/dashboard/payment-method">payment method</router-link>
      </li> -->
    </div>
    <div class="xl:px-[180px] lg:px-[90px] md:px-[35px] px-6">
      <router-view></router-view>
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
