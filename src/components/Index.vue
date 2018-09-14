<template>
  <div id="container">
    <slider-bar></slider-bar>
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

</style>
