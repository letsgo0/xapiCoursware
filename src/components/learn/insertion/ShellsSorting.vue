<template>
	<h1 id="希尔排序">
		<a href="#希尔排序" class="header-anchor">#</a>
		Shell's Sort
	</h1>
	<p>
		该排序以其发明者(D.L.Shell,
		1959年提出)名字冠名，又称缩小增量排序(diminishing increment sort)。
	</p>
	<h2 id="优化"><a href="#优化" class="header-anchor">#</a>优化</h2>
	<p class="mathRender">
		直接插入排序，当数据初始状态为基本有序时，时间复杂度缩小至\(O(n)\)。为了达到优化目的，使初始数据变为基本有序的代价中，时间复杂度应该小于\(O(n^2)\)，空间复杂度尽量不变。我们知道，当待排数据元素个数较少时，对\(O(n^2)\)来说，效率也比较高。希尔排序基于以上两点，从“<span
			class="keywords"
			>基本有序</span
		>”和“<span class="keywords">减少元素个数</span
		>”两个方面对直接插入排序进行了改进。
	</p>

	<h2 id="基本思想"><a href="#基本思想" class="header-anchor">#</a>基本思想</h2>
	<p>
		先将整个待排数据按照不同间隔划分为多个子序列分别进行直接插入排序，如此进行若干次，直到间隔由大缩减为1。在这个过程中无序状态渐渐接近于有序状态，此时再对整体进行一次直接插入排序。如图所示。初始时为无序状态，
	</p>

	<h2 id="过程演示"><a href="#过程演示" class="header-anchor">#</a>过程演示</h2>
	<p>
		假设某一待排数据的关键字序列为{87, 84, 12, 6, 74, 50, 88, 55, 93,
		22}，增量序列为{5, 3, 1}
	</p>
	<div class="img">
		<img class="w-100" src="../../../assets/img/shell.png" />
	</div>
	<p>
		从上述排序过程可见，希尔排序的一个特点是：子序列的构成不是简单地相邻的一段元素，而是相隔某个“增量”(或称距离)的元素组成的一个子序列。在上例中，第一趟排序的增量为5，第二趟的增量为3，第三趟的增量为1，即为最后一趟整体插入排序。
	</p>
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
		在“增量”大于1的一趟排序中，当元素发生移动时，不是朝着相邻位置慢慢移动，而是跳跃使得往前移动，从而减少了移动次数。在进行最后一趟增量为1的排序时，序列基本有序，只要作少量的关键字比较和元素移动即可，因此希尔排序的时间复杂度比直接插入排序低。
	</p>
	<p>
		但要具体进行分析，则是一个复杂的问题。因为希尔排序的时间复杂度是所取“增量”序列的函数，这是一个数学难题。
	</p>
	<p>这里给出三个增量序列。</p>
	<h3 id="希尔增量序列">
		<a href="#希尔增量序列" class="header-anchor">#</a>希尔增量序列
	</h3>
	<p class="mathRender">
		序列为\([n/2, n/4, n/8,...,
		1]\)时，逐步折半缩小增量，最坏时间复杂度为\(O(n^2)\)。
	</p>
	<h3 id="Hibbard增量序列">
		<a href="#Hibbard增量序列" class="header-anchor">#</a>Hibbard增量序列
	</h3>
	<p class="mathRender">
		序列公式为\(dlta[i] = 2^i - 1\)时，最坏时间复杂度为\(O(n^{3/2})\)。
	</p>
	<h3 id="Sedgewick增量序列">
		<a href="#Sedgewick增量序列" class="header-anchor">#</a>Sedgewick增量序列
	</h3>
	<p class="mathRender">
		序列公式为\([9*4^i-9*2^i+1,4^{i+2}-3*2^{i+2}+1]\)，i=0时为\([1，5]\),i=1时为\([19，41]\)，最终得到如\([1，5，19，41，109，209，...]\)，最坏时间复杂度为\(O(n^{4/3})\)。
	</p>

	<p class="mathRender">
		从空间来看，它只需要一个元素的辅助空间来实现元素移动操作，所以空间复杂度为\(O(1)\)。
	</p>

	<h2 id="算法特点"><a href="#算法特点" class="header-anchor">#</a>算法特点</h2>
	<p>1. 跳跃式的移动元素导致<span class="keywords">不稳定</span>的排序结构，</p>
	<p>2. 只能用<span class="keywords">顺序表</span>结构存储数据，</p>
	<p>
		3. 增量序列可以有各种取法，但应该使增量序列中的值没有除1之外的<span
			class="keywords"
			>公因子</span
		>，并且最后一个增量值必须为<span class="keywords">1</span
		>，以保证最后一趟排序为整体数据的直接插入排序。
	</p>
	<p>
		4. 适合<span class="keywords">初始记录无序</span>、<span class="keywords"
			>n较大</span
		>的情况。记录总的比较次数和移动次数都比直接插入排序要少，n越大时，效果越明显。
	</p>
	<h2 id="问题"><a href="#问题" class="header-anchor">#</a>问题</h2>
	<p>为什么增量序列中不能有除1之外的公因子？</p>
	<div class="parent">
		<textarea v-model="content" placeholder="举个栗子分析一下"></textarea>
		<button @click="submit">提交</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";
	import { ElMessage } from "element-plus";
	import { Statement } from "@xapi/xapi";

	export default defineComponent({
		setup() {
			const sequenceList =
				"// 希尔排序\n" +
				"void ShellSort(EleType L[], int length, int dlta[], int t)\n" +
				"{\n" +
				"    // 按增量序列dlta[0..t-1]对顺序表L作希尔排序\n" +
				"    for (int i = 0; i < t; i++)\n" +
				"    {\n" +
				"        // 从dlta[]中取出增量\n" +
				"        InsertSortByDis(L, length, dlta[i]);\n" +
				"    }\n" +
				"}\n" +
				"// 针对不同dis增量的直接插入排序\n" +
				"void InsertSortByDis(EleType L[], int length, int dis)\n" +
				"{\n" +
				"    for (int i = dis; i < length; i++)\n" +
				"        if (L[i].key < L[i-dis].key)\n" +
				"        {\n" +
				"            EleType temp = L[i];\n" +
				"            L[i] = L[i-dis];\n" +
				"            //顺序表结构使用从后往前查找无序序列\n" +
				"            //&& 短路与\n" +
				"            for(int j=i-(2*dis);j>=0&&temp.key<L[j].key; j-=dis)\n" +
				"                L[j+dis] = L[j];\n" +
				"            L[j+dis] = temp;\n" +
				"        }\n" +
				"}\n";
			const content = ref("");
			return { sequenceList, content };
		},
		methods: {
			async submit() {
				const insist = await this.$confirm(
					"此操作将发送数据至LRS, 是否继续?",
					"提示",
					{
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning"
					}
				).then(
					() => {
						// console.log(res);
						return true;
					},
					() => {
						// console.log(reason);
						return false;
					}
				);
				if (insist == false) {
					return;
				}
				if (this.content.length < 10) {
					ElMessage.error("反馈字数太少，作者是不会做出响应的");
					return;
				} else {
					const stat: Statement = {
						actor: {
							name: this.$store.state.user.User.name,
							mbox: "mailto:" + this.$store.state.user.User.email,
							objectType: "Agent"
						},
						verb: {
							id: "http://activitystrea.ms/schema/1.0/complete",
							display: { "en-US": "completed", "zh-CN": "完成了" }
						},
						object: {
							id: "http://example.com/activities/why-not-have-1",
							definition: {
								type: "http://activitystrea.ms/schema/1.0/question",
								name: {
									"en-US": "question",
									"zh-CN": "问题"
								}
							},
							objectType: "Activity"
						},
						result: {
							response: this.content
						}
					};
					this.$store.state.user.myXAPI.sendStatement(stat).then(
						value => {
							ElMessage.success("发送成功！");
						},
						reason => {
							ElMessage.error("发送失败！网络或LRS数据库好像出小差了！");
						}
					);
				}
			}
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
	.parent {
		position: relative;
	}
	.parent > textarea {
		width: 100%;
		height: 12rem;
		overflow-y: auto;
	}
	.parent > button {
		position: absolute;
		right: 0.2rem;
		top: 0.1rem;
	}
</style>