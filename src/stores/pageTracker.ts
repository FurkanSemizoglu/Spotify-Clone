import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePageTrackerStore = defineStore('pageTracker', () => {
  const pages = ref<string[]>([])

  function addPage(page: string) {
    pages.value.push(page)
  }

  function getPage(index: number) {
    return pages.value[index]
  }

  function getPages() {
    return pages.value
  }

  const pageCount = computed(() => pages.value.length)

  return { pages, addPage, getPage, pageCount, getPages }
})
