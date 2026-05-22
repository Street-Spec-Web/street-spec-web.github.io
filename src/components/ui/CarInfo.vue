<script setup>
import { computed } from 'vue'

const props = defineProps(['car'])

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
  return props.car.tags.filter(tag => tag !== "NPC Car")
})

</script>
<template>
    <a :href=url target="_blank">
        <div class="box px-3 py-2 box-hover h-full">
            <div class="flex justify-between smallText">
                <span>{{ car.yearsMin }}—{{ car.yearsMax }}</span>
                <span>Reactions: {{ car.reactionCount }}</span>
            </div>
            <div :class="['flex gap-2 justify-center items-center relative', textSize]">
                {{ car.brand }} {{ car.model }} <span :class="['smallText', chassisTextSize]">{{ car.chassis }}</span>
                <span v-if="car.rebadge" class="absolute -top-3 left-2 text-3xs text-accent/50">Rebadge</span>
            </div>
            <div class="flex justify-between  smallText">
                <span>Tags:</span>
                <span>
                    <ul class="tagList">
                        <li v-for="tag in filteredTags" :key="tag">{{ tag }}</li>
                    </ul>
                </span>
            </div>

        </div>

    </a>
</template>