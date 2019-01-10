import Vue from 'vue'
import App from './App'
import "../static/weui.css"
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default{
	config:{
	"pages": [
    "pages/index/main",
    "pages/logs/main",
    "^pages/news/main"],
	  "window": {
	    "backgroundTextStyle": "light",
	    "navigationBarBackgroundColor": "#fff",
	    "navigationBarTitleText": "趣闻",
	    "navigationBarTextStyle": "black"
	  }
	}
}
