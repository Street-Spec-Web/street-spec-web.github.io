<script setup>
import { RouterView } from 'vue-router'

import FooterLayout from '@/components/layout/FooterLayout.vue';
import HeaderLayout from '@/components/layout/HeaderLayout.vue';
import SocialsElement from '@/components/ui/SocialsElement.vue';

</script>

<template>
  <div class="flex flex-col h-screen ">
    <HeaderLayout />
    <main class="flex flex-1 min-h-0 lg:overflow-hidden overflow-y-auto relative flex-col lg:flex-row justify-between">
      <section class="w-full  lg:h-full lg:min-h-0">

        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </section>
      <aside class="mx-1 box  px-2 gap-0  mt-0">
        <h1 class="border-0  mb-0 text-center">Socials</h1>
        <div
          class="overflow-y-auto lg:h-full  max-h-[80vh] lg:max-h-none w-full content-start border-t-2 border-border">
          <ul>
            <li>
              <SocialsElement to="https://www.youtube.com/@osoi_dev" icon="youtube" name="youtube" />
            </li>
            <li>
              <SocialsElement to="https://www.instagram.com/osoi.dev/" icon="instagram" name="instagram" />
            </li>
            <li>
              <SocialsElement to="https://www.tiktok.com/@osoi.dev" icon="tiktok" name="tiktok" />
            </li>
            <li>
              <SocialsElement to="https://discord.gg/AB8spbehJ" icon="discord" name="discord" />
            </li>
          </ul>
        </div>
      </aside>
    </main>
    <FooterLayout />
  </div>
</template>
