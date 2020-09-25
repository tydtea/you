module.exports = {
	devServer:{
		// 设置代理
		proxy:{
			// http://127.0.0.1:8090/kingKongList
			// 以/you开头才会使用该代理。
			"/you":{
				target:"http://127.0.0.1:8090",
				changeOrigin:true,
				pathRewrite:{
					"^/you":""
				}
			}
		}
	}
	
}