<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue'
</script>

<template>
  <div class="p-8">
    <!-- top part -->
    <div class="grid grid-cols-5 gap-4">
      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>
      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>
      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>
      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>

      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>

      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>

      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>

      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>

      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
      </div>

      <div class="bg-[#282828] rounded-lg p-4">
        <img
          class="rounded-lg"
          src="https://i.scdn.co/image/ab67706f00000003b3b3f3b3b3f3b3b3f3b3b3f3"
          alt=""
        />
        <div class="text-white mt-2">Today's Top Hits</div>
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
