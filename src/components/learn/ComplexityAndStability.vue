<template>
	<h1 id="复杂度和稳定性比较">
		<a href="#复杂度和稳定性比较" class="header-anchor">#</a>复杂度和稳定性图表
	</h1>
	<div>
		<table border="1" align="left">
			<tbody align="center">
				<tr>
					<th>排序方法</th>
					<th>时间复杂度(最坏)</th>
					<th>空间复杂度</th>
					<th>存储结构</th>
					<th>稳定性</th>
				</tr>
				<tr>
					<td>直接插入排序</td>
					<td class="mathRender">\(O(n^2)\)</td>
					<td class="mathRender">\(O(1)\)</td>
					<td>顺序表、链表</td>
					<td>稳定</td>
				</tr>
				<tr>
					<td>折半插入排序</td>
					<td class="mathRender">\(O(n^2)\)</td>
					<td class="mathRender">\(O(1)\)</td>
					<td>顺序表</td>
					<td>稳定</td>
				</tr>
				<tr>
					<td>希尔排序</td>
					<td class="mathRender">与增量序列相关</td>
					<td class="mathRender">\(O(1)\)</td>
					<td>顺序表</td>
					<td>不稳定</td>
				</tr>
			</tbody>
		</table>
	</div>	
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		setup() {
			return {};
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
</style>