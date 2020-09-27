import Vue from "vue";
import Vuex from "vuex";
// 引入广告模块
import adv from "./adv";
// 引入商品模块
import goods from "./goods"
Vue.use(Vuex);// 使用  install(Vue)
// 导出
export default new Vuex.Store({
	// 公共数据。
	state:{},
	mutations:{},
	getters:{},
	actions:{},
	modules:{
		adv,
		goods
	}
})