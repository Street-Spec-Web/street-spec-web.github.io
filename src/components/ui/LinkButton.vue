<script setup>
import { RouterLink } from 'vue-router';

defineProps(['to', 'text'])
</script>
<template>
    <div class="box transition-colors duration-500 px-3 py-1 cursor-pointer border-accent/80 text-accent bg-linear-160 from-hover1/30 to-hover2/30 hover:from-hover1 hover:to-hover2 hover:text-pink-300  *:hover:animate-pulse">
        <RouterLink :to="to" >
            {{text}}
        </RouterLink>
    </div>
</template>