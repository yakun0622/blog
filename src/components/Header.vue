<template>
<el-row type='flex' align='middle'>
    <el-col :span="2" :offset="1">
        <h3>个人博客</h3>
    </el-col>
    <el-col :span="4" :offset="11">
      <el-input placeholder="" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-col>
    <el-col :span="5">
    <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">JAVA</el-menu-item>
        <el-submenu index="2">
            <template slot="title">框架</template>
            <el-menu-item index="2-1">Spring</el-menu-item>
            <el-menu-item index="2-2">Mybatis</el-menu-item>
            <el-menu-item index="2-3">Spring Cloud</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">中间件</template>
            <el-menu-item index="3-1">Dubbo</el-menu-item>
            <el-menu-item index="3-2">Mycat</el-menu-item>
            <el-menu-item index="3-3">Zookeeper</el-menu-item>
        </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.logo {
  position: relative;
}
.header-menu {
  position: relative;
  float: right;
}
.search {
  width: 30px;
}
</style>
