<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>框架</el-breadcrumb-item>
        <el-breadcrumb-item>Spring</el-breadcrumb-item>
      </el-breadcrumb>
      <Divider />
      <div v-for="o in 15" :key="o">
        <article-item></article-item>
        <Divider />
      </div>
      <div class="pager">
        <el-pagination background
                       :page-size="100"
                       layout="prev, pager, next, jumper"
                       :total="1000">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
  import ArticleItem from './ArticleItem.vue'

  export default {
    name: 'article-list',
    components: {
      ArticleItem
    },
    data() {
      return {}
    }
  }
</script>

<style>
  .pager {

  }
</style>
