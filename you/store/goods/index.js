import request from "../../utils/request.js";
import mutationsType from "./mutationsType.js";
const state = {
	cateActiveId:0,
	cateList:[]
}
const mutations = {
	// 修改滑动商品导航
	[mutationsType.CHANGE_CATE_LIST](state,data){
		state.cateList = data;
	},
	// 更改cateActiveId
	[mutationsType.CAHANGE_CATE_ACTIVE_ID](state,id){
		state.cateActiveId = id;
	}
	
}
const actions = {
	async getCateList({commit}){
		const cateList = await request.get("/cateList");
		commit(mutationsType.CHANGE_CATE_LIST,cateList);
	}
}

export default {
	state,
	mutations,
	actions
}