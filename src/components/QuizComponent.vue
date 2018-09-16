<template>
  <div class="hello">
    <h1>  you viewing the quiz {{ quizName }}</h1>
  </div>
</template>

<!-- From this view file we export a QuizComponent, under the props object we can have all the properties of a quiz : name, questions current score and so on. -->

<script>
export default {
  name: 'QuizComponent',
  props: {
    quizName: String
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