<script setup>
    const date = new Date();
</script>
<template>
    <footer class="p-1 shrink-0">
      <div class="box flex flex-row justify-between  px-4 py-1 items-center text-sm bottom mt-auto">
        <span class="py-2">&copy; {{ date.getFullYear() }} Lichi & osoi.dev</span> <img src="@/assets/icons/waterMark.webp" alt=""
          class="w-10 opacity-75">
      </div>
    </footer>
</template>