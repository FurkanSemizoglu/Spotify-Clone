<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
</script>

<template>
  <div
    class="w-[calc(100%-240px)] h-[60px] fixed right-0 bg-[#101010] bg-opacity-80 flex items-center justify-between"
  >
    <div class="flex gap-3 ml-3">
      <button type="button" class="bg-black rounded-full">
        <ChevronLeft fillColor="#FFFFFF" :size="30" />
      </button>
      <button class="bg-black rounded-full">
        <ChevronRight fillColor="#FFFFFF" :size="30" />
      </button>
    </div>

    <div
      class="flex items-center gap-2 mr-3 py-0.5 px-1 bg-black hover:bg-[#282828] rounded-full border"
    >
      <img
        class="rounded-full"
        src="https://media.licdn.com/dms/image/D5603AQF1lXJf2qqQIg/profile-displayphoto-shrink_400_400/0/1709556031487?e=1724284800&v=beta&t=RvZebl9MhY9sWN7V3mttoyOAK7oNp2mtJequydWuJMU"
        width="27"
        alt="photo"
      />
      <div class="text-white text-[14px] cursor-default">Furkan Semizoğlu</div>
      <ChevronDown fillColor="#FFFFFF" :size="30" />
    </div>
  </div>
</template>
