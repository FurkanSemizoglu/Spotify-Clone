<script setup lang="ts">
interface HomeCardProps {
  imageUrl: string
  title: string
  subtitle: string
}

const props = defineProps<HomeCardProps>()
</script>

<template>
  <div class="p-2 bg-[#111111] rounded-md">
    <img class="rounded-md" :src="props.imageUrl" alt="homeImage" />

    <div class="text-white font-semibold text-[17px] pt-2">{{ props.title }}</div>
    <div class="text-gray-400 text-[13px]">{{ props.subtitle }}</div>
  </div>
</template>
