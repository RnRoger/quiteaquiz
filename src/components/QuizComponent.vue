<template>
  <div class="quiz__component">
    <h1> Title of the quiz: {{ quizName }}</h1>
   <span> score: {{ totalScore }} / {{ questions.length *10 }} </span> 

    <div class="quiz__questions">
      <div class="quiz__questionContainer"
           v-for="question in questions"
           :key="question.id"> 
            <div class="question__header">
              <h2 class="question__title"> {{ question.title}} </h2>
              <span class="question__picked">you picked answer: {{ question.answerSelected }}</span>
              <div class="question__statement"> {{ question.question }} </div>
            </div>
            <div class="question__answers">
              <div class="question__answer"
                v-for="answer in question.answers"
                :key="answer.id">
              <input  class="question__answer__input"
                      type="radio" 
                      :id="question.id +'_'+ answer.id" 
                      :name="question.id" 
                      :value="answer.id" checked 
                      v-model="question.answerSelected" />
              <label :for="question.id +'_'+ answer.id"> <span> {{ answer.text }} </span> </label>
              </div>
          </div>
      </div>
    </div>

    <button type="button" v-on:click="calculateScore"> submit </button>

  </div>
</template>

<!-- From this view file we export a QuizComponent, under the props object we can have all the properties of a quiz 
  that are passed via attribute, we use data fot the properties that are control directly form the quizComponent
  (we might not need props even for the quizName but I'll leave that here for now as an example)
. -->

<script>
export default {
  name: 'QuizComponent',
  props: {
    quizName: String,
  },
  methods: {
    calculateScore: function(e) {
      var score = 0

      this.questions.forEach(element => {
        if (element.answerSelected === element.correctAnswer) {
          score += 10
        }
      })
       this.totalScore = score
    }
  },
  data: function () {
    return {
    questions: [
      {
        id:1,
        title: "this is question 1",
        answered: false,
        question: "choose a number (correct answer is one)",
        answers: [
          {
            id: 1,
            text: "one"
          },
          {
            id: 2,
            text: "two"
          },
          {
            id: 3,
            text: "three"
          },
          {
            id: 4,
            text: "four"
          },
        ],
        answerSelected: 0,
        correctAnswer: 1
      },
      {
        id:2,
        title: "this is question 2",
        answered: false,
        question: "choose a number (correct answer is three)",
        answers: [
          {
            id: 1,
            text: "one"
          },
          {
            id: 2,
            text: "two"
          },
          {
            id: 3,
            text: "three"
          },
          {
            id: 4,
            text: "four"
          },
        ],
        answerSelected: 0,
        correctAnswer: 3
      }
    ],
    totalScore: 0
    }
  }
}
</script>