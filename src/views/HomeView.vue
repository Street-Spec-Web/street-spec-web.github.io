<script setup>
import CarInfo from '@/components/ui/CarInfo.vue';
import jsonData from '@/assets/carList.json'
import { ref, computed } from 'vue'



const stats ={
  lastUpdated: new Date(jsonData.exportDate),
  requestedCar: jsonData.cars.sort((a, b) => b.reactionCount - a.reactionCount)[0],
  newestCar: jsonData.cars.sort((a, b) => b.yearsMax - a.yearsMax)[0],
  oldestCar: jsonData.cars.sort((a, b) => a.yearsMin - b.yearsMin)[0]
}



</script>
<template>
  <div class="flex justify-between flex-1 flex-col gap-2 xl:gap-0 xl:flex-row xl:h-full">
    <section class="flex flex-col ">
      <h1>Suggestions Data Viewer</h1>
      <p>Welcome to the Street-Spec vehicle suggestions data viewer, use the menu items to see some cool graphs and data
        :p <br> Have fun!</p>
      <p class="smallText">Click the bars to show the cars from that country</p>

    </section>
    <section class="overflow-hidden h-full box pb-0 px-2 gap-0 xl:w-[30vw]">
      <h1 class="border-0 pl-5 mb-0">Statistics</h1>
      <div class="overflow-y-auto h-full w-full content-start border-t-2 border-border ">
        <ul class="*:flex *:items-center *:gap-2 *:my-1 *:ml-4">
          <li>
            <h4>Data Last Updated:</h4> <span>{{ stats.lastUpdated.toDateString() }}</span>
          </li>
          <li>
            <h4>Total Cars:</h4> <span>{{ jsonData.totalCars }}</span>
          </li>
          <li>
            <h4>Rebadged Cars:</h4> <span>{{ jsonData.totalCarsRebadge - jsonData.totalCars }}</span>
          </li>
          <li class="justify-between mr-3">
            <h4>Most Requested:</h4>
            <CarInfo :car=stats.requestedCar class="self-start m-1 w-70" />
          </li>
          <li class="justify-between mr-3">
            <h4>Newest Car:</h4>
            <CarInfo :car=stats.newestCar class="self-start m-1 w-70" />
          </li>
          <li class="justify-between mr-3">
            <h4>Oldest Car:</h4>
            <CarInfo :car=stats.oldestCar class="self-start m-1 w-70" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>