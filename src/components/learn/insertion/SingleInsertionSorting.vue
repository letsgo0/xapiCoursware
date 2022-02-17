<template>
	<h1 id="直接插入排序">
		<a href="#直接插入排序" class="header-anchor">#</a>
		直接插入排序
	</h1>
	<p>
		依次将待排数据中的元素插入到前面已排好序的子序列中，直到全部元素都排好序，元素插入过程中边比较边移动元素。
	</p>

	<h2 id="算法步骤">
		<a href="#算法步骤" class="header-anchor">#</a>
		算法步骤
	</h2>
	<p>
		<strong>准备</strong
		>：假设待排数据存储在数组r[0..n-1]中，数据元素个数为n，r[0]可视为有序序列，r[1..n-1]视为无序序列。
	</p>
	<p>
		<strong>循环</strong
		>：针对无序序列r[1..n-1]循环n-1次，每次使用<strong>顺序查找法</strong>，查找无序序列中的元素在有序序列中的插入位置，然后插入。
	</p>
	<p>
		<strong>提醒</strong
		>：对无序序列顺序查找时可从前往后或从后往前，在顺序表结构和双链表中两种方式都可以，而在单链表中一般只能从头节点开始。
	</p>
	<h2 id="过程演示"><a href="#过程演示" class="header-anchor">#</a>过程演示</h2>
	<p>假设某一待排数据的关键字序列为{87,84,12,6,74,50,88,55,93,22}，用直接插入排序方法进行排序的过程如下。红线内部分为有序部分。</p>
	<div class="img">
		<img class="w-100" src="../../../assets/img/single.png" />
	</div>	
	<h2 id="伪代码描述">
		<a href="#伪代码描述" class="header-anchor">#</a>伪代码描述
	</h2>
	<p>顺序表结构：</p>
	<pre><code>{{sequenceList}}</code></pre>
<p><router-link class="inline-link" :to="{name: 'Try'}">尝试用JavaScript实现</router-link></p>
	<h2 id="复杂度分析">
		<a href="#复杂度分析" class="header-anchor">#</a>复杂度分析
	</h2>
	<p>
		从空间来看，它只需要一个元素的辅助空间来实现元素移动操作，所以空间复杂度为
		<span class="mathRender">\(O(1)\)</span>。
	</p>
	<p>
		从时间来看，排序的基本操作为：比较两个关键字的大小和移动元素。在上述代码中有两层循环。内层的f循环次数取决于当前元素关键字与有序序列中元素的关键字之间的关系。
	</p>
	<p>
		对于外循环的某一趟排序中，在最好情况下，比较一次，不发生移动；在最坏情况下，第i个待排元素会和前面有序序列中i-1个元素发生比较以及边界判断比较1次，总共比较i次，移动i+1次。
	</p>
	<div>
		<table border="1" align="left">
			<tbody align="center">
				<tr>
					<th>假设排序结果为升序</th>
					<th>比较次数</th>
					<th>移动次数</th>
				</tr>
				<tr>
					<td>最好情况(e.g., 1 2 3 4 5 6 7)</td>
					<td>n-1</td>
					<td>0</td>
				</tr>
				<tr>
					<td>最坏情况(e.g., 7 6 5 4 3 2 1)</td>
					<td class="mathRender">$$\sum_{i=2}^{n}i$$</td>
					<td class="mathRender">$$\sum_{i=2}^{n}(i+1)$$</td>
				</tr>
			</tbody>
		</table>
	</div>
	<p class="mathRender">
		若待排数据中出现各种可能排列的概率相同，则可取上述最好情况和最坏情况的平均值。则平均情况下，直接插入排序中关键字的比较次数和元素移动次数均约为\(n^2\)。
	</p>
	<p class="mathRender">
		因此，直接插入排序的时间复杂度为O(\(n^2\))。
	</p>

	<h2 id="算法特点">
		<a href="#算法特点" class="header-anchor">#</a>
		算法特点
	</h2>

	<p>1. <span class="keywords">稳定</span>排序，</p>
	<p>
		2. 算法简便，容易实现，
	</p>
	<p>
		3. 也适用于链式存储结构，在链表上
		<span class="keywords">无需移动</span>元素，只需修改指针即可，
	</p>
	<p>4. 适合待排数据初始<span class="keywords">基本有序</span>的情况。</p>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		data() {
			return {
				sequenceList:
					"void InsertSort(EleType L[], int length)\n" +
					"{\n" +
					"    for (int i = 2; i < length; i++)\n" +
					"        if (L[i].key < L[i-1].key)\n" +
					"        {\n" +
					"            EleType temp = L[i];\n" +
					"            L[i] = L[i-1];\n" +
					"            //顺序表结构使用从后往前查找有序序列\n" +
					"            //&& 短路与\n" +
					"            for (int j=i-2;j>=0&&temp.key<L[j].key;j--)\n" +
					"                L[j+1] = L[j];\n" +
					"            L[j+1] = temp;\n" +
					"        }\n" +
					"}\n"
			};
		},
		mounted() {
			this.$nextTick(function() {
				// 这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
				if (this.MathJaxPlugin.isMathjaxConfig) {
					// 判断是否初始配置，若无则配置。
					this.MathJaxPlugin.initMathjaxConfig();
				}
				// this.copyBall()
				this.MathJaxPlugin.MathQueue("mathRender", "."); // 传入组件id，让组件被MathJax渲染
			});
		}
	});
</script>

<style scoped>
	table {
		display: contents;
	}
</style>