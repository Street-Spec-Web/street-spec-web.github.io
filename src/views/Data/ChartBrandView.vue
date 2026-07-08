<script setup>
import BarChart from '@/components/ui/BarChart.vue';
import CarInfo from '@/components/ui/CarInfo.vue';
import { ref, computed } from 'vue'
// Loading of data
import { getCarList } from '@/stores/carList'
const store = getCarList()
await store.ready 
const carList = store.carList

let data = {}
let other = ["Other",0]
let otherBrands = []


carList.cars.forEach(car => {
  data[car.brand] = (data[car.brand] ?? 0) + 1
})
// Convert to object
data = Object.entries(data)


data.forEach(car => {
  if (car[1] < 2){
    otherBrands.push(car[0])// Adds the car brand name, for filtering later
    other[1] += 1

    data = data.filter(c => c !== car) // this filter removes the element from the main array
  }
});

data = data.sort((a, b) => b[1] - a[1])
data.push(other)

data = Object.fromEntries(data)


const selectedBrand = ref(null)

const filteredCars = computed(() => {
  if (!selectedBrand.value) return []
  if (selectedBrand.value == "Other"){
    return carList.cars.filter(car => otherBrands.includes(car.brand))
  }
  return carList.cars.filter(car => car.brand == selectedBrand.value)
})


</script>
<template>
  <div class="flex justify-between flex-1 flex-col gap-2 xl:gap-0 xl:flex-row xl:h-full p-5">
    <section class="flex flex-col ">
      <h1>Suggestions by Country</h1>
      <p>If a brand has only been suggested once, it will use the <b>Other</b> category</p>
      <p class="smallText">Click the bars to show the cars from that brand</p>
      <div class="h-[25vh] md:h-[30vh] xl:h-full mt-1 w-[90vw] xl:w-[65vw]">
        <BarChart :data=data default="Nissan" label="Suggestions" @selectedValue="(brand) => selectedBrand = brand"
          class="" />
      </div>
    </section>
    <section class="overflow-hidden h-full box pb-0 px-2 gap-0 xl:w-[30vw]">
      <h1 class="border-0 pl-5 mb-0">{{ data[selectedBrand] }} {{ selectedBrand }} Cars</h1>
      <div
        class="overflow-y-auto h-full w-full content-start border-t-2 border-border grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
        <CarInfo v-for="car in filteredCars" :key="car.id" :car="car" class="m-2 self-start " />
      </div>
    </section>
  </div>
</template>