import { defineStore } from 'pinia'
import { ref } from 'vue'

// store
export const getCarList = defineStore('carList', () => {
  const carList = ref(null)

  const ready = fetch('https://raw.githubusercontent.com/Street-Spec-Web/data/refs/heads/main/carList.json')
    .then(res => res.json())
    .then(data => carList.value = data)

  return { carList, ready }
})
