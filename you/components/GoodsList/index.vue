<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item.picUrl"></image>
				</view>
			</swiper-item>
		</swiper>
		商品列表:{{cateActiveId}}|{{test}}
	</view>
</template>

<script>
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
</style>
