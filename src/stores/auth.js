import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthed = ref(true)
  const accountType = ref('premium')

  function login () {
    isAuthed.value = true
  }

  return {
    isAuthed,
    accountType,
    login
  }
})
