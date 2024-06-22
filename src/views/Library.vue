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
  <div class="px-8 py-7">
    <div class="text-white text-2xl font-semibold cursor-pointer inline-block hover:underline">
      Duman
    </div>
    <div class="flex items-center mt-6">
      <img :width="140" src="https://picsum.photos/id/163/300/300" alt="dumanPicture" />
      <div class="ml-5 flex flex-col h-[140px] items-start justify-between">
        <div class="text-white inline-block w-full hover:underline cursor-pointer font-semibold">
          Duman
        </div>
        <div class="flex items-center justify-normal text-white gap-3">
          <span>Album</span>
          <span>Album</span>
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
  </div>
</template>
