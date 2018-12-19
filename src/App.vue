<template>
  <div id="app" class="is-component">
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-scrollbar style="padding-top: 60px;">
        <el-container class="page-container page-component">
          <ArticleList />
          <!-- <el-aside width="240px">
            <el-scrollbar class="page-component__nav">
              <LeftNav />
            </el-scrollbar>
          </el-aside>
          <el-main>
              <el-scrollbar class="page-component__content">
              <p v-for="(item, index) in 200" :key="index">{{index}} 这里是一些文本。</p>
              </el-scrollbar>
          </el-main> -->
        </el-container>
      </el-scrollbar>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNav from './components/LeftNav.vue'
import ArticleList from './views/ArticleList.vue'

export default {
  name: 'app',
  components: {
    Header,
    LeftNav,
    ArticleList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

</style>
