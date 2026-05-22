<script setup>
import CarInfo from '@/components/ui/CarInfo.vue';
import jsonData from '@/assets/carList.json'
import { computed, reactive } from 'vue'



const stats = {
  lastUpdated: new Date(jsonData.exportDate),
  requestedCar: jsonData.cars.sort((a, b) => b.reactionCount - a.reactionCount)[0],
  newestCar: jsonData.cars.sort((a, b) => b.yearsMax - a.yearsMax)[0],
  oldestCar: jsonData.cars.sort((a, b) => a.yearsMin - b.yearsMin)[0]
}

const search = reactive({
  query: '',
  nameAsc: null,
  yearAsc: null,
  reactionAsc: null,
  tags: []
})
const cycle = (val) => val === null ? true : val === true ? false : null
const filteredCars = computed(() => {
  let result = [...jsonData.cars]

  // text search
  if (search.query) {
    const terms = search.query.toLowerCase().split(' ').filter(Boolean)
    result = result.filter(car => {
      const name = `${car.brand} ${car.model} ${car.chassis}`.toLowerCase()
      return terms.every(term => name.includes(term))
    })
  }

  // tag filter
  if (search.tags.length > 0) {
    result = result.filter(car =>
      search.tags.every(tag => car.tags.includes(tag))
    )
  }

  result.sort((a, b) => {
    if (search.nameAsc !== null) {
      const nameA = `${a.brand} ${a.model}`
      const nameB = `${b.brand} ${b.model}`
      const nameDiff = nameA.localeCompare(nameB)
      if (nameDiff !== 0) return search.nameAsc ? nameDiff : -nameDiff
    }
    if (search.yearAsc !== null) {
      const yearDiff = Number(a.yearsMin) - Number(b.yearsMin)
      return search.yearAsc ? yearDiff : -yearDiff
    }
    return 0
  })
  if (search.reactionAsc !== null) {
    result.sort((a, b) => search.reactionAsc
      ? a.reactionCount - b.reactionCount
      : b.reactionCount - a.reactionCount
    )
  }

  return result
})

</script>
<template>
  <div class="flex justify-between flex-1 flex-col gap-2 xl:gap-0 xl:flex-row xl:h-full p-5">
    <section class="flex flex-col mr-4 xl:w-[65vw]">
      <h1>Suggestions Data Viewer</h1>
      <p>Welcome to the Street-Spec vehicle suggestions data viewer, use the menu items to see some cool graphs and data
        :p <br> Have fun!</p>
      <p class="smallText">PS: you can click the car elements and it will open its thread in discord</p>
      <div class="box md:flex-row mt-2">
        <input type="search" placeholder="Search" v-model="search.query"
          class="border border-border bg-border/20 rounded-2xl  flex flex-col gap-4 p-[0.25rem_0.5em_0.25rem_1rem] align-middle  select-none  transition-all ease-in-out duration-300 outline-none  hover:border-accent/50  focus:border-accent focus:shadow-glow focus:shadow-accent">
        <div @click="search.nameAsc = cycle(search.nameAsc)" class="btn ">
          By Name {{ search.nameAsc === null ? "—" : search.nameAsc ? "▲" : "▼" }}
        </div>
        <div @click="search.yearAsc = cycle(search.yearAsc)" class="btn ">
          By Year {{ search.yearAsc === null ? "—" : search.yearAsc ? "▲" : "▼" }}
        </div>
        <div @click="search.reactionAsc = cycle(search.reactionAsc)" class="btn ">
          By Reactions {{ search.reactionAsc === null ? "—" : search.reactionAsc ? "▲" : "▼" }}
        </div>

      </div>
      <div
        class="border-b-2 border-border overflow-y-auto h-[30vh] xl:h-full content-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4">
        <CarInfo v-for="car in filteredCars" :key="car.id" :car="car" class="m-2 self-start " />
      </div>

    </section>
    <section class="xl:overflow-hidden xl:h-full box pb-0 px-2 gap-0 mt-10 xl:mt-0 xl:w-[30vw] xl:shrink-0">
      <h1 class="border-0 pl-5 mb-0">Statistics</h1>
      <div class="overflow-y-auto xl:h-full  max-h-[80vh] xl:max-h-none w-full content-start border-t-2 border-border">
        <ul class="*:flex xl:*:items-center *:gap-2 *:my-1 *:ml-4">
          <li>
            <h4>Data Last Updated:</h4> <span>{{ stats.lastUpdated.toDateString() }}</span>
          </li>
          <li>
            <h4>Total Cars:</h4> <span>{{ jsonData.totalCars }}</span>
          </li>
          <li>
            <h4>Rebadged Cars:</h4> <span>{{ jsonData.totalCarsRebadge - jsonData.totalCars }}</span>
          </li>
          <li class="xl:justify-between mr-3 flex-col xl:flex-row">
            <h4>Most Requested:</h4>
            <CarInfo :car=stats.requestedCar class="self-start m-1 xl:w-70 w-full" />
          </li>
          <li class="xl:justify-between mr-3 flex-col xl:flex-row">
            <h4>Newest Car:</h4>
            <CarInfo :car=stats.newestCar class="self-start m-1 xl:w-70 w-full" />
          </li>
          <li class="xl:justify-between mr-3 flex-col xl:flex-row">
            <h4>Oldest Car:</h4>
            <CarInfo :car=stats.oldestCar class="self-start m-1 xl:w-70 w-full" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>