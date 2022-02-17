<template>
	<h1 id="基本思想"><a href="#基本思想" class="header-anchor">#</a>基本思想</h1>
	<p>
		每一趟将一个待排序的元素，按其关键字的大小插入到已经排好序的一组记录的适当位置上，直到所有待排序记录全部插入为止。
	</p>
	<p>
		例如，打扑克牌在抓牌时要保证抓到手里的纸牌有序排列，每抓一张牌，就插入到合适的位置，直到抓牌结束，这样手里的牌就是一个有序序列。下图中的动作采用顺序查找，从右向左查找插入位置。
	</p>
	<div class="card-parent">
		<div class="card-btn">
			<button class="btn-warning" id="card-play">播放</button>
			<button class="btn-warning" id="card-pause">暂停</button>
			<button class="btn-warning" id="card-reverse">倒退</button>
			<button class="btn-warning" id="card-restart">重放</button>
			<select v-model="playRate">
				<option disabled value="">请选择播放速度</option>
				<option>0.75</option>
				<option>1</option>
				<option>1.25</option>
				<option>1.5</option>
				<option>2</option>
			</select>
		</div>
		<template v-for="item in items" :key="item.id">
			<img
				:style="'z-index:' + item.id"
				:id="'img_' + item.id"
				:src="item.url"
				:alt="'card ' + item.id"
			/>
		</template>
	</div>
	<p>
		可以选择不同的方法在已排好序的元素中寻找插入位置。根据查找方法，典型的有直接插入排序和折半插入排序。
	</p>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { gsap } from "gsap";
	import { ElMessage } from "element-plus";
	import { Statement } from "@xapi/xapi";

	export default defineComponent({
		data() {
			const items = [];
			const notOrder = [13, 10, 9, 4, 1, 8, 6, 2, 11, 3, 5, 12, 7];
			const path = "../../../assets/img/heartsgroup/";
			const type = ".svg";
			return {
				order: [],
				notOrder,
				items,
				tl: null,
				path,
				type,
				playRate: "",
				cardRenderFlag: false,
				popular: 0
			};
		},
		watch: {
			playRate: function(newVal) {
				if (true == this.cardRenderFlag) {
					this.tl.timeScale(newVal);
				}
			}
		},
		methods: {
			cardRun() {
				const parent = document.getElementsByClassName("card-parent")[0];
				const img = document.getElementsByTagName("img")[0];
				const pWidth = parseInt(getComputedStyle(parent)["width"]);
				const pHeight = parseInt(getComputedStyle(parent)["height"]);
				const imgWidth = parseInt(getComputedStyle(img)["width"]);
				const imgHeight = parseInt(getComputedStyle(img)["height"]);
				const moveX = imgWidth / 2;
				const moveY = imgHeight;
				const tl = gsap.timeline({ paused: true });
				for (let i = 0; i < this.notOrder.length; i++) {
					const key = this.notOrder[i];
					const y = pHeight - 2 * imgHeight;
					if (i == this.notOrder.length - 1) {
						tl.to("#img_14", { display: "none", duration: 0.2 }, ">");
					}
					if (this.order.length == 0) {
						const x = pWidth / 2 + (imgWidth * (this.order.length - 1)) / 2;
						tl.to("#img_" + key, { left: x, top: y, duration: 1 }, ">");
					} else {
						// const x = (imgWidth * this.order.length) / 2 + pWidth / 2;
						const x = (imgWidth * (this.order.length - 1)) / 4 + pWidth / 2;
						tl.to("#img_" + key, { left: x, top: y, duration: 1 }, ">");
					}
					let j = this.order.length - 1;
					for (; j >= 0; j--) {
						tl.to(
							"#img_" + this.order[j],
							{ duration: 0.5, boxShadow: "0px 0px 2px 1px red" },
							">"
						);
						tl.to("#img_" + this.order[j], { duration: 0.2, boxShadow: "" }, ">");
						if (key < this.order[j]) {
							tl.to(
								"#img_" + this.order[j],
								{ x: "+=" + moveX, duration: 0.5 },
								">"
							);
							tl.to("#img_" + key, { x: "-=" + moveX, duration: 0.5 }, "-=0.2");
						} else {
							tl.to("#img_" + key, { y: "+=" + moveY, duration: 0.5 }, ">");
							this.order.splice(j + 1, 0, key);
							break;
						}
					}
					if (j == -1) {
						tl.to("#img_" + key, { y: "+=" + moveY, duration: 0.5 }, ">");
						this.order.splice(0, 0, key);
					}
					if (this.order.length > 1) {
						const selector = "#img_" + this.order.join(",#img_");
						tl.to(selector, { left: "-=" + moveX / 2, duration: 0.5 }, ">");
					}
				}
				this.tl = tl;
			}
		},
		mounted() {
			this.items.push({
				url: require("../../../assets/img/heartsgroup/14.svg"),
				id: 14
			});
			for (let i = 0; i < this.notOrder.length; i++) {
				this.items.push({
					url: require("../../../assets/img/heartsgroup/" +
						this.notOrder[i] +
						".svg"),
					id: this.notOrder[i]
				});
			}
			document.getElementById("card-play").addEventListener("click", () => {
				if (false == this.cardRenderFlag) {
					(this.cardRenderFlag = true), this.cardRun();
				}
				this.popular++;
				this.tl.play();
			});
			document.getElementById("card-pause").addEventListener("click", () => {
				if (false == this.cardRenderFlag) {
					(this.cardRenderFlag = true), this.cardRun();
				}
				this.tl.pause();
			});
			document.getElementById("card-reverse").addEventListener("click", () => {
				if (false == this.cardRenderFlag) {
					(this.cardRenderFlag = true), this.cardRun();
				}
				this.tl.reverse();
			});
			document.getElementById("card-restart").addEventListener("click", () => {
				if (false == this.cardRenderFlag) {
					(this.cardRenderFlag = true), this.cardRun();
				}
				this.popular++;
				// console.log(this.popular);

				this.tl.restart();
			});
		},
		beforeUnmount() {
			const stat: Statement = {
				actor: {
					name: this.$store.state.user.User.name,
					mbox: "mailto:" + this.$store.state.user.User.email,
					objectType: "Agent"
				},
				verb: {
					id: "http://activitystrea.ms/schema/1.0/watch",
					display: { "en-US": "watched", "zh-CN": "观看了" }
				},
				object: {
					id: "http://example.com/activities/card-sort-motion-graph",
					definition: {
						type: "http://activitystrea.ms/schema/1.0/video",
						name: {
							"zh-CN": "卡牌移动过程"
						}
					},
					objectType: "Activity"
				},
				result: {
					response: JSON.stringify({ watchTimes: this.popular })
				}
			};
			this.$store.state.user.myXAPI.sendStatement(stat).then(
				value => {
					return true;
				},
				reason => {
					ElMessage.error("网络或LRS好像出小差了！");
				}
			);
		}
	});
</script>

<style scoped>
	.card-parent {
		position: relative;
		width: 100%;
		min-height: 12rem;
		background-color: #f3e2c2;
		padding: 0.5rem;
		line-height: 1.7;
		margin-top: 2rem;
		-webkit-margin-before: 1em;
		margin-block-start: 1em;
		-webkit-margin-after: 1em;
		margin-block-end: 1em;
		-webkit-margin-start: 0;
		margin-inline-start: 0;
		-webkit-margin-start: 0;
		margin-inline-end: 0;
	}
	.card-parent img {
		position: absolute;
		width: 10%;
		top: 1rem;
		right: 1rem;
	}
	.card-parent .card-btn {
		position: relative;
	}
</style>