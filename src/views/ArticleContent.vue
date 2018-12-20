<template>
<div>
  <el-card>
    <div class="article">
      <h2>将进酒</h2>
      <div class="info">
        <i class="el-icon-time"></i> <span>2018-12-20 16:01:43</span>
        <i class="el-icon-view view-count"></i> <span>100</span>
      </div>
      <Divider/>
      <div>
        <p>君不见，黄河之水天上来，奔流到海不复回。</p>
        <p>君不见，高堂明镜悲白发，朝如青丝暮成雪。</p>
        <p>人生得意须尽欢，莫使金樽空对月。</p>
        <p>天生我材必有用，千金散尽还复来。</p>
        <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
        <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
        <p>与君歌一曲，请君为我倾耳听。</p>
        <p>钟鼓馔玉不足贵，但愿长醉不复醒。</p>
        <p>古来圣贤皆寂寞，惟有饮者留其名。</p>
        <p>陈王昔时宴平乐，斗酒十千恣欢谑。</p>
        <p>主人何为言少钱，径须沽取对君酌。</p>
        <p>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</p>
      </div>
    </div>
  </el-card>
</div>
</template>

<script>
    export default {
        name: 'article-content',
        data() {
          return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .article .info > i {
    margin-right: 5px;
  }
  .article .info > span {
    margin-right: 30px;
  }

</style>
