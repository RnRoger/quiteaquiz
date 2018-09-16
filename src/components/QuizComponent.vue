<template>
  <div class="quiz__component">
    <h1> Title of the quiz: {{ quizName }}</h1>

    <div class="quiz__questions">
      <div class="quiz__question"
           v-for="question in questions"
           :key="question.id"> 
          <h3> {{ question.title}} </h3>
          <p> {{ question.question }} </p>
          <div class="question__answers">
            <div class="question__answer"
              v-for="answer in question.answers"
              :key="answer.id">
            <input type="radio" :id="question.id +'_'+ answer.id" 
                   :name="question.id" :value="answer.id" checked 
                   v-model="question.answerSelected" />
            <label :for="question.id +'_'+ answer.id"> {{ answer.text }} </label>
            </div>
            <span>Picked: {{ question.answerSelected }}</span>
          </div>
      </div>
    </div>

    <button type="button" v-on:click="calculateScore"> submit </button>

   <span> score: {{ totalScore }} / {{ questions.length *10 }} </span> 


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
        question: "chose a number (correct answer is one)",
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
        question: "chose a number (correct answer is three)",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>