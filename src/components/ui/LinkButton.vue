<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
    to: String,
    text: String,
    external: Boolean,
    blank: Boolean
})
const route = useRoute()

const isActive = computed(() => !props.external && route.path === props.to)
</script>

<template>
    <component :is="props.external ? 'a' : RouterLink"
        v-bind="props.external ? { href: props.to, target: props.blank ? '_blank' : '_self' } : { to }">
        <div :class="['box transition-all duration-500 px-3 py-1 border-accent/80 text-accent bg-linear-160 shadow-inherit text-sm sm:text-lg',
            isActive
                ? 'from-hover1 to-hover2 cursor-default'
                : 'from-hover1/30 to-hover2/30 hover:from-hover1 hover:to-hover2 box-hover cursor-pointer']">
            {{ text }}
        </div>
    </component>
</template>