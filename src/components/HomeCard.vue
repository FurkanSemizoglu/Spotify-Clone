<script setup lang="ts">
interface HomeCardProps {
  imageUrl: string
  title: string
  subtitle: string
}

const props = defineProps<HomeCardProps>()
</script>

<template>
  <div
    class="p-3 bg-[#111111] hover:bg-[#282828] cursor-pointer rounded-md transition duration-600 ease-in-out hover:-translate-y-1"
  >
    <img class="rounded-md" :src="props.imageUrl" alt="homeImage" />

    <div class="text-white font-semibold text-[17px] pt-2">{{ props.title }}</div>
    <div class="text-gray-400 text-[13px]">{{ props.subtitle }}</div>
  </div>
</template>
