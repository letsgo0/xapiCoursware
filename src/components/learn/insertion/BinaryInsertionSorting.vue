<template>
	<h1 id="折半插入排序">
		<a href="#折半插入排序" class="header-anchor">#</a>
		折半插入排序
	</h1>
	<h2 id="优化">
	<a href="#优化" class="header-anchor">#</a>优化</h2>
	<p>
		直接排序算法简单，便于体现插入排序的基本思想。直接插入排序采用顺序查找法查找当前元素在有序序列中的插入位置。当我们使用顺序表存储结构时，这个“查找”操作可以用“折半查找(或称二分查找)”来实现，由此进行的插入排序称之为折半插入排序。
	</p>
	<h2 id="算法描述">
	<a href="#算法描述" class="header-anchor">#</a>算法描述</h2>
	<p>
		<strong>准备</strong>
		：假设待排数据存储在数组r[0..n-1]中，数据元素个数为n，r[0]可视为有序序列，r[1..n-1]视为无序序列。
	</p>
	<p>
		<strong>循环</strong
		>：针对无序序列r[1..n-1]循环n-1次，每次使用<span class="keywords">折半查找法</span>，查找无序序列中的元素在有序序列中的插入位置，然后插入。
	</p>		
	<h2 id="伪代码描述">
	<a href="#伪代码描述" class="header-anchor">#</a>伪代码描述</h2>
	<p>顺序表结构：</p>
	<pre><code>{{sequenceList}}</code></pre>
<p><router-link class="inline-link" :to="{name: 'Try'}">尝试用JavaScript实现</router-link></p>
	<h2  id="复杂度分析">
	<a href="#复杂度分析" class="header-anchor">#</a>复杂度分析</h2>
	<p>从时间上比较，折半查找比顺序查找快，所以就平均性能来说，折半插入排序优于直接插入排序。</p>
	<p class="mathRender">折半插入排序所需要的关键字比较次数与待排数据的初始排列无关，仅与元素个数有关。每次插入第i个元素时，都需要经过\(\left \lfloor {\log_{2}i)}\right \rfloor\)+1次比较，才能确定其插入位置。这样看来，当初始数据的初始排列为基本正序时，直接插入排序比折半插入排序执行的关键字比较次数要少。</p>
	<p>折半插入排序的元素移动次数与直接插入排序相同，依赖于初始排列。</p>
	<p class="mathRender">在平均情况下，折半插入排序仅减少了关键字间的比较次数，而元素的移动次数不变。因此，折半插入排序的时间复杂度仍为\(O(n^2)\)。</p>
	<p>从空间上看，从伪代码中可以看到，只需要一个元素的辅助空间temp，所以空间复杂度为<span class="mathRender">O(1)</span>。</p>
	<h2  id="算法特点">
	<a href="#算法特点" class="header-anchor">#</a>算法特点</h2>
			<p>1. <span class="keywords">稳定</span>排序，</p>
			<p>2. 折半查找操作只能用于<span class="keywords">顺序表</span>结构，</p>
			<p>3. 适合待排数据<span class="keywords">初始数据无序</span>的情况。</p>

</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		setup() {
			const sequenceList =
				"void BinarySort(EleType L[], int length)\n" +
				"{\n" +
				"    for (int i = 2; i < length; i++)\n" +
				"        if (L[i].key < L[i-1].key)\n" +
				"        {\n" +
				"            EleType temp = L[i];\n" +
				"            // 确定有序序列边界\n" +
				"            int low = 0;\n" +
				"            int high = i - 1;\n" +
				"            // while循环确定插入位置\n" +
				"            while (low <= high)\n" +
				"            {\n" +
				"                //折半\n" +
				"                int m = (low + high) / 2\n" +
				"                if (temp.key < L[m].key)\n" +
				"                high = m - 1\n" +
				"                else\n" +
				"                low = m + 1\n" +
				"            }\n" +
				"            for (int j = i - 1; j >= hight + 1; j--)\n" +
				"                L[j+1] = L[j];\n" +
				"    }\n" +
				"}\n";
			return { sequenceList };
		},
		data() {
			return {
				todo: "TODO"
			};
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
		}
	});
</script>

<style scoped>
</style>