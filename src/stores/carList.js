import { defineStore } from 'pinia'
import data from '@/assets/carList.json'

export const getCarList = defineStore('carList', () => {
  return { carList: data }
})