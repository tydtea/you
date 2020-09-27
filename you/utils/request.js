class Request {
	constructor() {
	    this.baseUrl = "http://127.0.0.1:8090"
		// this.baseUrl = "";
		// this.baseUrl = "/you";// h5
	}
	request(url,method,data){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:url.includes("https://")?url:this.baseUrl+url,
				method,
				data,
				success(res){
					resolve(res.data);
				},
				fail(err){
					reject(err);
				}
			})
		})
	}
	get(url,data = {}){
		const params = data.params;
		return this.request(url,"get",params);
	}
}
export default new Request();
// export default {
// 	install(Vue){
		
// 		Vue.prototype.$ajax = new Request();
// 	}
// }