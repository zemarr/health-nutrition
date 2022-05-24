<template>
  <div>
    <div class="bg-greenDark3 md:px-12 px-6 py-12 min-h-[580px] overflow-hidden">
      <h1 class="md:mb-[24px] mb-[23px] font-normal md:text-[32px] text-[22px] leading-[38.4px] md:leading-[26.4px] text-center text-greenDark">Personalize your experience</h1>
      <p class="text-center md:text-[18px] text-[16px] md:leading-[25.2px] leading-[22.4px]">We need to know you better to be able to create a unique experience for you.</p>

      <div class="relative mt-[42px]">
        <div class="progressbar relative max-w-[327px] md:max-w-[400px] mx-auto mb-[62px] h-[5px] bg-grayLight w-full">
          <div class="progress absolute top-0 left-0 h-full w-[14.28%] max-w-[100%] bg-greenDark"></div>
        </div>
        <transition name="fadeInOut">
          <div v-show="progressCount === 1" class="content relative">
              <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
                <span class="font-bold">1.</span>&nbsp;
                Hi {name}, what's your gender?
              </p>
              <div class="radio-input-group flex md:flex-row flex-col items-center justify-center gap-[24px] max-w-[582px] mx-auto">
                <div class="relative flex flex-row items-center justify-center w-[max-content]">
                  <input type="radio" v-model="data.gender" name="gender" value="male" class="mr-2" checked>
                  <label for="gender" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                    Male
                    <span></span>
                  </label>
                </div>
                <div class="relative flex flex-row items-center justify-center w-[max-content]">
                  <input type="radio" v-model="data.gender" name="gender" value="female" class="mr-2">
                  <label for="gender" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                    Female
                    <span></span>
                  </label>
                </div>
                <div class="relative flex flex-row items-center justify-center w-[max-content]">
                  <input type="radio" v-model="data.gender" name="gender" value="nil" class="mr-2">
                  <label for="gender" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                    Prefer not to say
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center mt-16">
                <button @click="nextQuestion(1)" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                NEXT
                <span class="absolute right-[19px]">
                  <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                  </svg>
                </span>
              </button>
              <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
              </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="progressCount === 2" class="content relative">
              <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
                <span class="font-bold">2.</span>&nbsp;
                What's your age?
              </p>
              <div class="radio-input-group grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-[24px] max-w-[max-content] mx-auto">
                <div class="grid grid-cols-3 gap-3">
                  <div class="relative flex flex-row items-center justify-center w-[max-content]">
                    <input type="radio" v-model="data.age" name="age" value="18-24" class="" checked>
                    <label for="age" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                      18 - 24
                      <span></span>
                    </label>
                  </div>
                  <div class="relative flex flex-row items-center justify-center w-[max-content]">
                    <input type="radio" v-model="data.age" name="age" value="25-34" class="">
                    <label for="age" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                      25 - 34
                      <span></span>
                    </label>
                  </div>
                  <div class="relative flex flex-row items-center justify-center w-[max-content]">
                    <input type="radio" v-model="data.age" name="age" value="35-44" class="">
                    <label for="age" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                      35 - 44
                      <span></span>
                    </label>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div class="relative flex flex-row items-center justify-center w-[max-content]">
                    <input type="radio" v-model="data.age" name="age" value="45-54" class="">
                    <label for="age" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                      45 -54
                      <span></span>
                    </label>
                  </div>
                  <div class="relative flex flex-row items-center justify-center w-[max-content]">
                    <input type="radio" v-model="data.age" name="age" value="55-64" class="">
                    <label for="age" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                      55 - 64
                      <span></span>
                    </label>
                  </div>
                  <div class="relative flex flex-row items-center justify-center w-[max-content]">
                    <input type="radio" v-model="data.age" name="age" value="65+" class="">
                    <label for="age" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                      65+
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center mt-16">
                <div class="flex items-center justify-evenly max-w-[552px] w-full">
                  <button @click="previousQuestion" class="relative flex items-center justify-center bg-[transparent] text-greenDark text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px] border-greenDark border-[2px] mr-3">
                    <span class="absolute left-[19px]">
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12L3 7L8 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    BACK
                  </button>
                  <button @click="nextQuestion(2)" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                  NEXT
                  <span class="absolute right-[19px]">
                    <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                    </svg>
                  </span>
                </button>
                </div>
              <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
              </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="progressCount === 3" class="content relative">
              <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
                <span class="font-bold">3.</span>&nbsp;
                What's your height & weight?
              </p>
              <div class="units flex items-center justify-center">
                <button @click="isMetric = true" class="py-[10px] px-3 rounded-l-lg border-[2px]" :class="isMetric ? 'border-greenDark' : ' border-r-0 border-grayLight'">
                  <span>

                  </span>
                  <span class="font-bold leading-[16px] text-[16px] flex flex-col items-center" :class="isMetric ? 'text-greenDark ' : 'text-grayLight'">
                    Metric
                    <span class="font-light text-[10px] leading-[10px] text-center">cm / kg</span>
                  </span>
                </button>
                <button @click="isMetric = false" class="py-[10px] px-3 rounded-r-lg border-[2px]" :class="!isMetric ? 'border-greenDark' :  'border-l-0 border-grayLight'">
                  <span>

                  </span>
                  <span class="font-bold leading-[16px] text-[16px] flex flex-col items-center" :class="!isMetric ? 'text-greenDark ' : 'text-grayLight'">
                    Imperial
                    <span class="font-light text-[10px] leading-[10px] text-center">ft / lbs</span>
                  </span>
                </button>
              </div>
              <div class="from-group-wrap relative flex items-center justify-center">
                <div class="relative w-full sm:mb-6 mb-3 max-w-[160px] mx-3">
                  <label
                    class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                    htmlFor="height"
                  >
                    HEIGHT
                  </label>
                  <div class="relative">
                    <input
                      id="height"
                      name="height"
                      type="number"
                      class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
                      placeholder="000"
                      style="transition: 'all .15s ease'"
                      v-model="data.height"
                    />
                    <span class="font-bold text-[16px] leading-[22.4px] text-grayDark absolute top-[15px] right-[15px] bg-white py-1 px-2">
                      {{isMetric ? 'cm' : 'ft'}}
                    </span>
                  </div>
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
                <div class="relative w-full sm:mb-6 mb-3 max-w-[160px] mx-3">
                  <label
                    class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                    htmlFor="weight"
                  >
                    WEIGHT
                  </label>
                    <div class="relative">
                      <input
                        id="weight"
                        name="weight"
                        type="number"
                        class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0"
                        placeholder="00"
                        style="transition: 'all .15s ease'"
                        v-model="data.weight"
                      />
                      <span class="font-bold text-[16px] leading-[22.4px] text-grayDark absolute top-[15px] right-[15px] bg-white py-1 px-2">
                        {{isMetric ? 'kg' : 'lbs'}}
                      </span>
                    </div>
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
              <div class="flex flex-col items-center justify-center mt-16">
                <div class="flex items-center justify-evenly max-w-[552px] w-full">
                  <button @click="previousQuestion" class="relative flex items-center justify-center bg-[transparent] text-greenDark text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px] border-greenDark border-[2px] mr-3">
                    <span class="absolute left-[19px]">
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12L3 7L8 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    BACK
                  </button>
                  <button @click="nextQuestion" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                  NEXT
                  <span class="absolute right-[19px]">
                    <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                    </svg>
                  </span>
                </button>
                </div>
              <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
              </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="progressCount === 4" class="content relative">
              <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
                <span class="font-bold">4.</span>&nbsp;
                What's your goal?
              </p>
              <div class="radio-input-group flex md:flex-row flex-col items-center justify-center gap-[24px] max-w-[max-content] mx-auto">
                <div class="relative flex flex-row items-center justify-center w-[max-content]">
                  <input type="radio" v-model="data.goal" name="goal" value="Build muscle" class="mr-2" checked>
                  <label for="goal" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                    Build muscle
                    <span></span>
                  </label>
                </div>
                <div class="relative flex flex-row items-center justify-center w-[max-content]">
                  <input type="radio" v-model="data.goal" name="goal" value="Lose weight" class="mr-2">
                  <label for="goal" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                    Lose weight
                    <span></span>
                  </label>
                </div>
                <div class="relative flex flex-row items-center justify-center w-[max-content]">
                  <input type="radio" v-model="data.goal" name="goal" value="Maintain a healthy life-style" class="mr-2">
                  <label for="goal" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                    Maintain a healthy life-style
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center mt-16">
                <div class="flex items-center justify-evenly max-w-[552px] w-full">
                  <button @click="previousQuestion" class="relative flex items-center justify-center bg-[transparent] text-greenDark text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px] border-greenDark border-[2px] mr-3">
                    <span class="absolute left-[19px]">
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12L3 7L8 2" stroke="#00A600" stroke-width="3"/>
                      </svg>
                    </span>
                    BACK
                  </button>
                  <button @click="nextQuestion" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                  NEXT
                  <span class="absolute right-[19px]">
                    <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                    </svg>
                  </span>
                </button>
                </div>
              <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
              </div>
            </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="progressCount === 5" class="content relative">
            <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
              <span class="font-bold">5.</span>&nbsp;
              What's your weight goal?
            </p>

              <div class="relative w-full sm:mb-6 mb-3 max-w-[160px] mx-auto">
                <label
                  class="font-Rubik text-greyText text-[12px] leading-[12px] font-bold tracking-[1px] ml-4"
                  htmlFor="weightgoal"
                >
                  WEIGHT GOAL
                </label>
                  <div class="relative">
                    <input
                      id="weightgoal"
                      name="weightgoal"
                      type="number"
                      class="px-4 py-4 mt-1 text-[15px] leading-[17.78px] font-Rubik placeholder-grayLight text-black text-sm border border-borderGray rounded-[8px] w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 text-center"
                      placeholder="00"
                      style="transition: 'all .15s ease'"
                      v-model="data.weight_goal"
                    />
                    <span class="font-bold text-[16px] leading-[22.4px] text-grayDark absolute top-[15px] right-[15px] bg-white py-1 px-2">
                      {{isMetric ? 'kg' : 'lbs'}}
                    </span>
                  </div>
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
            <div class="flex flex-col items-center justify-center mt-16">
              <div class="flex items-center justify-evenly max-w-[552px] w-full">
                <button @click="previousQuestion" class="relative flex items-center justify-center bg-[transparent] text-greenDark text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px] border-greenDark border-[2px] mr-3">
                  <span class="absolute left-[19px]">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12L3 7L8 2" stroke="#00A600" stroke-width="3"/>
                    </svg>
                  </span>
                  BACK
                </button>
                <button @click="nextQuestion" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                NEXT
                <span class="absolute right-[19px]">
                  <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                  </svg>
                </span>
              </button>
              </div>
            <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
            </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="progressCount === 6" class="content relative">
            <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
              <span class="font-bold">6.</span>&nbsp;
              What's your training experience level?
            </p>
            <div class="radio-input-group flex md:flex-row flex-col items-center justify-center gap-[24px] max-w-[max-content] mx-auto">
              <div class="relative flex flex-row items-center justify-center w-[max-content]">
                <input type="radio" v-model="data.training_experience" name="training-experience" value="Beginner" class="mr-2" checked>
                <label for="training-experience" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                  Beginner
                  <span></span>
                </label>
              </div>
              <div class="relative flex flex-row items-center justify-center w-[max-content]">
                <input type="radio" v-model="data.training_experience" name="training-experience" value="Intermediate" class="mr-2">
                <label for="training-experience" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                  Intermediate
                  <span></span>
                </label>
              </div>
              <div class="relative flex flex-row items-center justify-center w-[max-content]">
                <input type="radio" v-model="data.training_experience" name="training-experience" value="Advanced" class="mr-2">
                <label for="training-experience" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                  Advanced
                  <span></span>
                </label>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center mt-16">
              <div class="flex items-center justify-evenly max-w-[552px] w-full">
                <button @click="previousQuestion" class="relative flex items-center justify-center bg-[transparent] text-greenDark text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px] border-greenDark border-[2px] mr-3">
                  <span class="absolute left-[19px]">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12L3 7L8 2" stroke="#00A600" stroke-width="3"/>
                    </svg>
                  </span>
                  BACK
                </button>
                <button @click="nextQuestion" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                NEXT
                <span class="absolute right-[19px]">
                  <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                  </svg>
                </span>
              </button>
              </div>
            <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
            </div>
          </div>
        </transition>
        <transition name="fadeInOut">
          <div v-show="progressCount === 7" class="content relative">
            <p class="font-light text-[16px] md:text-[22px] leading-[22.5px] text-center mb-6">
              <span class="font-bold">7.</span>&nbsp;
              Do you have access to gym & equipments?
            </p>
            <div class="radio-input-group flex md:flex-row flex-col items-center justify-center gap-[24px] max-w-[max-content] mx-auto">
              <div class="relative flex flex-row items-center justify-center w-[max-content]">
                <input type="radio" v-model="data.access_to_equipments" name="access-to-equipments" value="Yes" class="mr-2" checked>
                <label for="access-to-equipments" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                  Yes
                  <span></span>
                </label>
              </div>
              <div class="relative flex flex-row items-center justify-center w-[max-content]">
                <input type="radio" v-model="data.access_to_equipments" name="access-to-equipments" value="No" class="mr-2">
                <label for="access-to-equipments" class="text-grayDark flex flex-row-reverse items-center border-[2px] border-grayLighter rounded-[8px] py-4 px-3">
                  No
                  <span></span>
                </label>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center mt-16">
              <div class="flex items-center justify-evenly max-w-[552px] w-full">
                <button @click="previousQuestion" class="relative flex items-center justify-center bg-[transparent] text-greenDark text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px] border-greenDark border-[2px] mr-3">
                  <span class="absolute left-[19px]">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12L3 7L8 2" stroke="#00A600" stroke-width="3"/>
                    </svg>
                  </span>
                  BACK
                </button>
                <button @click="finish" class="relative flex items-center justify-center bg-greenDark text-white text-[14px] leading-[14px] max-w-[252px] py-4 px-[65px] w-full rounded-[8px]">
                FINISH
                <span class="absolute right-[19px]">
                  <svg class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/>
                  </svg>
                </span>
              </button>
              </div>
            <span class="underline font-bold text-[16px] mt-[24px] text-center">Come back later</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'

