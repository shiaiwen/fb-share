<template>
  <view class="page">
    <view class="header">
      <view class="header-title">当前总额度</view>
      <view class="header-num">210000</view>
      <view class="header-desc">预估额度预估额度预估额度</view>
      <view class="header-notice">当前啊实打实</view>
    </view>
    <view class="question-list">
      <view class="item">
        <view class="item-title"> 1. 您当前是否存在与其情况 </view>
        <view class="item-option-list">
          <view
            class="option-item"
			:class="{active:item.chceked}"
            v-for="item in optionList1"
            :key="item.value"
            @click="toggleChecked(item)"
            >{{ item.label }}</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script >
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      optionList1: [
        {
          label: '是',
          value: '是',
		  chceked: false
        },
        {
          label: '否',
          value: '否',
		  chceked: false

        }
      ]
    }
  },
  onLoad () {},
  methods: {
	// 切换选项的选中状态
	toggleChecked(e){
		this.optionList1.forEach(item => {
			item.chceked = false
			if(e.value === item.value) {
				item.chceked = true
			}
		})
	}
  }
})
</script>

<style lang="scss" scoped>
$mainColor: #789def;

.header {
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: $mainColor;
  height: 400rpx;
  text-align: center;
  padding: 20rpx;
  border-radius: 10rpx;
  position: relative;
  &-title {
    font-size: 40rpx;
    margin-top: 100rpx;
  }
  &-num {
    font-size: 40rpx;
    margin: 20rpx auto;
  }
  &-desc {
    position: absolute;
    bottom: 10rpx;
    left: 0;
    width: 100%;
  }
}
.question-list {
  padding-left: 50rpx;
  padding-top: 20rpx;
  .item {
    &-title {
      font-weight: 700;
      font-size: 30rpx;
    }
    .item-option-list {
      display: flex;
      justify-content: space-between;
      padding: 0 40rpx;
      margin-top: 20rpx;
      .option-item {
        width: 200rpx;
        height: 50rpx;
		line-height: 50rpx;
        display: flex;
        align-items: center;
        justify-content: center;
		border: 1px solid $mainColor;
		color: $mainColor;
		border-radius: 10rpx;
		&.active {
			background-color: $mainColor;
			color: #fff;
		}

      }
    }
  }
}
</style>
