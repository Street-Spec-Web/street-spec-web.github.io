<script setup>
import LinkButton from '../ui/LinkButton.vue';
</script>
<template>
    <header class="p-1 shrink-0">
        <nav class="box flex flex-col xl:flex-row justify-between px-6 items-center text-lg">
            <img src="@/assets/icons/streetSpecData.webp" alt="" class=" md:h-12 ">

            <ul class=" grid grid-cols-2 md:grid-cols-3 gap-4 lg:flex lg:flex-row ">
                <li>
                    <LinkButton to="/" text="&#8629; Go Back" />
                </li>
                <li>
                    <LinkButton to="/data/" text="Search" />
                </li>
                <li>
                    <LinkButton to="/data/years" text="Per Year" />
                </li>
                <li>
                    <LinkButton to="/data/tags" text="By Market" />
                </li>
                <li>
                    <LinkButton to="/data/brand" text="By Brand" />
                </li>
            </ul>
        </nav>
    </header>
</template>