<template>
    <aside ref="aside">
        <head-image :headImageUrl="headImageUrl"></head-image>
        <search-ipt style="margin: 15px 20px;"></search-ipt>
        <Menu :theme="theme" :accordion="accordion" @on-select="handleSelect"  @on-open-change="handleSubmenu" :active-name="activeName" :open-names="openedNames">
            <template v-for="(item, index) in sliderItems">
                <template v-if="!item.childMenuList">
                    <MenuItem :name="item.name">
                        <Icon :type="item.icon"/>
                        <!-- <common-icon :type="item.icon" /> -->
                        {{ item.name}}
                    </MenuItem>
                </template>
                <template v-else>
                    <Submenu :key="index" :name="item.name">
                        <template slot="title">
                            <Icon :type="item.icon" />
                            {{ item.name }}
                        </template>
                        <MenuItem v-for="(child, count) in item.childMenuList" :key="count" :name="item.name + '-' + child.name">{{ child.name }}</MenuItem>
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
                openedNames: [],
                closeSubMenu: '',
            }
        },
        methods: {
            initData () {
                this.sliderItems = this.sliderMenuList;
                this.activeName = this.sliderItems[0].name;
            },
            getWindowInnerHeight () {
                let height = window.innerHeight;
                this.asideHeight = height + 'px';
                this.$refs.aside.style.height = this.asideHeight;
            },
            handleSelect (name) {
                if (name.indexOf('-') > 0) return;
                console.log(name);
            },
            handleSubmenu (name) {
                console.log( name );
                
            },
            getOpendMenuDom () {
                var dom = document.querySelector('.ivu-menu-opened');
                return dom;
            }
        },
        watch: {
            activeName (name) {

            },
            // closeSubMenu () {
            //     this.$nextTick( () => {
            //         this.$refs.aside.updateOpened();
            //     })
            // }
        },
        mounted() {
            this.getWindowInnerHeight();
        },
        computed: {
            ...mapState(['sliderMenuList'])
        }
    }
</script>