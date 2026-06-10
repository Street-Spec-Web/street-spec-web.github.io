<script setup>
import LinkButton from '../ui/LinkButton.vue';
import {useRoute } from 'vue-router'

const route = useRoute()
const inHome = route.path == "/"

</script>
<template>
    <header class="p-1 shrink-0">
        <nav :class="['box flex flex-col lg:flex-row px-6 items-center text-lg', inHome ? 'justify-center':' justify-between']">
            
            <img v-if="!inHome" src="@/assets/icons/streetSpec.webp" alt="" class="h-12 ">

            <ul class="flex gap-4 ">
                <li>
                    <LinkButton to="/" text="Home" />
                </li>
                <li>
                    <LinkButton to="/data/" text="Data Viewer" />
                </li>
                <li>
                    <LinkButton to="https://www.google.com" text="Press Kit"  external blank/>
                </li>
                <li>
                    <LinkButton to="/k" text="About Me" />
                </li>
            </ul>
        </nav>
    </header>
</template>