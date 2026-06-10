<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const container = ref(null)

function onScroll() {
    scrolled.value = container.value.scrollTop > 75
}

onMounted(() => container.value.addEventListener('scroll', onScroll))
onUnmounted(() => container.value?.removeEventListener('scroll', onScroll))

</script>
<template>
    <div class="h-full flex flex-col px-2 pb-1">

        <div class="flex justify-center">
            <img src="@/assets/icons/streetSpec_full.webp" alt="Street Spec Main Logo"
                :class="['  duration-300 transition-all mb-3', scrolled ? 'w-[30%]' : 'w-[60%]']">
        </div>
        <div class="overflow-y-scroll overflow-x-hidden h-full border-y border-border px-2" ref="container">



            <p> Lorem<br><br>ipsum<br><br>dolor<br><br>sit<br><br>amet<br><br>consectetur<br><br>adipisicing<br><br>elit.<br><br>Blanditiis<br><br>ipsum<br><br>obcaecati<br><br>quos<br><br>possimus<br><br>nulla<br><br>dolorem,<br><br>veritatis<br><br>tempore<br><br>iusto.<br><br>Ad<br><br>perferendis<br><br>tempore<br><br>accusamus<br><br>placeat<br><br>nam<br><br>fuga<br><br>blanditiis<br><br>amet<br><br>porro?<br><br>Voluptates,<br><br>totam.
            </p>

        </div>


    </div>
</template>