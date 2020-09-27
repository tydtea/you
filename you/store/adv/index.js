import request from "../../utils/request.js";
import mutationsType from "./mutationsType.js";
export default {
	state:{
		// 首页显示的轮播图
		focusList:[]
	},
	mutations:{
		// 同步方法
		[mutationsType.CHANGE_FOUCS_LIST](state,data){
			state.focusList = data;
		}
	},
	actions:{
		// 异步方法
		async getFocusList({commit}){
			const focusList = await request.get("/focusList");
			commit(mutationsType.CHANGE_FOUCS_LIST,focusList);
		}
	}
}