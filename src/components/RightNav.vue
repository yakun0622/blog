<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="right-nav">
      <Avatar size="large" src="https://avatars1.githubusercontent.com/u/11678144?s=460&v=4"/>
      <h4 class="name">Yakun</h4>
      <Divider/>
      <el-row>
        <el-col :span="8">
          <a href="https://github.com/yakun0622" target="_blank">
            <Icon type="logo-github" :size="24" color="#24292d" />
          </a>
        </el-col>
        <el-col :span="8">
          <Icon type="logo-twitter" :size="24" color="#2aa3f0"/>
        </el-col>
        <el-col :span="8">
          <Icon type="logo-facebook" :size="24" color="#3c5a96" />
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'right-nav',
    data() {
      return {
        currentDate: new Date()
      }
    }
  }
</script>

<style>
  .right-nav{
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .name {
    text-align: center;
  }
</style>
