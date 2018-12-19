<template>
<div>
<el-row :gutter="20" v-for="o in 4" :key="o" style="margin-top: 8px;">
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <a href="">文章标题</a>
                </div>
                <div class="text item">
                    副标题副标题副标题副标题副标题副标题
                </div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <a href="">文章标题</a>
                </div>
                <div class="text item">
                    副标题副标题副标题副标题副标题副标题
                </div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <a href="">文章标题</a>
                </div>
                <div class="text item">
                    副标题副标题副标题副标题副标题副标题
                </div>
            </el-card>
        </el-col>
    </el-row>
    <div class="pager">
        <el-pagination background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
        </el-pagination>
    </div>
</div>
</template>

<style>
.pager {
    margin-top: 10px;
    float: right;
}
</style>

