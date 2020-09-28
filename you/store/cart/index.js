const state = {
	// 购物车信息
	carList:wx.getStorageSync("carList")?wx.getStorageSync("carList"):[]
}
const getters = {
	sumPrice({carList}){
		let sum = 0;
		carList.forEach(v=>{
			if(v.isActive){
				sum+=(v.retailPrice*v.buyNum)
			}
		})
		return sum;
	}
}
const mutations = {
	// 点击商品加入购物车
	addCarList(state,goodsInfo){
		/*加入购物车
		1、先判断是否有该商品
			1、有
				购买数量+1
			2、无
				增加记录*/
		const index = state.carList.findIndex(v=>v.id === goodsInfo.id)
		
		if(index>-1){
			state.carList[index].buyNum++;
		}else{
			state.carList.unshift({
				id:goodsInfo.id,// 唯一标识
				name:goodsInfo.name,// 商品名字
				retailPrice:goodsInfo.retailPrice,// 商品价格
				listPicUrl:goodsInfo.listPicUrl,// 商品图片
				buyNum:1,// 购买数量
				isActive:true,// 是否被选中
			})
		}
		wx.setStorageSync("carList",state.carList);
	},
	// 点击购物车当中的+
	add(state,index){
		state.carList[index].buyNum++;
		wx.setStorageSync("carList",state.carList);
	},
	del(state,index){
		state.carList[index].buyNum--;
		if(state.carList[index].buyNum<1){
			state.carList.splice(index,1);
		}
		wx.setStorageSync("carList",state.carList);
	}
}
export default {
	state,
	mutations,
	getters
}