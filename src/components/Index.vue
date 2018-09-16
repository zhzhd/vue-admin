<template>
  <div id="wrap">
    <div class="slider">
      <slider-bar></slider-bar>
    </div>
    <div class="container">
      <header>这是一个公共的头部，有退出和关闭左侧菜单的功能，还有考勤打卡的功能</header>
      <router-view></router-view>
      <footer>这是页面的脚</footer>
    </div>
  </div>
</template>


<script>
import SliderBar from './sidebar/SliderBar'
export default {
  name: 'Index',
  components: {
    SliderBar
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    // console.log(this.$store.state.sliderMenuList)
   
    // this.init();
  },

  methods: {
    // ...mapState(['sliderMenuList']),
    init () {
      // console.log(this.sliderMenuList)
    },
  },
  computed: {
    // ...mapState(['sliderMenuList'])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slider {
    position: absolute;
    top: 0;
    left: 0;
  }
  .container {
    padding-left: 240px;
  }
  header, footer {
    text-align: center;
    line-height: 40px;
    height: 40px;
    background-color: aquamarine;
    color: red;
    font-weight: 700;
    font-size: 24px;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 50%;

  }
</style>
