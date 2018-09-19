<!-- Comment: 

This gets servet when the quiz route is called 

  Like in the Theroy vue, we can have static HTML content here, if you want to serve a static image you could add
    <img alt="Vue logo" src="../assets/logo.png"> 
    Images are stored in the ./assets folder 

  the HTML in the template tag is what is going to be rendered in App.vue 

-->

<template>
  <div class="quiz">
    <QuizComponent quizName="main Quiz" class="wuut"/>
  </div>
</template>

<!--   
      in the script below we import quizComponent and make it availible to the current view
      worth to note that @ is an alias to /src
-->

<script>
import QuizComponent from '@/components/QuizComponent.vue'

export default {
  name: 'quiz',
  components: {
    QuizComponent
  }
}
</script>
