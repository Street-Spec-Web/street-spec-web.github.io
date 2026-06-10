<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const content = ref('')

onMounted(async () => {
    const res = await fetch('https://raw.githubusercontent.com/Street-Spec-Web/data/refs/heads/main/faq.md')
    const text = await res.text()
    content.value = marked(text)
})
</script>

<template>
    <div class="h-full flex flex-col px-2 pb-1 pt-2">

        <h1 class="flex justify-center">Frequently Asked Questions</h1>
        <div class="overflow-y-scroll overflow-x-hidden h-full border-y border-border px-10">


            <div v-html="content" class="markdown"/>


        </div>


    </div>
</template>