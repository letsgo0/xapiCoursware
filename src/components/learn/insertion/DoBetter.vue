<template>
	<h1 id="优化">
		<a href="#优化" class="header-anchor">#</a>
		优化
	</h1>
    <p>每种算法都有自己的特点。</p>
    <p class="mathRender">直接插入排序的关键字比较次数和元素移动次数由待排数据有序程度决定，时间复杂度在\([O(n),O(n^2)]\)之间；可以采用顺序表和链表结构。</p>
    <p>折半插入排序的关键字比较次数与待排数据的初始排列无关，仅与元素个数有关；元素移动次数与直接插入排序相同，依赖于初始排列有序程度；因为采用二分查找，需要使用顺序表存储结构。</p>
    <p>希尔排序从“基本有序”和“减少元素个数”两方面对直接插入排序进行改进。希尔排序的时间复杂度是所取“增量”序列的函数，时间复杂度的计算是个难题。另外希尔排序根据增量分割序列，需要使用顺序表结构。</p>
    <p>不同的环境下对排序方法有不同的要求。在实际场景中还存在其它种类的优化方法。如果您有一些关于优化的idea，可以点击<a class="inline-link" href="https://docs.qq.com/sheet/DRHJOa1F4ZlBVSG5x">共享编辑表格</a>进入作者建立的公共文档进行交流。</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
		mounted() {
			this.$nextTick(function() {
				// 这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
				if (this.MathJaxPlugin.isMathjaxConfig) {
					// 判断是否初始配置，若无则配置。
					this.MathJaxPlugin.initMathjaxConfig();
				}
				this.MathJaxPlugin.MathQueue("mathRender", "."); // 传入组件id，让组件被MathJax渲染
			});
		}
})
</script>

<style scoped>

</style>