<script setup lang="ts">
interface SingerCardProps {
  name: string
  imageSrc: string
}

const props = defineProps<SingerCardProps>()
</script>

<template>
  <div
    class="bg-[#282828] rounded-lg p-4 flex items-center justify-between gap-3 relative bg-opacity-80 hover:bg-opacity-100 cursor-pointer max-h-[60px]"
  >
    <img
      :width="60"
      class="absolute left-0 h-full rounded-lg opacity-100"
      :src="props.imageSrc"
      alt=""
    />
    <div class="text-white ml-20 block">{{ props.name }}</div>
  </div>
</template>
