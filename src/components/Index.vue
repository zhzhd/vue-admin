<template>

    <div class="container">
      <div class="slider">
        <slider-bar></slider-bar>
      </div>
      <Header></Header>
      <div class="continer-inner">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
</template>


<script>
import Header from './commen/Header'
import Footer from './commen/Footer'
import SliderBar from './sidebar/SliderBar'
export default {
  name: 'Index',
  components: {
    Footer,
    Header,
    SliderBar
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {

  },

  methods: {

  },
  mounted () {
 
  },
  computed: {
    getFooterRelativeTop () {
      let height = window.innerHeight;
      let headerHeight = this.$refs.header.style.height;
      let innerHeight = this.$refs.inner.style.height;
      console.log(headerHeight)
      console.log(innerHeight)
                
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slider {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
