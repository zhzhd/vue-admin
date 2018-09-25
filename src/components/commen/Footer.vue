<template>
    <footer :style="{'top': footerTop}" id="footer" ref="footer">
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
        data () {
            return {
                footerTop: '',
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
        },
        created () {

        },
        methods: {

        },
        mounted () {
            let _inner = document.querySelector('.continer-inner');
            let _header = document.querySelector('#header');
            let _headerH = getComputedStyle(_inner)['height'];
            let _innerH = getComputedStyle(_header)['height'];
            let height = window.innerHeight;
            let footerTop = parseInt(_headerH) + parseInt(_innerH) + 5 + 100;
            console.log(height - footerTop)
            _inner.style.minHeight = height - footerTop + 'px';
        },
        computed: {
            
        }
    }
</script>
