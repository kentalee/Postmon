import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/style/reset.scss';
import './assets/fonts/iconfont/iconfont.css';



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(Antd).use(VueAxios, axios).mount('#app')
