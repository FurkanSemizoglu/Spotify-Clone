<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'

import SideBarItem from './components/SideBarItem.vue'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routePath = ref<string>(route.path)
console.log('query ', route.path)
const openMenu = ref<boolean>(false)

const toogleMenu = () => {
  openMenu.value = !openMenu.value
}

const openSearchArea = ref<boolean>(false)

watch(route, () => {
  routePath.value = route.path
})

watch(routePath, (newVal, oldVal) => {
  if (route.path === '/search') {
    openSearchArea.value = true
  } else {
    openSearchArea.value = false
  }

  console.log('oldVal', oldVal)
  console.log('newVal', newVal)
})
</script>

<template>
  <!--    TopNav bar -->
  <div
    class="w-[calc(100%-240px)] h-[60px] fixed right-0 bg-[#101010] z-50 bg-opacity-90 flex items-center justify-between"
  >
    <div class="flex gap-3 ml-3">
      <button type="button" class="bg-black rounded-full">
        <ChevronLeft @click="" fillColor="#FFFFFF" :size="30" />
      </button>
      <button class="bg-black rounded-full">
        <ChevronRight fillColor="#FFFFFF" :size="30" />
      </button>

      <div v-if="openSearchArea" class="flex items-center ml-10 w-[300px] md:block hidden">
        <input
          class="rounded-3xl border-none w-full bg-[#3E3D3D] p-1 px-3 text-white placeholder:text-gray-400 placeholder:text-[14px]"
          type="text"
          placeholder="What do you want to play?"
        />
      </div>
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
      <button @click="toogleMenu">
        <ChevronDown v-if="!openMenu" fillColor="#FFFFFF" :size="30" />
        <ChevronUp v-else fillColor="#FFFFFF" :size="30" />
      </button>
    </div>
  </div>
  <span v-if="openMenu" class="fixed top-[50px] right-7 z-50 w-[180px] bg-[#282828] shadow-2xl">
    <ul class="flex flex-col py-1 font-semibold text-[14px]">
      <li class="text-white hover:bg-[#3E3D3D] cursor-pointer p-2 border-b border-b-gray-600">
        Profile
      </li>
      <!-- <div class="border border-gray-500 my-2"></div> -->
      <li class="text-white hover:bg-[#3E3D3D] cursor-pointer p-2">Sign Out</li>
    </ul>
  </span>

  <!--    TopNav bar -->

  <!--    LeftSide bar -->

  <div class="fixed h-full left-0 w-[240px] bg-black">
    <div class="flex pt-5 gap-3 flex-col items-start ml-7">
      <RouterLink to="/">
        <img width="125" src="/images/icons/spotify-logo.png" alt="" />
      </RouterLink>
      <div class="my-4"></div>
      <!--    <div class="sidebar-items">
      <SideBarItem name="Home" iconString="home" :iconSize="23" />
      <SideBarItem name="Search" iconString="search" :iconSize="23" />
      <SideBarItem name="Library" iconString="library" :iconSize="23" />
    </div> -->
      <SideBarItem name="Home" iconString="home" :iconSize="23" to-url="" />
      <SideBarItem name="Search" iconString="search" :iconSize="23" to-url="search" />
      <SideBarItem name="Library" iconString="library" :iconSize="23" to-url="library" />

      <div class="my-4"></div>

      <SideBarItem name="Playlist" iconString="playlist" :iconSize="27" to-url="playlist" />

      <SideBarItem name="Liked" iconString="liked" :iconSize="27" to-url="liked" />

      <div class="border-b w-[90%] mt-2 border-b-gray-700"></div>

      <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white cursor-pointer">
          My Playlist #1
        </li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white cursor-pointer">
          My Playlist #2
        </li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white cursor-pointer">
          My Playlist #3
        </li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white cursor-pointer">
          My Playlist #4
        </li>
      </ul>
    </div>
  </div>

  <div
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>
</template>
