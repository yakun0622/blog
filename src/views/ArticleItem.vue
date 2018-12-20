<template>
  <div class="article">
    <div>
      <router-link class="title" to="/article">文章标题文章标题文章标题文章标题</router-link>
      <!--<a href="" class="title">文章标题文章标题文章标题文章标题</a>-->
    </div>
    <div class="info">
      <i class="el-icon-time"></i> <span>2018-12-20 16:01:43</span>
      <i class="el-icon-view view-count"></i> <span>100</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article-item'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .article {
    float: left;
  }

  .article .title {
    font-size: 16px;
  }
  .article .info {
    float: left;
  }
  .article .info > i {
    margin-right: 5px;
  }
  .article .info > span {
    margin-right: 30px;
  }
</style>
