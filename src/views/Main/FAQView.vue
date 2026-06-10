<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const content = ref('')

onMounted(async () => {
    const res = await fetch('https://gist.githubusercontent.com/lordlichi2006/436cb09654abbca8da2894b82bfef144/raw/631fd2c06470f3ef097e6a5d94ac8d332bc891e6/faq.md')
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