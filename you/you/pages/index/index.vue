<template>
	<view class="indexContainer">
		<!-- 头部信息 -->
		<view class="header">
			<image src="/static/images/logo.png" mode=""></image>
			<view class="searchInput">
				<text class="iconfont icon-icon-sousuo"></text>
				<input placeholder-class="placehodler" placeholder="搜索商品" type="text">
			</view>
			<button type="default">登陆</button>
		</view>
		<view class="navContainer">
			<scroll-view
			:scroll-into-view="'scroll'+activeIndex"
			scroll-with-animation
			 class="scrollContainer" enable-flex scroll-x="true" >
			 <view class="scollContent">
				 <view @click="changeActiveIndex(index)" :id="'scroll'+index" :class="{active:index===activeIndex}" v-for="(item,index) in kingKongList" :key="index">
				 	{{item.text}}
				 </view>
			 </view>
				
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import request from "../../utils/request";
    export default {
		data(){
			return {
				activeIndex:0,// 导航选中的下标
				kingKongList:[]
			}
		},
		mounted(){
			this.getkingKongList();
		},
		methods:{
			// 更改activeIndex
			changeActiveIndex(index){
				this.activeIndex = index;
			},
			// 获取头部导航  vuex
			async getkingKongList(){
				this.kingKongList = await request.get("/kingKongList");
			}
		}
	}
</script>

<style lang="scss">
	.indexContainer{
		.header{
			display: flex;
			width:100%;
			height:60rpx;
			padding:10rpx 0;
			image{
				width: 140rpx;
				height: 40rpx;
				margin: 10rpx 30rpx;
			}
			.searchInput{
				display: flex;
				background:#eee;
				font-size:30rpx;
				border-radius: 10rpx;
				text{
					height:60rpx;
					line-height: 60rpx;
					margin:0 20rpx;
				}
				input{
					width:100%;
					height:60rpx;
					line-height: 60rpx;
				}
				.placehodler{
					font-size:24rpx;
					color:#666;
				}
			}
			button{
				width: 144rpx;
				height: 60rpx;
				padding: 0 4rpx;
				color: #b4282d;
				line-height: 56rpx;
				text-align: center;
				font-size: 24rpx;
				margin: 0 20rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		
		.navContainer{
			margin:0 20rpx;
			.scrollContainer{
				width:100%;
				height:80rpx;
				.scollContent{
					display:flex;
					height:80rpx;
					view{
						display:inline-block;
						white-space: nowrap;
						margin-right:20rpx;
						height:100%;
						line-height: 80rpx;
						box-sizing: border-box;
						&.active{
							border-bottom: 1rpx solid red;
						}
					}
				}
				
				
			}
		}
		
	}
</style>
