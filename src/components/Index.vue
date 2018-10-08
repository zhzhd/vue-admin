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
  .continer-inner {
    padding: 20px 50px;
    background-color: #f5f5f5;
  }
</style>
