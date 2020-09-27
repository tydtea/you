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
			:scroll-into-view="'scroll'+cateActiveId"
			scroll-with-animation
			 class="scrollContainer" enable-flex scroll-x="true" >
			 <view  class="scollContent">
				 <view :id="'scroll'+item.id" 
				 @click="CAHANGE_CATE_ACTIVE_ID(item.id)"
				 :class="{'active':item.id===cateActiveId}"
				  v-for="item in cateList" :key="item.id">
				 	{{item.name}}
				 </view>
			 </view>
				
			</scroll-view>
		</view>
		<!-- 推荐组件 -->
		<!-- <component is=></component> -->
		<Recommend v-if="cateActiveId===0"></Recommend>
		<GoodsList :cateActiveId="cateActiveId"  v-else></GoodsList>
	</view>
</template>

<script>
	import {mapState,mapActions,mapMutations} from "vuex";
	import Recommend from "../../components/Recommend";
	import GoodsList from "../../components/GoodsList"
    export default {
		data(){
			return {
				// 滑动导航的选中id
				// cateActiveId:0,
				// cateList:[]
			}
		},
		computed:{
			...mapState({
				cateList(state){
					return state.goods.cateList
				},
				cateActiveId(state){
					return state.goods.cateActiveId
				}
			})
		},
		mounted(){
			// this.$store.dispatch("getCateList");
			this.getCateList();
		},
		methods:{
			...mapMutations(["CAHANGE_CATE_ACTIVE_ID"]),
			...mapActions(["getCateList"]),
			// async getCateList(){
			// 	// 将server作为一个中转站（中间层）来调用m.you.163.com.
			// 	// 网易云音乐 server--> 中间层
			// 	// this.cateList = await this.$ajax.get("/cateList");
				
			// },
			// 更改选中的ID
			// changeCateActiveId(id){
			// 	this.cateActiveId = id;
			// }
			
		},
		components:{
			Recommend,
			GoodsList
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
