<template>
	<h1 id="内部排序分类">
		<a href="#内部排序分类" class="header-anchor">#</a>
		内部排序分类
	</h1>
	<p>
		内部排序的过程是一个逐步扩大待排数据的有序序列长度的过程。
		在排序的过程中，可以将待排数据分为两个区域：有序系列区和无序序列区。
		根据逐步扩大有序序列范围的原则不同，可以分为以下几类。
	</p>

	<h2 id="插入类">
		<a href="#插入类" class="header-anchor">#</a>插入类</h2>
	<p>
		将无序子序列中的一个或几个记录“插入”到有序序列中。典型的有直接插入排序和希尔排序。
	</p>

	<h2 id="交换类">
		<a href="#交换类" class="header-anchor">#</a>交换类</h2>
	<p>
		“交换”无序序列中的元素从而得到其中关键字最小或最大的元素，并将它加入到有序子序列中。典型的有冒泡排序和快速排序。
	</p>

	<h2 id="选择类">
		<a href="#选择类" class="header-anchor">#</a>选择类</h2>
	<p>
		从无序子序列中“选择”关键字最小或最大的元素，并将它加入到有序子序列中。主要包括简单选择排序、树形选择排序和堆排序。
	</p>

	<h2 id="归并类">
		<a href="#归并类" class="header-anchor">#</a>归并类</h2>
	<p>
		“归并”两个以上(含两个)的有序子序列。常见的有2-路归并排序。
	</p>

	<h2 id="分配类">
		<a href="#分配类" class="header-anchor">#</a>
		分配类
	</h2>
	<p>
		关键字的大小关系不由比较确定，而是由分配和收集两种基本操作完成。主要有基数排序。
	</p>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		setup() {
			return {};
		}
	});
</script>

<style scoped>
</style>