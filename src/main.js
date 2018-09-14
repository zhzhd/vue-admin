// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Form, FormItem, Input, Radio, RadioGroup, Checkbox, CheckboxGroup, Message, Layout, Sider, Menu, Submenu, MenuItem, Icon} from 'iview'
import 'iview/dist/styles/iview.css'
import './theme/index.less'
import store from '@/store'
Vue.component('Button', Button)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Radio', Radio)
Vue.component('RadioGroup', RadioGroup)
Vue.component('CheckBox', Checkbox)
Vue.component('CheckBoxGroup', CheckboxGroup)
Vue.component('Message', Message)
Vue.component('Layout', Layout)
Vue.component('Sider', Sider)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.prototype.$Message = Message
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
