import Vue from 'vue'
import App from './index'
import "../../../static/weui.css"
const app = new Vue(App)
app.$mount()
export default{
	config:{
		"navigationBarTitleText":"趣闻"
	}
}