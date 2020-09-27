<template>
	<view class="cateContainer">
		<view v-for="(item,index) in categoryModule" :key="index">
			<image class="titlePic" :src="item.titlePicUrl"></image>
			<scroll-view scroll-x="true" >
				<view class="scrollContent">
					<view v-for="info in item.itemList" :key="info.id">
						<image :src="info.listPicUrl"></image>
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
			image{
				width:200rpx;
				height:200rpx;
			}
		}
	}
</style>
