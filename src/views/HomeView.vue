<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue'
import SingerCard from '@/components/SingerCard.vue'
import singers from '../categories'

console.log(singers)
</script>
<template>
  <div class="p-8">
    <!-- top part -->
    <!-- <example /> -->;
    <div class="grid grid-cols-5 gap-4">
      <div v-for="(singer, index) in singers" :key="index">
        <SingerCard :name="singer.name" :imageSrc="singer.imageSrc" />
      </div>
    </div>
    <!-- top part -->

    <!-- bottom part -->

    <div
      class="inline-block text-2xl font-semibold mt-10 mb-3 text-white hover:underline cursor-pointer"
    >
      Recommended Stations
    </div>
    <div class="grid grid-cols-5 gap-2">
      <HomeCard
        image-url="https://picsum.photos/id/30/300/300"
        title="Trend 2024"
        subtitle="subtitle"
      />
      <HomeCard
        image-url="https://picsum.photos/id/45/300/300"
        title="I am title"
        subtitle="subtitle"
      />
      <HomeCard
        image-url="https://picsum.photos/id/52/300/300"
        title="Summer Hits"
        subtitle="subtitle"
      />
      <HomeCard
        class="lg:block hidden"
        image-url="https://picsum.photos/id/61/300/300"
        title="I am title"
        subtitle="subtitle"
      />
      <HomeCard
        class="xl:block hidden"
        image-url="https://picsum.photos/id/55/300/300"
        title="I am title"
        subtitle="subtitle"
      />
    </div>

    <div
      class="inline-block text-2xl font-semibold mt-16 mb-3 text-white hover:underline cursor-pointer"
    >
      Recommended For Today
    </div>
    <div class="grid grid-cols-5 gap-2">
      <HomeCard
        image-url="https://picsum.photos/id/10/300/300"
        title="I am title"
        subtitle="subtitle"
      />
      <HomeCard
        image-url="https://picsum.photos/id/93/300/300"
        title="I am title"
        subtitle="subtitle"
      />
      <HomeCard
        image-url="https://picsum.photos/id/7/300/300"
        title="I am title"
        subtitle="subtitle"
      />
      <HomeCard
        class="lg:block hidden"
        image-url="https://picsum.photos/id/65/300/300"
        title="I am title"
        subtitle="subtitle"
      />
      <HomeCard
        class="xl:block hidden"
        image-url="https://picsum.photos/id/83/300/300"
        title="I am title"
        subtitle="subtitle"
      />
    </div>
  </div>
</template>
