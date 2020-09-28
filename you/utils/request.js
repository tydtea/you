class Request {
	constructor() {
	    this.baseUrl = "http://127.0.0.1:8090"
		this.header = null;
		// this.baseUrl = "";
		// this.baseUrl = "/you";// h5
	}
	request(url,method,data){
		
		return new Promise((resolve,reject)=>{
			const options = {
					url:url.includes("https://")?url:this.baseUrl+url,
					method,
					data,
					success(res){
						resolve(res.data);
					},
					fail(err){
						reject(err);
					}
				};
			if(this.header){
				options.header = this.header;
			}
			uni.request(options)
		})
	}
	get(url,data = {}){
		const params = data.params;
		return this.request(url,"get",params);
	}
	post(url,data={}){
		
		// axios.post("/xxx","")
		if(data instanceof Object){
			this.header = {
				"content-type":"application/json"
			}
		}else{
			// 设置一个初始值
			this.header = {
				"content-type":"application/x-www-form-urlencoded"
			}
		}
		
		return this.request(url,"post",data)
	}
}
export default new Request();
// export default {
// 	install(Vue){
		
// 		Vue.prototype.$ajax = new Request();
// 	}
// }