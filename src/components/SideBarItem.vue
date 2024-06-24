<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

interface SideBarItemProps {
  name: string
  iconString: string
  iconSize: number
  toUrl: string
}

const props = defineProps<SideBarItemProps>()

const imageSrc = ref<string>('')
const hoverVal = ref<boolean>(false)

/* imageSrc.value = props.iconString + '-active'
 */
onMounted(() => {
  if (route.path === `/${props.toUrl}`) {
    imageSrc.value = props.iconString + '-active'
    hoverVal.value = true
  } else {
    imageSrc.value = props.iconString + '-inactive'
    hoverVal.value = false
  }
})

const hoverHandler = () => {
  if (imageSrc.value === props.iconString + '-inactive') {
    imageSrc.value = props.iconString + '-inactive-hover'
  } else if (imageSrc.value === props.iconString + '-active') {
    return
  } else {
    imageSrc.value = props.iconString + '-inactive'
  }
}

const leaveHoverHandler = () => {
  if (imageSrc.value === props.iconString + '-inactive-hover') {
    imageSrc.value = props.iconString + '-inactive'
  }
}

watch(imageSrc, () => {
  console.log('imageSrc ', imageSrc.value)
})

/* watch(hoverHandler, () => {
  console.log('hoverVal ', hoverVal.value)
}) */

watch(
  () => route.path,
  () => {
    console.log('route ', route.path)
    console.log('props ', props.toUrl)
    if (route.path === `/${props.toUrl}`) {
      imageSrc.value = props.iconString + '-active'
      hoverVal.value = true
    } else {
      imageSrc.value = props.iconString + '-inactive'
      hoverVal.value = false
    }
  }
)
</script>

<template>
  <RouterLink :to="`/${props.toUrl}`">
    <div
      class="flex items-center justify-center gap-4 cursor-pointer"
      @mouseover="hoverHandler"
      @mouseleave="leaveHoverHandler"
    >
      <img :width="iconSize" :src="`/images/icons/${imageSrc}.png`" :alt="name" />

      <div v-if="hoverVal" class="text-white font-semibold text-[14px] ml-4 mt-0.5">
        {{ props.name }}
      </div>
      <div v-else class="text-gray-400 font-semibold text-[14px] ml-4 mt-0.5 hover:text-white">
        {{ props.name }}
      </div>
    </div>
  </RouterLink>
</template>
