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
  <div id="app">
    <div id="nav">
      <router-link to="/">Quiz</router-link> |
      <router-link to="/theory">Theory</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
