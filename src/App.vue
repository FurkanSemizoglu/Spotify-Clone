<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue'
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue'
import SkipForward from 'vue-material-design-icons/SkipForward.vue'

import Volume from './components/Volume.vue'
import SideBarItem from './components/SideBarItem.vue'

import { ref, watch } from 'vue'

import { usePageTrackerStore } from './stores/pageTracker'

const route = useRoute()
const router = useRouter()
const routePath = ref<string>(route.path)
console.log('query ', route.path)
const openMenu = ref<boolean>(false)

const pageTracker = usePageTrackerStore()
const pageIndex = ref<number>(0)

const toogleMenu = () => {
  openMenu.value = !openMenu.value
}

const openSearchArea = ref<boolean>(false)

watch(route, () => {
  pageTracker.addPage(route.path)
  pageIndex.value++
  console.log('pages ', pageTracker.getPages())
  console.log('pages ', pageIndex.value)

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

const goBackPage = () => {
  /*   console.log('go back') */
  console.log(pageIndex.value)
  if (pageIndex.value === 1) return
  pageIndex.value--
  const page: string = pageTracker.getPage(pageIndex.value - 1)
  router.push(page)
  pageIndex.value--
  /*  window.location.href = `http://localhost:5173${page}`   */
}

const goForwardPage = () => {
  /*  console.log('go back') */
  console.log(pageIndex.value)
  if (pageIndex.value === pageTracker.pageCount) return
  pageIndex.value++
  const page: string = pageTracker.getPage(pageIndex.value - 1)
  router.push(page)
  pageIndex.value++
  /*  window.location.href = `http://localhost:5173${page}`   */
}
</script>

<template>
  <!--    TopNav bar -->
  <div
    class="w-[calc(100%-240px)] h-[60px] fixed right-0 bg-[#101010] z-50 bg-opacity-90 flex items-center justify-between"
  >
    <div class="flex gap-3 ml-3">
      <button type="button" class="bg-black rounded-full" @click="goBackPage">
        <ChevronLeft @click="" fillColor="#FFFFFF" :size="30" />
      </button>
      <button class="bg-black rounded-full" @click="goForwardPage">
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
      <SideBarItem name="Home" iconString="home" :iconSize="23" toUrl="" />
      <SideBarItem name="Search" iconString="search" :iconSize="23" toUrl="search" />
      <SideBarItem name="Library" iconString="library" :iconSize="23" toUrl="library" />

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
  <!--    LeftSide bar -->

  <!--    RouterView bar -->
  <div
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black"
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <div
    class="fixed bottom-0 left-0 w-full h-[90px] bg-[#181818] border-t border-t-[#272727] grid grid-cols-3 items-center justify-center px-10 gap-3"
  >
    <div class="flex items-center gap-10 text-white">
      <img src="https://picsum.photos/id/163/300/300" :width="50" alt="" />
      <div>
        <div class="font-semibold text-[14px] text-white hover:underline cursor-pointer">
          Song Name
        </div>
        <div class="text-[11px] text-gray-500 hover:underline hover:text-white cursor-pointer">
          Album Name
        </div>
      </div>
      <div class="flex">
        <Heart fillColor="#1BD760" :size="20" />
        <PictureInPictureBottomRight class="ml-4" fillColor="#FFFFFF" :size="18" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div>
        <button class="mx-2">
          <SkipBackward fillColor="#FFFFFF" :size="25" />
        </button>
        <button class="p-1 rounded-full mx-3 bg-white">
          <Play fillColor="#181818" :size="25" />
          <!-- <Pause fillColor="#181818" :size="25" /> -->
        </button>
        <button class="mx-2">
          <SkipForward fillColor="#FFFFFF" :size="25" />
        </button>
      </div>
      <div class="flex items-center h-[25px] w-[300px]">
        <div class="text-white text-[12px] pr-2 pt-[11px]">0:0</div>
        <div ref="seekerContainer" class="w-full relative mt-2 mb-3">
          <input
            ref="seeker"
            type="range"
            class="absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
          />
          <div
            class="w-[200px] pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0"
          />
          <div
            class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
          />
        </div>
        <div class="text-white text-[12px] pl-2 pt-[11px]">3:45</div>
      </div>
    </div>

    <div class="flex items-center justify-end mr-6">
      <Volume />
    </div>
  </div>
</template>
