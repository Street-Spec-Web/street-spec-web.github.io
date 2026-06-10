<script setup>
import { RouterView } from 'vue-router'

import FooterLayout from '@/components/layout/FooterLayout.vue';
import HeaderDataLayout from '@/components/layout/HeaderDataLayout.vue';

</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderDataLayout />
    <main class="flex flex-1 min-h-0 xl:overflow-hidden overflow-y-auto relative">
      <Suspense>
        <RouterView v-slot="{ Component }">
          <Transition name="fade">
            <component :is="Component" />
          </Transition>
        </RouterView>
        <template #fallback>
          <div class="flex flex-1 items-center justify-center">
            Loading...
          </div>
        </template>
      </Suspense>
    </main>
    <FooterLayout />
  </div>
</template>
