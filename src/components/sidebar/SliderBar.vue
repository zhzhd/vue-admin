<template>
    <aside ref="aside">
        <head-image :headImageUrl="headImageUrl"></head-image>
        <!-- <search-ipt style="margin: 15px 20px;"></search-ipt> -->
        <Menu ref="slider" :theme="theme" :accordion="accordion" @on-select="handleSelect"  @on-open-change="handleSubmenu" :active-name="activeName" :open-names="openNames">
            <template v-for="(item, index) in sliderItems">
                <template v-if="!item.childMenuList">
                    <MenuItem :name="item.url" :to="item.url">
                        <Icon :type="item.icon"/>
                        {{ item.name}}
                    </MenuItem>
                </template>
                <template v-else>
                    <Submenu :key="index" :name="item.url" :data-index="item.childMenuList.length">
                        <template slot="title">
                            <Icon :type="item.icon" />
                            {{ item.name }}
                        </template>
                        <MenuItem v-for="(child, count) in item.childMenuList" :key="count" :name="item.url + '/' + child.url" :to="item.url + '/' + child.url" >{{ child.name }}</MenuItem>
                    </Submenu>
                </template>
            </template>
        </Menu>
    </aside> 
</template>
<style lang="less">
aside{
    width: 240px;
    background-color: #515a6e;
}
</style>
<script>
import {mapState, mapMutations} from 'vuex'
import HeadImage from './children/HeadImage'
import SearchIpt from './children/SearchIpt'
    export default {
        name: 'SliderBar',
        components: {
            HeadImage,
            SearchIpt
        },
        created () {
            this.initData();
        },
        data () {
            return {
                headImageUrl: '',
                sliderItems: null,
                theme: 'dark',
                accordion: true,
                asideHeight: null,
                activeName: '',
                openNames: [],
                nameReg: /^[\/][a-zA-Z]*\/[a-zA-Z]/
            }
        },
        methods: {
            initData () {
                this.sliderItems = this.sliderMenuList;
                this.getOpendNamesByRoute();
            },
            getWindowInnerHeight () {
                let height = window.innerHeight;
                this.asideHeight = height + 'px';
                this.$refs.aside.style.minHeight = this.asideHeight;
            },
            handleSelect (name) {
                if(!this.nameReg.test(name)) {
                    this.$refs.slider.$children.map((item) => {
                        if (item.opened) {
                            this.openNames = [];
                            return item.opened = false;
                        }
                    })
                }
            },
            handleSubmenu (name) {
                let count = event.target.parentElement.getAttribute('data-index');
                let height = window.innerHeight;
                // if (name.length > 0) {
                //     this.asideHeight = (height + count * 49) + 'px';
                // } else {
                //     this.asideHeight = height + 'px';
                // }
            },
            getOpendNamesByRoute () {
                let len = this.$route.matched.length;
                if (this.$route.matched[1]) {
                    var _path = this.$route.matched[1].path;
                    this.activeName = _path;
                }
                if (len > 2) {
                    this.activeName = this.$route.matched[len - 1].path;
                    this.openNames.push(_path)
                } 
            }
        },
        watch: {
           
        },
        mounted() {
            this.getWindowInnerHeight();
            this.$nextTick(() => {
                this.$refs.slider.updateOpened();
                this.$refs.slider.updateActiveName();
                this.getWindowInnerHeight();
            })
        },
        computed: {
            ...mapState(['sliderMenuList']),
            
        }
    }
</script>