<template>
	<div class="home" @mousemove="moveEvent" @click="moveEvent">
		<div class="header w-100">
			<Header @toggleSideBar="showSideBar = !showSideBar">
				<!-- <template v-slot:toggle>
					<a
						@click="showPathGraph = !showPathGraph"
						style="cursor: pointer;"
						class=" aNo rounded mr-2"
					>
						路径
					</a>
				</template> -->
				<template v-slot:exit>
					<span
						class="btn btn-secondary"
						style="color:black;background-color:white"
						@click="exit"
					>
						退出
					</span>
				</template>
				<template v-slot:manageExit>
					<span @click="exit">退出</span>
				</template>
			</Header>
		</div>
		<div class="w-100 h-100">
			<!-- <PathGraph v-show="showPathGraph" @jumpwhere="jumpwhere"></PathGraph> -->
			<Main :whichPage="whichPage" :showSideBar="showSideBar">
				<template v-slot:footer>
					<div class="footer">
						<Footer></Footer>
					</div>
				</template>
			</Main>
		</div>
	</div>
</template>
<script lang="ts">
	import { defineComponent, ref } from "vue";
	import Header from "./Header.vue";
	import PathGraph from "./PathGraph.vue";
	import Main from "./Main.vue";
	import Footer from "@/components/Footer.vue";
	import { ElMessage } from "element-plus";
	import { useRouter } from "vue-router";
	import { useStore } from "vuex";
	import { Statement } from "@xapi/xapi";

	export default defineComponent({
		name: "home",
		components: {
			Main,
			// PathGraph,
			Header,
			Footer
		},
		setup() {
			const showSideBar = ref(true);
			const showPathGraph = ref(true);
			const whichPage = ref("1"); //默认为主界面
			function jumpwhere(id) {
				console.log("node id is " + id);
				showPathGraph.value = false;
				if (id == "-1") {
					// click empty part, toggle directly
				} else {
					whichPage.value = id;
				}
			}
			let timer = null;
			const router = useRouter();
			const store = useStore();
			function initTimer() {
				timer = setTimeout(() => {
					store.commit("exit");
					router.push({ name: "login" });
				}, 10 * 60 * 1000);
			}
			function moveEvent() {
				if (router.currentRoute.value.name != "login") {
					clearTimeout(timer);
					initTimer();
				}
			}
			return { moveEvent, showPathGraph, jumpwhere, showSideBar, whichPage };
		},
		data() {
			return {
				// 搜索框
				options: [],
				value: [],
				list: [],
				loading: false,
				states: [
					"Alabama",
					"Alaska",
					"Arizona",
					"Florida",
					"Georgia",
					"Kansas",
					"Kentucky"
				],

			};
		},
		methods: {
			exit() {
				this.$store.commit("exit");
				this.$router.go(0);
			}
		},
		mounted() {
			// call it by hand to confirm it runs
			this.moveEvent();
			// ElMessage.success({
			// 	showClose: true,
			// 	message: '点击左上角"路径"按钮可查看知识结构',
			// 	type: "success"
			// 	// duration: 5000
			// });
		},
	});
</script>

<style scoped>
	.footer {
		position: absolute;
		bottom: 0;
		margin: 0 auto;
		z-index: 99;
	}
	.home {
		padding-bottom: 5rem;
	}
	.header {
		position: fixed;
		padding: 0.2rem 1.5rem 0.4rem 1.5rem;
		line-height: 2.2rem;
		height: 2.8rem;
		top: 0;
		right: 0;
		z-index: 100;
		background-color: black;
		color: white;
	}
	.aNo {
		text-decoration: none;
		color: white;
	}
	@media screen and (max-width: 1024px) {
		.header {
			padding-left: 3rem !important;
		}
	}
	@media screen and (max-width: 800px) {
		.header {
			padding-left: 2rem !important;
		}
	}
</style>