<template>
	<h1 id="内部与外部排序">
		<a href="#内部与外部排序" class="header-anchor">#</a>
		内部与外部排序
	</h1>
	<h2 id="什么是内部排序">
		<a href="#什么是内部排序" class="header-anchor">#</a>
		什么是内部排序？
	</h2>
	<p>将一组待排数据一次性全部存放到计算机内存中进行排序的过程。</p>
	<Gif
		:imgAdd="require('../../assets/img/inandExSorting/internalSorting.png')"
		:gifAdd="require('../../assets/img/inandExSorting/internalSorting.gif')"
	></Gif>
	<h3 id="稳定排序"><a href="#稳定排序" class="header-anchor">#</a>稳定排序</h3>
	<p>当待排数据的关键字都不相同时，则经过排序后得到的结果是唯一的。</p>
	<p>当待排数据的关键字至少有两个相等时，则经过排序所得的结果不唯一。</p>
	<p class="mathRender">假设有待排数据{\(D_{1},D_{2},...D_{n}\)}，其对应的关键字为{\(K_{1},K_{2},...K_{n}\)}。假定在关键字序列中有\(K_{i}\)与\(K_{j}\)相等，且在排序前\(D_{i}\)的逻辑位置在\(D_{j}\)之前。</p>
	<p class="mathRender">若在排序结束后\(D_{i}\)的逻辑位置仍在\(D_{j}\)之前，则称所用的排序方法是稳定的；反之，若可能存在\(D_{i}\)的逻辑位置在\(D_{j}\)之后，则称所用的排序方法是不稳定的。</p>
	<p>将不稳定排序转为稳定排序需要加入更多的干预。</p>
	<h2 id="什么是外部排序">
		<a href="#什么是外部排序" class="header-anchor">#</a>
		什么是外部排序？
	</h2>
	<p>将一组待排数据多次存放到计算机内存中进行排序的过程。</p>
	<Gif
		:gifAdd="require('../../assets/img/inandExSorting/externalSorting.gif')"
		:imgAdd="require('../../assets/img/inandExSorting/externalSorting.png')"
	></Gif>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";
	import Gif from "@/myPlugin/Gif.vue";

	export default defineComponent({
		components: {
			Gif
		},
		mounted() {
			this.$nextTick(function() {
				// 这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
				if (this.MathJaxPlugin.isMathjaxConfig) {
					// 判断是否初始配置，若无则配置。
					this.MathJaxPlugin.initMathjaxConfig();
				}
				this.MathJaxPlugin.MathQueue("mathRender", "."); // 传入组件id，让组件被MathJax渲染
			});			
		},
	});
</script>

<style scoped>
</style>