<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ArticleList from "./views/ArticleList.vue"
import RightNav from "./components/RightNav.vue"

export default {
  name: 'app',
  components: {
    RightNav,
    ArticleList,
    Header,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-width: 1140px;
}
</style>
