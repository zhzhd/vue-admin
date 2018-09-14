<template>
    <div class="head-image">
        <img :src="styleBg">
    </div>
</template>
<style lang="less" scoped>
    .head-image{
        text-align:center;
        img {
            width: 104px;
            height: 104px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
</style>

<script>
const defaultHead = require('../../../assets/images/default-head.png');
    export default {
        name: 'HeadImage',
        props: {
            headImageUrl: String,
            required: true
        },
        created() {
            
        },
        data () {
            return {
                styleBg: this.headImageUrl ? this.headImageUrl : `${defaultHead}`,
                bg: {
                    'background-image': 'url(' + this.styleBg + ')'
                }
            }
        },
        methods: {
            
        }
    }
</script>