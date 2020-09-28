<template>
	<view class="goodsListContainer">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item.picUrl"></image>
				</view>
			</swiper-item>
		</swiper>
		<view  v-for="item in goodsList" :key="item.id">
			<text class="title">{{item.category.name}}</text>
			<text class="desc">{{item.category.frontDesc}}</text>
			<div class="listContainer">
				<div @click="addCarList"
				:data-info="info"
				 class="listItem" v-for='(info, index) in item.itemList' :key='index'>
					<image :src="info.listPicUrl" mode=""></image>
					<p>{{info.name}}</p>
					<p style='color: red;font-weight: bold;'>{{info.retailPrice | currency}}</p>
				</div>
			</div>
		</view>
		
	</view>
</template>

<script>
	import {mapMutations} from "vuex";
	export default {
		props:["cateActiveId"],
		data(){
			return {
				bannerList:[],
				goodsList:[]
			}
		},
		mounted(){
			// 只执行一次。
			this.getList();
		},
		// https://m.you.163.com/item/list.json?__timestamp=1601191262957&categoryId=1010000
		methods:{
			// ...mapMutations(["addCarList"]),
			addCarList(e){
				// console.log(e)
				this.$store.commit("addCarList",e.currentTarget.dataset.info);
				console.log(11111111);
				wx.showToast({
					title:"加入购物车成功"
				})
			},
			async getList(){
				uni.showLoading({
					title:"加载中……"
				})
				const {data}= await this.$ajax.get(`https://m.you.163.com/item/list.json?__timestamp=${Date.now()}&categoryId=${this.cateActiveId}`);
				this.bannerList = data.currentCategory.bannerList;
				this.goodsList = data.categoryItemList;
				uni.hideLoading();
			}
		},
		watch:{
			cateActiveId(){
				this.bannerList=[],
				this.goodsList=[]
				this.getList();
			}
		}
		// computed:{
		// 	test(){
		// 		this.bannerList=[],
		// 		this.goodsList=[]
		// 		this.getList();
		// 		return this.cateActiveId;
		// 	}
		// }
	}
</script>

<style lang="scss">
	.goodsListContainer{
		swiper,.swiper-item{
			width:100%;
			height:370rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		.title{
			display:block;
			text-align:center;
			font-size:34upx;
			color:#333;
			line-height:70upx;
		}
			
		.desc{
			display:block;
			text-align:center;
			font-size:24upx;
			color:#999;
			line-height:40upx;
		}
		.listContainer{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			/* 解决最后一行只有一个元素的时候不能靠左布局 */
			&:after{
				content: '';
				width: 345upx;
				height: 0;
			}
				
				
			.listItem{
				width: 345upx;
				display: flex;
				flex-direction: column;
				image {
					width: 345upx;
					height: 345upx;
				}
					
				p{
					white-space:pre-wrap;
					font-size :28upx;
					line-height: 50upx;
					text-align: left;
				}
			}
				
					
		}
			
	}
</style>
