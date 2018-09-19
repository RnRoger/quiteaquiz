<!-- Comment: 

This is the root of the application, you can think of it as the base template page
containing the stuff that will appear in every page of the application 
Like the Navigation

the tag "<router-view/>" will be replaced by the view that matches the current route
(you can see in the nav there is two router link, so we currently have two routes
Quiz which is the root /  and theory ) the content of those views can be found in ./src/views/ViewName.vue

The routes are defined in ./src/router.js,
it is not actively fetching anything of any Backend, It is just changing the application state

-->

<template>
  <div id="app" class="grid__container grid__container--mainContainer">
    <div class="nav">
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/theory">Theory</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">

/* --- variables --- */

  /* Font */
$font-stack:    'Avenir', Helvetica, Arial, sans-serif;

  /* Colors */
$color-snow: #ffffff;  
$color-light-blue: #5a748d;
$color-dark-blue: #1c3044;

 /* Measures */
$max-component-width: 900px; 

$spacing-Xsmall: 5px;
$spacing-small: 10px;
$spacing-medium: 25px;

$default-border-radius: 3px;
$round-border-radius: 50%;



/* --- Main APP --- */

  /* Reset */
html, 
body {
  padding: 0;
  margin: 0;
}

  /* Navigation */
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $color-light-blue;
    &.router-link-exact-active {
      color: $color-dark-blue;
    }
  }
}

  /* Text */

h1, h2, h3, h4, h5, h6 {
  color: $color-dark-blue;
}

  /* Layout */

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-light-blue;
}


.grid__container {
  &--mainContainer {
    max-width: $max-component-width;
    margin: 0 auto;
  }
}

  /* Quiz */

.quiz {
  &__questionContainer {

    max-width: 550px;
    margin: 0 auto $spacing-medium auto;

    background: rgba($color-snow, 0.8);
    box-shadow: -2px -2px 3px rgba($color-dark-blue, 0.2), 2px 2px 2px rgba($color-light-blue, 0.3);
    border-radius: $default-border-radius;
    border: 1px solid $color-dark-blue;
  }
}

.question {

  &__header {
    padding: $spacing-small;
  }

  &__title {
    margin: 0;
  }

  &__statement {
    margin-top: $spacing-small;
    text-align: left;
  }

  &__answer {
    display: flex;
    text-align: left;
    font-size: 20px;
    border-top: 1px solid $color-dark-blue;

    /* questions input */
    &__input[type=radio] {
      display: none;  

      /* style the label, not the input*/   
      + label {
        cursor: pointer;
        background: lighten($color-dark-blue, 75%);
        width: 100%;
        padding: $spacing-small;
        &:before {
          content: ' ';
          display: inline-block;
          width: 25px;
          height: 25px;
          margin-right:5px;
          background: $color-snow;
          border: 1px solid lighten($color-dark-blue, 60%);
          border-radius: $round-border-radius;
          vertical-align: bottom;
        }
      }

      /* radio is checked */
      &:checked + label {
        background: $color-dark-blue;

        color: $color-snow;
        &:before {
          content: ' ';
          background: lighten($color-dark-blue, 10%);
          box-shadow: 1px 0 1px rgba($color-snow, 1) inset;

          border: 1px solid $color-snow;

        }
      }
     
    }
  }
}


</style>
