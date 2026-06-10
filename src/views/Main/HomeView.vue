<script setup>
import SocialsElement from '@/components/ui/SocialsElement.vue';



</script>
<template>
  <div class="flex justify-between flex-1 flex-col gap-2 xl:gap-0 xl:flex-row xl:h-full p-5">
    <section class="flex flex-col mr-4 xl:w-[75vw]">


    </section>
    <section class="xl:overflow-hidden xl:h-full box pb-0 px-2 gap-0 mt-10 xl:mt-0 xl:w-[20vw] xl:shrink-0">
      <h1 class="border-0  mb-0 text-center">Socials</h1>
      <div class="overflow-y-auto xl:h-full  max-h-[80vh] xl:max-h-none w-full content-start border-t-2 border-border">
        <ul>
          <li>
            <SocialsElement to="https://www.youtube.com/@osoi_dev" icon="youtube" name="youtube"/>
          </li>
          <li>
            <SocialsElement to="https://www.instagram.com/osoi.dev/" icon="instagram" name="instagram"/>
          </li>
          <li>
            <SocialsElement to="https://www.tiktok.com/@osoi.dev" icon="tiktok" name="tiktok"/>
          </li>
          <li>
            <SocialsElement to="https://discord.gg/AB8spbehJ" icon="discord" name="discord"/>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>