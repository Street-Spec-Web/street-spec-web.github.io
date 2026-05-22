<script setup>
import { RouterView } from 'vue-router'
import LinkButton from './components/ui/LinkButton.vue';
const date = new Date();

</script>

<template>
  <div class="flex flex-col h-screen">

    <header class="p-1 shrink-0">
      <nav class="box flex flex-col lg:flex-row justify-between px-6 items-center text-lg">
        <img src="/streetSpecData.webp" alt="" class="w-xl ">

        <ul class="flex gap-4 ">
          <li>
            <LinkButton to="/" text="Home" />
          </li>
          <li>
            <LinkButton to="/years" text="Per Year" />
          </li>
          <li>
            <LinkButton to="/tags" text="By Country" />
          </li>
        </ul>
      </nav>
    </header>
    <main class="flex flex-1 min-h-0 xl:overflow-hidden overflow-y-auto relative">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <footer class="p-1 shrink-0">
      <div class="box flex flex-row justify-between  px-4 py-1 items-center text-sm bottom mt-auto">
        <span class="py-2"> &copy; {{ date.getFullYear() }} LordLichi, All rights reserved.</span>
        <img src="/waterMark.webp" alt="" class="w-10 opacity-75">
      </div>
    </footer>
  </div>
</template>
