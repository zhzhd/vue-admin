<template>
    <footer :style="{top: footerTop + 'px'}" id="footer" ref="footer">
        <template v-for="(item, index) in info">
            <router-link :to="item.url">{{ item.value }}</router-link>
            <Divider type="vertical" v-if="index != info.length - 1"/>
        </template>
    </footer>
</template>
<style lang="less">
    #footer {
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px #cad5eb;
        background-color: #3C8DBC;
        position: relative;
        a {
            color: #34538b;
            cursor: pointer; 
        }
    }
</style>
<script>
    export default {
        props: {
            footerTop: {
                type: Number
            }
        },
        data () {
            return {
                info: [
                    {
                        value: 'Test123',
                        url: 'javascript:;'
                    },
                    {
                        value: 'Link123',
                        url: 'javascript:;'
                    },
                    {
                        value: 'Test321',
                        url: 'javascript:;'
                    }
                ]
            }
        }
    }
</script>
