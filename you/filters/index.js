// 方法一

// export default {
// 	// 货币过滤器
// 	currency(v){
// 		return "￥"+v.toFixed(3)
// 	},
// 	date(){
		
// 	}
	
// }

// 方法二： use
const filters = {
	// 货币过滤器
	currency(v){
		return "￥"+v.toFixed(3)
	},
	date(){
		
	}
}
export default {
	install(Vue){
		for(let key in filters){
			Vue.filter(key,filters[key]);
		}
	}
}