export default {
  setup () {
    const isMetric = ref(true)
    const progressCount = ref(1)
    const progressValue = ref(14.28)

    const data = reactive({
      gender: 'male',
      age: '18-24',
      metric_measurement: isMetric,
      height: '',
      weight: '',
      goal: 'Build muscle',
      weight_goal: '',
      training_experience: 'Beginner'
    })

    onMounted(() => {
      // init progress width
      const progressBar = ref(document.querySelector('.progress'))
      progressBar.value.style.width = `${14.28 * (progressCount.value)}%`
    })

    const nextQuestion = async (question) => {
      const progressBar = document.querySelector('.progress')
      // update calculations
      const update = () => {
        progressValue.value = 14.28 * progressCount.value
        return progressValue.value
      }
      if (progressCount.value < 7) {
        progressCount.value++
        progressBar.style.width = `${update()}%`
      }
    }
    const previousQuestion = async () => {
      const progressBar = document.querySelector('.progress')
      // update calculations
      const update = () => {
        progressValue.value = progressValue.value - 14.28
        return progressValue.value
      }
      if (progressCount.value > 1) {
        progressCount.value--
        progressBar.style.width = `${update()}%`
      }
    }

    return {
      // progress,
      data,
      isMetric,
      progressCount,
      nextQuestion,
      previousQuestion
    }
  }
}
</script>

<style scoped>
.radio-input-group input[type="radio"] {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.radio-input-group label {
  cursor: pointer;
  color: #555;
}
.radio-input-group label span {
  display: inline-block;
  vertical-align: middle;
  width: 17px;
  height: 17px;
  margin-right: 8px;
  background: url('../../assets/svgs/green-circle-check.svg') -48px center no-repeat;
}
.radio-input-group input[type="radio"]:checked + label span {
  background: url('../../assets/svgs/green-circle-check.svg') 0px center no-repeat;
}

/* Input style */

.radio-input-group input[type="radio"]:checked+label {
  color: #00A600;
  font-weight: 600;
  border: solid 2px #00A600
}

.progress {
  width: 0;
  transition: all .4s ease-in-out;
}

.fadeInOut-enter-from {
  opacity: 0;
}
.fadeInOut-enter-to {
  opacity: 1;
}
.fadeInOut-enter-active {
  transition: all .2s ease-in-out;
}
.fadeInOut-leave-from {
  opacity: 1;
}
.fadeInOut-leave-to {
  opacity: 0;
}
</style>
