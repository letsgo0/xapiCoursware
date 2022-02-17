<template>
	<div id="pathGraph">
		<button class="warning" @click="flush" style="margin:0 auto;">
			如果没有反应请点击该按钮
		</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, isProxy, Component } from "vue";
	import * as Echarts from "echarts";
	import { ElMessage } from "element-plus";

	export default defineComponent({
		data() {
			return {
				graph: {
					data: [
						{ name: "内部排序", category: 0, id: 0 },
						{ name: "交换", catagory: 1, id: 1 },
						{ name: "插入", category: 1, id: 2 },
						{ name: "选择", category: 1, id: 3 },
						{ name: "归并", category: 1, id: 4 },
						{ name: "分配", category: 1, id: 5 },

						{ name: "稳定度", category: 2, id: 6 },

						{ name: "复杂度", category: 3, id: 7 },
						{ name: "执行时间", category: 3, id: 8 },
						{ name: "辅助空间", category: 3, id: 9 },

						{ name: "数据初始状态", category: 4, id: 10 },
						{ name: "存储位置", category: 4, id: 11 },
						{ name: "顺序表", category: 4, id: 12 },
						{ name: "链表", category: 4, id: 13 },
						{ name: "向量表", category: 4, id: 14 },

						{ name: "直接插入", category: 5, id: 15 },
						{ name: "折半插入", category: 5, id: 16 },
						{ name: "希尔排序", category: 5, id: 17 },

						{ name: "冒泡排序", category: 6, id: 18 },
						{ name: "快速排序", category: 6, id: 19 },

						{ name: "简单选择", category: 7, id: 20 },
						{ name: "堆排序", category: 7, id: 21 },

						{ name: "二路归并排序", category: 8, id: 22 },

						{ name: "多关键字排序", category: 9, id: 23 },
						{ name: "链式基数排序", category: 9, id: 24 }
					],
					links: [
						{ source: 0, target: 1, value: "" },
						{ source: 0, target: 2, value: "" },
						{ source: 0, target: 3, value: "" },
						{ source: 0, target: 4, value: "" },
						{ source: 0, target: 5, value: "" },

						{ source: 0, target: 6, value: "" },
						{ source: 0, target: 7, value: "" },
						{ source: 0, target: 10, value: "" },

						{ source: 7, target: 8, value: "" },
						{ source: 7, target: 9, value: "" },

						{ source: 10, target: 11, value: "" },
						{ source: 11, target: 12, value: "" },
						{ source: 11, target: 13, value: "" },
						{ source: 11, target: 14, value: "" },

						{ source: 2, target: 15, value: "" },
						{ source: 2, target: 16, value: "" },
						{ source: 2, target: 17, value: "" },

						{ source: 1, target: 18, value: "" },
						{ source: 1, target: 19, value: "" },

						{ source: 3, target: 20, value: "" },
						{ source: 3, target: 21, value: "" },

						{ source: 4, target: 22, value: "" },

						{ source: 5, target: 23, value: "" },
						{ source: 5, target: 24, value: "" }
					],
					categories: [
						{ name: "类目0" },
						{ name: "类目1" },
						{ name: "类目2" },
						{ name: "类目3" },
						{ name: "类目4" },
						{ name: "类目5" },
						{ name: "类目6" },
						{ name: "类目7" },
						{ name: "类目8" },
						{ name: "类目9" }
					]
				}
			};
		},
		mounted() {
			this.draw();
			ElMessage.success({
				showClose: true,
				message: "点击节点可进入页面",
				type: "success",
				duration: 3000,
				// offset: 100
			});
		},
		methods: {
			flush(){
				const myChart = Echarts.getInstanceByDom(document.getElementById("pathGraph"));
				if (!myChart){
					ElMessage.error({
						showClose:true,
						message: "看起来出了点问题，请刷新页面，或者向该邮箱" + this.Developer.email +"反馈",
						type: "error",
					})
				}
			},
			draw() {
				const myChart = Echarts.init(document.getElementById("pathGraph"));
				const config: Echarts.EChartsCoreOption = {
					title: {},
					tooltip: {},
					animationDurationUpdate: 1500,
					animationEasingUpdate: "quinticInOut",
					legend: [{ show: true }],
					series: [
						{
							type: "graph",
							layout: "force",
							symbolSize: (value, params) => {
								switch (params.data.category) {
									case 0: {
										params.data.symbolSize = 80;
										return params.data.symbolSize;
									}
									case 1: {
										params.data.symbolSize = 70;
										return params.data.symbolSize;
									}
									case 2: {
										params.data.symbolSize = 60; //这一句最关键
										return params.data.symbolSize;
									}
									default:
										params.data.symbolSize = 50;
										return params.data.symbolSize;
								}
							},
							// focusNodeAdjacency: true, 弃用
							emphasis: {
								focus: "adjacency"
							},
							roam: true, //开启平移、缩放、漫游
							label: {
								show: true,
								position: "inside",

								fontSize: 20
							}, //节点标签文本
							force: {
								repulsion: 500, //节点间斥力大小
								layoutAnimation: true
							},
							edgeSymbol: ["none", "arrow"], //[线开始类型, 线结束类型]
							edgeSymbolSize: [2, 6],
							edgeLabel: {
								show: true,

								fontSize: 10,

								formatter: "{c}"
							},
							data: this.graph.data,
							links: this.graph.links,
							categories: this.graph.categories,

							lineStyle: {
								opacity: 0.9,
								width: 1.3,
								curveness: 0,
								color: "#262626"
							}
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(config);
				window.onresize = function() {
					myChart.resize();
				};
				myChart.getZr().on(
					"click",
					params => {
						if (!params.target) {
							//点击空白处
							(this as any).$emit("jumpwhere", "-1"); // 发送节点id到父组件
						}
					},
					this
				);
				myChart.on(
					"click",
					{ dataType: "node" },
					function(params) {
						(this as any).$emit("jumpwhere", params.dataIndex+""); // 发送节点id到父组件
					},
					this
				);
			}
		}
	});
</script>

<style scoped>
	#pathGraph {
		z-index: 101;
		width: 100vw;
		height: 100vh;
		position: fixed !important;
		background-color: pink;
		opacity: 0.85;
	}
</style>