<template>
	<view class="categoryContainer">
		<!-- 头部 -->
		<view class="searchHeader">
			<view class="search">搜索商品</view>
		</view>

		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view class="scrollContainer" scroll-y="true" show-scrollbar='false'>
					<ul class='navList'>
						<li class="active">推荐专区</li>
					</ul>
				</scroll-view>
			</view>

			<!-- 右侧 -->
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="scrollContainer">
					<view class="proList">
						<image class="cateImg" src="https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg"></image>
						<view class='proItem'>
							<image src="https://yanxuan.nosdn.127.net/78c6f5437b032f2cfd9be02b5e8f5d65.jpg" mode=""></image>
							<p>好物</p>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.categoryContainer {
		.searchHeader {
			width: 100%;
			height: 56rpx;
			padding: 10rpx 0;

			.search {
				width: 94%;
				height: 56rpx;
				line-height: 56rpx;
				background: #EDEDED;
				margin: 0 auto;
				text-align: center;
				font-size: 28rpx;
				border-radius: 10rpx;
			}
		}


		.contentContainer {
			display: flex;
			box-sizing: border-box;
			height: calc(100vh - 76rpx);
			border-top: 1rpx solid #EEEEEE;

			.leftContainer {
				width: 20%;
				height: 100%;
				font-size: 26rpx;
				text-align: center;
				box-sizing: border-box;
				border-right: 1rpx solid #eee;

				.scrollContainer {
					height: 100%;

					.navList {
						li {
							position: relative;
							height: 80rpx;
							line-height: 80rpx;
							color: #666;

							&.active {
								&:after {
									content: '';
									height: 70%;
									width: 2rpx;
									background: #B4282D;
									position: absolute;
									top: 15%;
									left: 6rpx;
								}
							}
						}
					}
				}

			}
		}
		
		
		
		
		
		.rightContainer {
			width: 80%;
			height: 100%;

			.scrollContainer {
				height: 100%;
			}

			.proList {
				width: 100%;
				display: flex;
				flex-wrap: wrap;

				.cateImg {
					width: 520rpx;
					height: 190rpx;
					margin: 20rpx auto;
				}

				.proItem {
					width: 33% ;
					padding:10rpx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					flex-direction: column;

					image {
						width: 90%;
						height: 144rpx;
					}

					p {
						font-size: 24rpx;
						text-align: center;
					}
				}

			}



		}


	}
</style>
