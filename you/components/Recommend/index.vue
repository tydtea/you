<template>
	<view class="recommendContainer">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in focusList" :key="item.id">
				<view class="swiper-item">
					<image :src="item.picUrl"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="policeContainer">
			<view v-for="(item,index) in policyDescList" :key="index">
				<image :src="item.icon"></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		<view class="navContainer">
			<view class="navItem" v-for="(item,index) in kingKongList" :key="index">
				<image :src="item.picUrl"></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<CateGoryModule></CateGoryModule>
		<!-- categoryModule -->
		
		
	</view>
</template>

<script>
	// vuex
	import CateGoryModule from "./CateGoryModule"
	import {mapState,mapActions}  from "vuex";
	export default {
		components:{
			CateGoryModule
		},
		data(){
			return {
				// focusList:[]
			}
		},
		// computed:mapState({
		// 	focusList(state){
		// 		return state.adv.focusList;
		// 	}
		// }),
		computed:{
			...mapState({
				focusList(state){
					return state.adv.focusList;
				},
				policyDescList(state){
					return state.adv.policyDescList;
				},
				kingKongList(state){
					return state.goods.kingKongList
				}
			})
		},
		
		//  不要在生命周期函数中使用async
		mounted(){
			
			// 调用轮播图信息
			// this.$store.dispatch("getFocusList");
			this.getFocusList();
			this.getPolicyDescList();
			this.getKingKongList();
			// console.log(this.$store.state.goods)
			// 获取轮播图信息
			// this.getFocusList();
		},
		methods:{
			...mapActions(["getFocusList","getPolicyDescList","getKingKongList"])
			// async getFocusList(){
			// 	this.focusList = await this.$ajax.get("/focusList");
			// }
		}
	}
</script>

<style lang="scss">
	.recommendContainer{
		swiper{
			width:100%;
			height:350rpx;
			.swiper-item,image{
				width:100%;
				height:100%;
			}
		}
		.policeContainer{
			display: flex;
			justify-content: space-around;
			image{
				width:32rpx;
				height:32rpx;
				vertical-align: middle;
			}
			text{
				font-size:24rpx;
			}
		}
		.navContainer{
			margin-top:20rpx;
			display: flex;
			flex-wrap:wrap;
			.navItem{
				display:flex;
				flex-direction: column;
				width:20%;
				align-items: center;
				image{
					width:110rpx;
					height:110rpx;
				}
				text{
					font-size:24rpx;
					line-height: 50rpx;
				}
			}
		}
	}
</style>
