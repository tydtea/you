<template>
	<view class="recommendContainer">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in focusList" :key="item.id">
				<view class="swiper-item">
					<image :src="item.picUrl"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// vuex
	import {mapState,mapActions}  from "vuex";
	export default {
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
					return state.adv.focusList
				}
			})
		},
		
		//  不要在生命周期函数中使用async
		mounted(){
			
			// 调用轮播图信息
			// this.$store.dispatch("getFocusList");
			this.getFocusList();
			// console.log(this.$store.state.goods)
			// 获取轮播图信息
			// this.getFocusList();
		},
		methods:{
			...mapActions(["getFocusList"])
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
	}
</style>
