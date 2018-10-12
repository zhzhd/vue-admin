<template>
    <header id="header">
        <section class="tips ">
            <Badge :count="13" type="success" :show-zero="false" class-name="t-icon" :offset="offset" :overflow-count="overflowCount">
                <router-link to="/notice/private" title="我的私信"><Icon type="ios-mail-outline" color="#fff" size="28" class="tips-icon"/></router-link>
            </Badge>
            <Badge :count="12" type="warning" :show-zero="false" class-name="t-icon" :offset="offset" :overflow-count="overflowCount">
                <router-link to="/notice/bulletin" title="企业通知"><Icon type="ios-notifications" color="#fff" size="28" style="margin-left: 25px;" class="tips-icon"/></router-link>
            </Badge>
            <span style="margin: 0 25px;">
                <Icon type="ios-settings-outline" size="28" color="#fff" class="tips-icon" title="设置"/>
            </span>
            <span>
                <Icon type="md-log-out" size="28" color="#fff" class="tips-icon" title="退出"/>
            </span>
        </section>
        
    </header>
</template>
<style lang="less">
    #header {
        height: 50px;
        line-height: 50px;
        background-color: #3C8DBC;
        box-shadow: 0 0 6px 6px rgba(211, 211, 211, .4);
        margin-bottom: 5px;
        .tips {
            margin-left: 78%;
            float: left;
            .t-icon {
                font-size: 12px;
                padding: 0 3px !important;
                height: 18px;
                line-height: 14px;
            }
            .tips-icon {
                cursor: pointer;
            }
        }
    }
</style>
<script>
const defaultHead = require('../../assets/images/default-head.png');
    export default {
        data () {
            return {
                offset: [15, 0],
                overflowCount: '99',
                editName: "",
                bg: `${defaultHead}`,
                editList: [
                    {
                        value: '设置',
                        icon: '',
                        url: ''    
                    },
                    {
                        value: '登出',
                        icon: '',
                        url: ''
                    }
                ]
            }
        }
    }
</script>