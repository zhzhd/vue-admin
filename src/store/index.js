import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
    login: false,
    imgPath: null,
    userInfo: null,
    isAdmin: false,
    commodityStatus: [
        {value: 0, label: '待发布'},
        {value: 1, label: '已发布'},
        {value: 2, label: '已下架'}
    ],
    sliderMenuList: [
        {
            name: '企业信息',
            url: 'home',
            icon: 'ios-home'
        },
        {
            name: '用户管理',
            url: 'users',
            icon: 'md-contacts'

        },
        {
            name: '产品管理',
            url: 'product',
            icon: 'ios-albums',
            childMenuList: [
                {
                    name: '待发布',
                    url: 'pengding'
                },
                {
                    name: '已发布',
                    url: 'published'
                },
                {
                    name: '已下架',
                    url: 'removed'
                }
            ]
        },
        {
            name: '考勤统计',
            icon: 'ios-clock',
            url: 'attendance',
            childMenuList: [
                {
                    name: '考勤异常',
                    url: 'exception'
                },
                {
                    name: '休假申请',
                    url: 'holiday'                                 //休假类型，时间等。。。。
                }
            ]
        },
        {
            name: '监督管理',
            url: 'supervision',
            icon: 'ios-alert',
            childMenuList: [
                {
                    name: '违规举报',
                    url: 'report'
                },
                {
                    name: '进度查询',
                    url: 'progress'
                },
                {
                    name: '违规人员管理',
                    url: 'violators'
                },
                {
                    name: '违规记录查询',
                    url: 'violation'
                }
            ]
        },
        {
            name: '经营状况',                     //管理权限
            url: 'operation',
            icon: 'ios-stats'
        },
        {
            name: '意见反馈',
            url: 'feedback',
            icon: 'ios-bulb'
        },
        {
            name: '帮助中心',
            url: 'help',
            icon: 'ios-help-circle'
        },
        {
            name: '系统管理',
            url: 'stystem', 
            icon: 'ios-cog',                    //管理权限
            childMenuList: [
                {
                    name: '菜单维护',
                    url: 'edtion'
                },
                {
                    name: '发布产品',
                    url: 'release'
                },
                {
                    name: '操作日志',
                    url: 'operationlog'
                }
            ]
        },
    ],
}


export default new Vuex.Store({
    state,
    mutations
})