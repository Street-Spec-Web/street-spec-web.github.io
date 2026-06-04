<script setup>
import { ref, computed } from 'vue'
import { getCarList } from '@/stores/carList'
const { carList } = getCarList()
const NPC_CAR_ID = '1450861039628587088'
const hovered = ref(false)
const props = defineProps(['car', 'includeNPC'])
const image = carList.images[props.car.url]
const fullName = `${props.car.brand} ${props.car.model} ${props.car.chassis}`;
const textSize = fullName.length > 25 ? 'text-2xs'
    : fullName.length > 20 ? 'text-xs'
        : fullName.length > 15 ? 'text-sm'
            : 'text-base'
const chassisTextSize = fullName.length > 25 ? 'text-3xs'
    : fullName.length > 15 ? 'text-2xs'
        : fullName.length > 5 ? 'text-xs'
            : 'text-sm'
const url = `discord://discord.com/channels/1448022502969315440/${props.car.url}`


const filteredTags = computed(() => {
  return props.includeNPC 
    ? props.car.tags 
    : props.car.tags.filter(([, id]) => id !== NPC_CAR_ID)
})

</script>
<template>
    <a :href="url" target="_blank" class="h-full py-2">
        <div class="box px-3 py-2 box-hover h-full flex flex-col justify-between relative overflow-hidden"
            @mouseenter="hovered = true"
            @mouseleave="hovered = false">
            
            <!-- bg image layer -->
            <div v-if="image"
                class="absolute inset-0 bg-cover bg-center transition-opacity duration-300 rounded-2xl"
                :class="hovered ? 'opacity-100' : 'opacity-20'"
                :style="{ backgroundImage: `url(${image})` }" />

            <!-- content -->
            <div :class="['relative flex justify-between smallText', hovered ? 'text-white text-shadow-[0_0_5px_black,0_0_5px_black]' : '']">
                <span>{{ car.yearsMin }}—{{ car.yearsMax }}</span>
                <span>Reactions: {{ car.reactionCount }}</span>
            </div>
            <div :class="['relative flex gap-2 justify-center items-center text-text hover:text-white', textSize, hovered ? 'text-white text-shadow-[0_0_5px_black,0_0_5px_black,0_0_10px_black]' : '']">
                {{ car.brand }} {{ car.model }} <span :class="['smallText hover', chassisTextSize, hovered ? 'text-white text-shadow-[0_0_5px_black,0_0_5px_black]' : '']">{{ car.chassis }}</span>
                <span v-if="car.rebadge" :class="['absolute -top-3 left-2 text-3xs text-accent/80', hovered ? 'text-white text-shadow-[0_0_5px_black]' : '']">Rebadge</span>
            </div>
            <div :class="['relative flex justify-between smallText', hovered ? 'text-white text-shadow-[0_0_5px_black,0_0_5px_black]' : '']">
                <span>Tags:</span>
                <ul class="tagList">
                    <li v-for="tag in filteredTags" :key="tag[1]">{{ tag[0] }}</li>
                </ul>
            </div>
        </div>
    </a>
</template>
