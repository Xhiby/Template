import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      userName: ''
    }
  }),
  getters: {
  },
  actions: {
  }
})
