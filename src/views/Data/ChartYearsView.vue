<script setup>
import BarChart from '@/components/ui/BarChart.vue';
import CarInfo from '@/components/ui/CarInfo.vue';
import { ref, computed } from 'vue'
import { getCarList } from '@/stores/carList'
const { carList } = getCarList()
let data = {}

carList.cars.forEach(car => {
  const min = Number(car.yearsMin)
  const max = Number(car.yearsMax)
  const counted = new Set()

  for (let i = min; i <= max; i++) {
    const bucket = Math.floor(i / 2) * 2
    if (!counted.has(bucket)) {
      data[bucket] = (data[bucket] ?? 0) + 1
      counted.add(bucket)
    }
  }
})

const cars = ref(carList.cars)
const selectedYear = ref(null)

const filteredCars = computed(() => {
  return cars.value.filter((car) => selectedYear.value >= car.yearsMin && selectedYear.value <= car.yearsMax)
})


</script>
<template>
  <div class="flex justify-between flex-1 flex-col gap-2 xl:gap-0 xl:flex-row xl:h-full p-5">
    <section class="flex flex-col ">
      <h1>Suggestions by Model Year</h1>
      <p>Note: vehicles spanning multiple model years are counted once per year</p>
      <p class="smallText">Click the bars to show the cars from that year</p>
      <div class="h-[25vh] md:h-[30vh] xl:h-full mt-1 w-[90vw] xl:w-[65vw]">
        <BarChart :data=data default="1998" label="Suggestions" @selectedValue="(year) => selectedYear = year"
          class="" />
      </div>
    </section>
    <section class="overflow-hidden h-full box pb-0 px-2 gap-0 xl:w-[30vw]">
      <h1 class="border-0 pl-5 mb-0">Cars From {{ selectedYear }}</h1>
      <div
        class="overflow-y-auto h-full w-full content-start border-t-2 border-border grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
        <CarInfo v-for="car in filteredCars" :key="car.id" :car="car" class="m-2 self-start " />
      </div>
    </section>
  </div>
</template>