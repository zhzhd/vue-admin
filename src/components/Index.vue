<template>

    <div class="container">
      <div class="slider">
        <slider-bar></slider-bar>
      </div>
      <Header></Header>
      <div class="continer-inner" ref="continer">
        <router-view></router-view>
      </div>
      <Footer :footerTop="footerTop"></Footer>
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
      headerHeight: 0,
      innerDomHeight: 0,
      footerTop: 0
    }
  },
  created () {

  },

  methods: {

  },
  mounted () {
      let _header = document.querySelector('#header');
      let headerHeight = parseInt(getComputedStyle(_header)['height']);
      let _innerH = parseInt(getComputedStyle(this.$refs.continer)['height']);
      let innerDomHeight = window.innerHeight;
      let footerTop = innerDomHeight - (headerHeight + _innerH + 5 + 100 );
      this.innerDomHeight = innerDomHeight;
      this.footerTop = footerTop;
      this.headerHeight = headerHeight;  
       
  },
  updated () {
    let h = parseInt(getComputedStyle(this.$refs.continer)['height']);
    this.footerTop = this.innerDomHeight - (this.headerHeight + h + 105);
  },
  computed: {
    
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
