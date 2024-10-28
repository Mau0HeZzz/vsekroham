import { defineStore } from "pinia";

const {
  colorScheme
} = window.Telegram.WebApp

export const useGlobalStore = defineStore('globalStore',{
  state: () => ({
    colorScheme,
    isLoading: true,
    
  }),
})