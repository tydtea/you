<template>
	<view class="cateContainer">
		<view v-for="(item,index) in categoryModule" :key="index">
			<image class="titlePic" :src="item.titlePicUrl"></image>
			<scroll-view scroll-x="true" >
				<view class="scrollContent">
					<view class="infoItem" v-for="info in item.itemList" :key="info.id">
						<image :src="info.listPicUrl"></image>
						<text>{{info.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import  {mapState,mapActions} from "vuex";
	export default{
		computed:{
			...mapState({
				categoryModule(state){
					return state.goods.categoryModule
				}
			})
		},
		mounted(){
			this.getCategoryModule();
		},
		methods:{
			...mapActions(["getCategoryModule"])
		}
		
	}
</script>

<style lang="scss">
	.cateContainer{
		.titlePic{
			width:100%;
			height:370rpx;
		}
		.scrollContent{
			display:flex;
			.infoItem{
				margin-right:20rpx;
				image{
					width:200rpx;
					height:200rpx;
				}
				text{
					font-size: 24rpx;
					line-height: 40rpx;
					width: 100%;
					white-space: pre-wrap;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}
			
		}
	}
</style>
