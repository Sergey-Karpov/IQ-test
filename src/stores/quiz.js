import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answerData: []
  }),

  actions: {
    addAnswer(answer) {
      this.answerData.push(answer)
    }
  }
})
