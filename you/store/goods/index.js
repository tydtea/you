import request from "../../utils/request.js";
import mutationsType from "./mutationsType.js";
const state = {
	cateActiveId:1005000,
	cateList:[],
	// 商品导航
	kingKongList:[],
	// 首页商品列表
	categoryModule:[]
}
const mutations = {
	// 修改滑动商品导航
	[mutationsType.CHANGE_CATE_LIST](state,data){
		state.cateList = data;
	},
	// 更改cateActiveId
	[mutationsType.CAHANGE_CATE_ACTIVE_ID](state,id){
		state.cateActiveId = id;
	},
	[mutationsType.CHANGE_KINGKONG_LIST](state,data){
		state.kingKongList = data;
	},
	[mutationsType.CAHNGE_CATEGORY_MODDULE](state,data){
		state.categoryModule = data;
	}
	
}
const actions = {
	async getCateList({commit}){
		const cateList = await request.get("/cateList");
		commit(mutationsType.CHANGE_CATE_LIST,cateList);
	},
	async getKingKongList({commit}){
		const kingKongList = await request.get("/kingKongList");
		commit(mutationsType.CHANGE_KINGKONG_LIST,kingKongList);
	},
	async getCategoryModule({commit}){
		const categoryModule = await request.get("/categoryModule");
		commit(mutationsType.CAHNGE_CATEGORY_MODDULE,categoryModule);
	}
}

export default {
	state,
	mutations,
	actions
}