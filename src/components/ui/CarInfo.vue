<script setup>
const props = defineProps(['car'])

const fullName = `${props.car.brand} ${props.car.model} ${props.car.chassis}`;
const textSize = fullName.length > 35 ? 'text-2xs'
               : fullName.length > 25 ? 'text-xs'
               : fullName.length > 15 ? 'text-sm'
               : 'text-base'
const chassisTextSize   = fullName.length > 25 ? 'text-3xs'
                        : fullName.length > 15 ? 'text-2xs'
                        : fullName.length > 5 ? 'text-xs'
                        : 'text-sm'

</script>
<template>
    <div class="box px-3 py-2">
        <div class="flex justify-between smallText">
            <span>{{ car.yearsMin }}—{{ car.yearsMax }}</span>
            <span>Reactions: {{ car.reactionCount }}</span>
        </div>
        <div :class="['flex gap-2 justify-center items-center', textSize]">
                {{ car.brand }} {{ car.model }} <span :class="['smallText',chassisTextSize]">{{ car.chassis }}</span>
        </div>
        <div class="flex justify-between  smallText">
            <span>Tags:</span>
            <span>
                <ul class="tagList">
                    <li v-for="tag in car.tags" :key="tag" >{{ tag }}</li>
                </ul>
            </span>
        </div>
    </div>
</template>