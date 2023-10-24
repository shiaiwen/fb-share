<template>
	<view>
		404
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
			let timer = setTimeout(() => {
				clearTimeout(timer)
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}, 2000);
		},
		methods: {

		}
	});
</script>

<style>
</style>
