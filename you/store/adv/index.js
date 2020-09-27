import request from "../../utils/request.js";
import mutationsType from "./mutationsType.js";
export default {
	state:{
		// 首页显示的轮播图
		focusList:[],
		// 首页广告站点说明
		policyDescList:[]
	},
	mutations:{
		// 同步方法
		[mutationsType.CHANGE_FOUCS_LIST](state,data){
			state.focusList = data;
		},
		[mutationsType.CAHNGE_POLICY_DESC_LIST](state,data){
			state.policyDescList = data;
		}
	},
	actions:{
		// 异步方法
		async getFocusList({commit}){
			const focusList = await request.get("/focusList");
			commit(mutationsType.CHANGE_FOUCS_LIST,focusList);
		},
		async getPolicyDescList({commit}){
			const policyDescList =  await request.get("/policyDescList");
			commit(mutationsType.CAHNGE_POLICY_DESC_LIST,policyDescList);
		}
	}
}