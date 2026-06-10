<script setup>
import { computed } from 'vue';
const props = defineProps({
    to: String,
    name: String,
    icon: String,
})
const icons = import.meta.glob('@/assets/icons/*.svg', { query: '?component', eager: true })
const Icon = computed(() => icons[`/src/assets/icons/${props.icon}.svg`]?.default)</script>

<template>
    <a :href="props.to" target="_blank" class="btn enableHover flex items-center justify-center gap-3 m-4">
        <Icon class="w-8 m-1 ml-4 fill-current"/>
        <span class="uppercase text-xl font-bold w-30 text-left">{{ props.name }}</span>
        
    </a>
</template>