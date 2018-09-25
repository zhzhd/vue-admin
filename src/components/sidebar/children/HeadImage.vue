<template>
    <div class="head-image" :style="'backgroundImage: url(' + styleBg + ')'">
        <p> {{ userName }} </p>
        <p :class="online ? 'online' : 'offline'" v-html="online ? '<i></i>online' : '<i></i>offline'"></p>
    </div>
</template>
<style lang="less" scoped>
    .head-image{
        height: 104px;
        color: #fff;
        background-size: 80px 80px;
        background-repeat: no-repeat;
        background-position: left center;
        padding-left: 90px;
        padding-top: 55px;
        p:last-child::before {
            content: "";
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 5px;
        }
        .online::before {
            background-color: green;
        }
        .offline::before {
            background-color: #999;
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
                userName: "用户名",
                online: true 
            }
        },
        methods: {
            
        }
    }
</script>