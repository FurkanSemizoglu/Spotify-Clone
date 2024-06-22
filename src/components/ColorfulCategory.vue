<script setup lang="ts">
import uniqolor from 'uniqolor'

import { ref } from 'vue'
interface ColorfulCategoryProps {
  categoryName: string
  image: string
}

const props = defineProps<ColorfulCategoryProps>()
const randomColor = ref<any>('')

randomColor.value = uniqolor.random()
</script>

<template>
  <div
    :style="`background-color:${uniqolor.random().color}`"
    class="contrast-[2] brightness-[0.87] rounded-xl h-[200px] relative overflow-hidden transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
  >
    <div class="text-white pt-3 pl-4 font-semibold text-[23px]">{{ props.categoryName }}</div>
    <img
      class="absolute contrast-[0.55] -right-3.5 bottom-0 max-w-[100px] rotate-[20deg]"
      :src="props.image || ''"
    />
  </div>
</template>
