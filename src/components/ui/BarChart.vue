<script setup>
const props = defineProps(['data', 'label','default'])
const emit = defineEmits(['selectedValue'])

import {
  Chart as ChartJS, Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { ref, onMounted } from 'vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Read  CSS variables
const getCssVar = (name) => {
  const el = document.querySelector('[theme]') ?? document.documentElement
  return getComputedStyle(el).getPropertyValue(name).trim()
}
const cData = ref(null)

onMounted(() => {
  emit('selectedValue', props.default)
  const ctx = document.createElement('canvas').getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, window.screen.width/1.5, 0)
  gradient.addColorStop(0, getCssVar('--color-hover1'))
  gradient.addColorStop(1, getCssVar('--color-hover2'))

  cData.value = {
  
  
    labels: Object.keys(props.data),
    datasets: [{
      label: props.label,
      backgroundColor: gradient,
      borderColor: getCssVar('--color-accent'),
      borderWidth: 1.5,
      borderRadius: { topLeft: 16, topRight: 16 },
      borderSkipped: false, 
      data: Object.values(props.data)
    }]
  }
})

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // hides the label
  },
  onClick: (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index
      const value = cData.value.labels[index]
      emit('selectedValue', value)
    }
  },
  scales: {
    x: {
      ticks: {
        color: getCssVar('--color-text'),
        font: { family: 'Space Mono',size: 13 }
        
      },
      grid: { display: false },
      border: {color: getCssVar('--color-text'),}

    },
    y: {
      ticks: {
        color: getCssVar('--color-text'),
        font: { family: 'Space Mono',size: 13 },
        callback: (val) => Math.round(val)

      },
      grid: { color:getCssVar('--color-border-semi') },
      border: {color: getCssVar('--color-text'),}
    }
  }
}
</script>

<template>
  <Bar v-if="cData" :data="cData" :options="options" />
</template>