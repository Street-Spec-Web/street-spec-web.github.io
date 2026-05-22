<script setup>
import BarChart from '@/components/ui/BarChart.vue';
import CarInfo from '@/components/ui/CarInfo.vue';
import jsonData from '@/assets/carList.json'
import { ref, computed } from 'vue'

let data = {}

jsonData.cars.forEach(car => {

  car.tags.forEach(tag => {
    if (tag !== "NPC Car") {
      data[tag] = (data[tag] ?? 0) + 1
    }
  });
})
data = Object.entries(data).sort((a, b) => b[1] - a[1])
data = Object.fromEntries(data)

const selectedTag = ref(null)

const filteredCars = computed(() => {
  if (!selectedTag.value) return []
  return jsonData.cars.filter(car => car.tags.includes(selectedTag.value))
})


</script>
<template>
  <div class="flex justify-between flex-1 flex-col gap-2 xl:gap-0 xl:flex-row xl:h-full p-5">
    <section class="flex flex-col ">
      <h1>Suggestions by Country</h1>
      <p>Note: vehicles with in house rebadges will count towards both countries</p>
      <p class="smallText">Click the bars to show the cars from that country</p>
      <div class="h-[25vh] md:h-[30vh] xl:h-full mt-1 w-[90vw] xl:w-[65vw]">
        <BarChart :data=data default="Japanese" label="Suggestions" @selectedValue="(tag) => selectedTag = tag"
          class="" />
      </div>
    </section>
    <section class="overflow-hidden h-full box pb-0 px-2 gap-0 xl:w-[30vw]">
      <h1 class="border-0 pl-5 mb-0">{{ data[selectedTag] }} {{ selectedTag }} Cars</h1>
      <div
        class="overflow-y-auto h-full w-full content-start border-t-2 border-border grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
        <CarInfo v-for="car in filteredCars" :key="car.id" :car="car" class="m-2 self-start " />
      </div>
    </section>
  </div>
</template>