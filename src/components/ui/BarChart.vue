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

// Read your @theme CSS variables
const getCssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

const cData = ref(null)

onMounted(() => {
  emit('selectedValue', props.default)
  const ctx = document.createElement('canvas').getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 1920, 0)
  gradient.addColorStop(0, getCssVar('--color-box1'))   // your @theme var
  gradient.addColorStop(1, getCssVar('--color-box2')) // your @theme var

  cData.value = {
  
  
    labels: Object.keys(props.data),
    datasets: [{
      label: props.label,
      backgroundColor: gradient,
      borderColor: getCssVar('--color-text'),
      borderWidth: 1.5,
      borderRadius: { topLeft: 16, topRight: 16 },
      borderSkipped: false,  // round all corners including bottom
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