<template>
  <div>
    <Header/>
    <div class="container">
      <el-row :gutter="10" style="margin-top: 10px">
        <el-col :span="20">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-col>
        <el-col :span="4">
          <right-nav></right-nav>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
  import Header from "../components/Header.vue";
  import RightNav from "../components/RightNav.vue";

  export default {
    components: {
      Header,
      RightNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
