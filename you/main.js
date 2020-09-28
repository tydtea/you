import Vue from 'vue'
import App from './App'
import request from "./utils/request.js";
Vue.config.productionTip = false;
// 引入store
import store from "./store";
import filters from "./filters";


// 方法一
// for(let key in filters){
// 	Vue.filter(key,filters[key])
// }

// 方法二
Vue.use(filters);

// Vue.filter("currency",v=>"￥"+v.toFixed(3));


// 将request对象放置在Vue实例的原型当中
Vue.prototype.$ajax = request;
// 使用插件。调用 request 当中的install属性，并将Vue作为第一个参数进行传递。
// Vue.use(request);

App.mpType = 'app';



const app = new Vue({
    ...App,
	store
})
app.$mount()
