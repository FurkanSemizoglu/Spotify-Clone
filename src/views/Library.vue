<script setup lang="ts">
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue'

import { ref } from 'vue'

const isPlaying = ref<boolean>(true)
</script>

<template>
  <div class="px-16 py-10">
    <!-- Album Cover Part -->

    <div class="text-white text-2xl font-semibold cursor-pointer inline-block hover:underline">
      Duman
    </div>
    <div class="flex flex-row items-center mt-6">
      <img :width="140" src="https://picsum.photos/id/163/300/300" alt="dumanPicture" />
      <div class="ml-8 flex flex-col h-[140px] mx-auto items-start gap-4">
        <div
          style="font-size: 33px"
          class="text-white inline-block w-full hover:underline cursor-pointer font-semibold"
        >
          Duman
        </div>
        <div class="flex items-center justify-normal text-gray-300 text-[13px] gap-3">
          <span>Album</span>
          <div class="bg-white w-1 h-1 rounded-full mt-1 mr-2" />
          <span>Album</span>
          <div class="bg-white w-1 h-1 rounded-full mt-1 mr-2" />
          <span>Album</span>
        </div>
        <div class="flex w-full items-center justify-start gap-6">
          <button class="p-1 rounded-full bg-white">
            <Play v-if="isPlaying" fillColor="#181818" :size="25" />
            <Pause v-else fillColor="#181818" :size="25" />
          </button>
          <Heart fillColor="#1BD760" :size="30" />
          <DotsHorizontal fillColor="#FFFFFF" :size="25" />
        </div>
      </div>
    </div>
    <!-- Album Cover Part -->

    <div class="mt-8"></div>
    <div class="flex justify-between items-center px-4">
      <div class="flex items-center gap-6 text-gray-400">
        <div class="">#</div>
        <div class="text-sm">Title</div>
      </div>
      <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" />
    </div>
    <div class="border border-gray-600 mt-2"></div>

    <div class="flex flex-col px-1">
      <div
        class="text-white flex justify-between transition duration-300 ease-in-out py-2 px-3 hover:bg-gray-800 rounded-md gap-1 mt-3 cursor-pointer"
      >
        <div class="flex gap-7 items-center">
          <div>1</div>
          <div>
            <div>Intro</div>
            <div>Duman</div>
          </div>
        </div>
        <div class="flex items-center">1:02</div>
      </div>
      <div
        class="text-white flex justify-between transition duration-300 ease-in-out py-2 px-3 hover:bg-gray-800 rounded-md gap-1 mt-3 cursor-pointer"
      >
        <div class="flex gap-7 items-center">
          <div>1</div>
          <div>
            <div>Intro</div>
            <div>Duman</div>
          </div>
        </div>
        <div class="flex items-center">1:02</div>
      </div>

      <div
        class="text-white flex justify-between transition duration-300 ease-in-out py-2 px-3 hover:bg-gray-800 rounded-md gap-1 mt-3 cursor-pointer"
      >
        <div class="flex gap-7 items-center">
          <div>1</div>
          <div>
            <div>Intro</div>
            <div>Duman</div>
          </div>
        </div>
        <div class="flex items-center">1:02</div>
      </div>

      <div
        class="text-white flex justify-between transition duration-300 ease-in-out py-2 px-3 hover:bg-gray-800 rounded-md gap-1 mt-3 cursor-pointer"
      >
        <div class="flex gap-7 items-center">
          <div>1</div>
          <div>
            <div>Intro</div>
            <div>Duman</div>
          </div>
        </div>
        <div class="flex items-center">1:02</div>
      </div>
    </div>
  </div>
</template>
