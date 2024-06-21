<script setup lang="ts">
import { ref } from 'vue'

interface SideBarItemProps {
  name: string
  iconString: string
  iconSize: number
}

const props = defineProps<SideBarItemProps>()

const imageSrc = ref<string>('')

imageSrc.value = props.iconString + '-active'
</script>

<template>
  <div class="flex items-center justify-center gap-4 cursor-pointer">
    <img :width="iconSize" :src="`/images/icons/${imageSrc}.png`" :alt="name" />

    <div class="text-white font-semibold text-[14px] ml-4 mt-0.5">{{ props.name }}</div>
  </div>
</template>
