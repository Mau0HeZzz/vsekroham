import { defineStore } from "pinia";

const {
  colorScheme
} = window.Telegram.WebApp

export const useGlobalStore = defineStore('globalStore',{
  state: () => ({
    tg: window.Telegram.WebApp,
    colorScheme,
    isLoading: true,

  }),
})