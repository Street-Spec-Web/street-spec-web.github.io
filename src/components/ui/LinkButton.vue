<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps(['to', 'text'])
const route = useRoute()

const isActive = computed(() => route.path === props.to)
</script>

<template>
    <div :class="['box transition-all duration-500 px-3 py-1  border-accent/80 text-accent bg-linear-160 shadow-inherit',
        isActive
            ? 'from-hover1 to-hover2 cursor-default [&_a]:cursor-default'
            : 'from-hover1/30 to-hover2/30 hover:from-hover1 hover:to-hover2 box-hover cursor-pointer']">
        <RouterLink :to="to">{{ text }}</RouterLink>
    </div>
</template>