import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication',{
  actions: {
    login() {
      console.log('useAuthenticationStore login()')
    },
  },
})
