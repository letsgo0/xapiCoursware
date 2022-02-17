<template>
	<div class="main">
		<div class="tipBorder"></div>
		<div class="aside">
			<div class="user-aside">
				<el-select
					class="d-none search-btn-shrink"
					v-model="value"
					multiple
					filterable
					remote
					reserve-keyword
					size="large"
					placeholder="搜索知识点"
					:remote-method="remoteMethod"
					:loading="loading"
				>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
			</div>
			<div class="dir-aside">
				<div class="aside-group">
					<p
						class="aside-1stlevel"
						:class="{ 'border-active': whichSubDir == '介绍' }"
					>
						<router-link
							to="/home/YouShouldKnow.html#介绍"
							id="dir-介绍"
							exact-active-class="active"
							:class="{
								active: whichSubDir == '介绍'
							}"
							>介绍</router-link
						>
					</p>
					<ul class="aside-links">
						<li>
							<router-link
								class="aside-link"
								to="/home/YouShouldKnow.html#目标"
								id="dir-目标"
								:class="{
									'border-active': whichSubDir == '目标',
									active: whichSubDir == '目标'
								}"
								>目标</router-link
							>
						</li>
						<li>
							<router-link
								class="aside-link"
								to="/home/YouShouldKnow.html#起点技能"
								id="dir-起点技能"
								:class="{
									'border-active': whichSubDir == '起点技能',
									active: whichSubDir == '起点技能'
								}"
								>起点技能</router-link
							>
						</li>
						<li>
							<router-link
								class="aside-link"
								to="/home/YouShouldKnow.html#回顾一下"
								:class="{
									'border-active': whichSubDir == '回顾一下',
									active: whichSubDir == '回顾一下'
								}"
								id="dir-回顾一下"
								>回顾一下</router-link
							>
							<ul class="aside-sub">
								<li>
									<router-link
										id="dir-复杂度"
										:class="{
											'border-active': whichSubDir == '复杂度',
											active: whichSubDir == '复杂度'
										}"
										class="aside-link"
										to="/home/YouShouldKnow.html#复杂度"
										>复杂度</router-link
									>
								</li>
								<li>
									<router-link
										id="dir-存储结构"
										:class="{
											'border-active': whichSubDir == '存储结构',
											active: whichSubDir == '存储结构'
										}"
										class="aside-link"
										to="/home/YouShouldKnow.html#存储结构"
										>存储结构</router-link
									>
									<ul class="aside-2nd-sub">
										<li>
											<routerLink
												id="dir-顺序表"
												:class="{
													'border-active': whichSubDir == '顺序表',
													active: whichSubDir == '顺序表'
												}"
												class="aside-link"
												to="/home/YouShouldKnow.html#顺序表"
												>顺序表</routerLink
											>
											<ul class="aside-3rd-sub">
												<li>
													<routerLink
														id="dir-顺序表-特点"
														:class="{
															'border-active': whichSubDir == '顺序表-特点',
															active: whichSubDir == '顺序表-特点'
														}"
														class="aside-link"
														to="/home/YouShouldKnow.html#顺序表-特点"
														>特点</routerLink
													>
												</li>
												<li>
													<routerLink
														id="dir-顺序表-时间复杂度"
														:class="{
															'border-active':
																whichSubDir == '顺序表-时间复杂度',
															active: whichSubDir == '顺序表-时间复杂度'
														}"
														class="aside-link"
														to="/home/YouShouldKnow.html#顺序表-时间复杂度"
														>时间复杂度</routerLink
													>
												</li>
											</ul>
										</li>
										<li>
											<routerLink
												id="dir-链表"
												:class="{
													'border-active': whichSubDir == '链表',
													active: whichSubDir == '链表'
												}"
												class="aside-link"
												to="/home/YouShouldKnow.html#链表"
												>链表</routerLink
											>
											<ul class="aside-3rd-sub">
												<li>
													<routerLink
														id="dir-链表-特点"
														:class="{
															'border-active': whichSubDir == '链表-特点',
															active: whichSubDir == '链表-特点'
														}"
														class="aside-link"
														to="/home/YouShouldKnow.html#链表-特点"
														>特点</routerLink
													>
												</li>
												<li>
													<routerLink
														id="dir-链表-时间复杂度"
														:class="{
															'border-active': whichSubDir == '链表-时间复杂度',
															active: whichSubDir == '链表-时间复杂度'
														}"
														class="aside-link"
														to="/home/YouShouldKnow.html#链表-时间复杂度"
														>时间复杂度</routerLink
													>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="aside-group">
					<p
						class="aside-1stlevel"
						:class="{ 'border-active': whichSubDir == '内部与外部排序' }"
					>
						<routerLink
							id="dir-内部与外部排序"
							exact-active-class="active"
							to="/home/InternalAndExternalSort.html#内部与外部排序"
							:class="{
								active: whichSubDir == '内部与外部排序'
							}"
						>
							内部与外部排序
						</routerLink>
					</p>
					<ul class="aside-links">
						<li>
							<router-link
								class="aside-link"
								to="/home/InternalAndExternalSort.html#什么是内部排序"
								id="dir-什么是内部排序"
								:class="{
									'border-active': whichSubDir == '什么是内部排序',
									active: whichSubDir == '什么是内部排序'
								}"
							>
								什么是内部排序
							</router-link>
							<ul class="aside-sub">
								<li>
									<router-link
										id="dir-稳定排序"
										:class="{
											'border-active': whichSubDir == '稳定排序',
											active: whichSubDir == '稳定排序'
										}"
										class="aside-link"
										to="/home/InternalAndExternalSort.html#稳定排序"
										>稳定排序</router-link
									>
								</li>
							</ul>
						</li>

						<li>
							<router-link
								class="aside-link"
								to="/home/InternalAndExternalSort.html#什么是外部排序"
								id="dir-什么是外部排序"
								:class="{
									'border-active': whichSubDir == '什么是外部排序',
									active: whichSubDir == '什么是外部排序'
								}"
								>什么是外部排序</router-link
							>
						</li>
					</ul>
				</div>
				<div class="aside-group">
					<p
						class="aside-1stlevel"
						:class="{ 'border-active': whichSubDir == '内部排序分类' }"
					>
						<routerLink
							id="dir-内部排序分类"
							exact-active-class="active"
							to="/home/InternalSortTypes/Types.html"
							:class="{
								active: whichSubDir == '内部排序分类'
							}"
						>
							内部排序分类
						</routerLink>
					</p>
					<ul class="aside-links">
						<li>
							<router-link
								class="aside-link"
								to="/home/InternalSortTypes/Insertion/BasicInfo.html"
								id="dir-插入类"
								:class="{
									'border-active': whichSubDir == '插入类',
									active: whichSubDir == '插入类'
								}"
								>插入类</router-link
							>
							<ul class="aside-sub">
								<li>
									<router-link
										id="dir-基本思想"
										:class="{
											'border-active': whichSubDir == '基本思想',
											active: whichSubDir == '基本思想'
										}"
										class="aside-link"
										to="/home/InternalSortTypes/Insertion/BasicInfo.html"
										>基本思想</router-link
									>
								</li>
								<li>
									<router-link
										id="dir-直接插入排序"
										:class="{
											'border-active': whichSubDir == '直接插入排序',
											active: whichSubDir == '直接插入排序'
										}"
										class="aside-link"
										to="/home/InternalSortTypes/Insertion/SingleInsertionSorting.html"
										>直接插入排序</router-link
									>
								</li>
								<li>
									<router-link
										id="dir-折半插入排序"
										:class="{
											'border-active': whichSubDir == '折半插入排序',
											active: whichSubDir == '折半插入排序'
										}"
										class="aside-link"
										to="/home/InternalSortTypes/Insertion/BinaryInsertionSorting.html"
										>折半插入排序</router-link
									>
								</li>
								<li>
									<router-link
										id="dir-希尔排序"
										:class="{
											'border-active': whichSubDir == '希尔排序',
											active: whichSubDir == '希尔排序'
										}"
										class="aside-link"
										to="/home/InternalSortTypes/Insertion/ShellsSorting.html"
										>希尔排序</router-link
									>
								</li>
								<li>
									<router-link
										id="dir-插入类-试一试<"
										:class="{
											'border-active': whichSubDir == '插入类-试一试<',
											active: whichSubDir == '插入类-试一试<'
										}"
										class="aside-link"
										to="/home/InternalSortTypes/Insertion/Try.html"
										>T1-试一试</router-link
									>
								</li>
								<li>
									<router-link
										id="dir-插入类-优化"
										:class="{
											'border-active': whichSubDir == '插入类-优化',
											active: whichSubDir == '插入类-优化'
										}"
										class="aside-link"
										to="/home/InternalSortTypes/Insertion/DoBetter.html"
										>Q1-优化</router-link
									>
								</li>
							</ul>
						</li>
						<li>
							<router-link
								class="aside-link"
								:to="{ name: 'TODO' }"
								id="dir-交换类"
								:class="{
									'border-active': whichSubDir == '交换类',
									active: whichSubDir == '交换类'
								}"
								>交换类</router-link
							>
						</li>
						<li>
							<router-link
								class="aside-link"
								:to="{ name: 'TODO' }"
								id="dir-选择类"
								:class="{
									'border-active': whichSubDir == '选择类',
									active: whichSubDir == '选择类'
								}"
								>选择类</router-link
							>
						</li>
						<li>
							<router-link
								class="aside-link"
								:to="{ name: 'TODO' }"
								id="dir-归并类"
								:class="{
									'border-active': whichSubDir == '归并类',
									active: whichSubDir == '归并类'
								}"
								>归并类</router-link
							>
						</li>
						<li>
							<router-link
								class="aside-link"
								:to="{ name: 'TODO' }"
								id="dir-分配类"
								:class="{
									'border-active': whichSubDir == '分配类',
									active: whichSubDir == '分配类'
								}"
								>分配类</router-link
							>
						</li>
					</ul>
				</div>
				<div class="aside-group">
					<p
						class="aside-1stlevel"
						:class="{ 'border-active': whichSubDir == '复杂度和稳定性比较' }"
					>
						<router-link
							to="/home/ComplexityAndStability.html#复杂度和稳定性比较"
							id="dir-复杂度和稳定性比较"
							exact-active-class="active"
							:class="{
								active: whichSubDir == '复杂度和稳定性比较'
							}"
							>复杂度和稳定性图表</router-link
						>
					</p>
				</div>
			</div>
			<div class="scrollLeftBtn" v-move="false"></div>
		</div>
		<div class="page">
			<div class="scrollRightBtn" v-move="true"></div>
			<div class="content">
				<router-view></router-view>
			</div>
			<div class="addons">
				<button @click="$router.push({ name: 'Feedback' })">反馈</button>
				<button @click="toTop">到顶</button>
			</div>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, reactive } from "vue";

	export default defineComponent({
		directives: {
			move: {
				mounted(el, binding) {
					el.addEventListener(
						"mousedown",
						function(e) {
							e.stopPropagation();
							// 双重保险
							window.onselectstart = function() {
								return false;
							};
							document.getElementsByTagName("html")[0].style.cssText =
								"moz-user-select: -moz-none;-moz-user-select: none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;";
							const init = e.clientX;
							const aside = document.getElementsByClassName(
								"aside"
							)[0] as HTMLElement;
							const page = document.getElementsByClassName(
								"page"
							)[0] as HTMLElement;
							const scrollRightBtn = document.getElementsByClassName(
								"scrollRightBtn"
							)[0] as HTMLElement;
							const html = document.getElementsByTagName("html")[0];
							let htmlFontSize = parseInt(getComputedStyle(html)["fontSize"]);
							htmlFontSize = htmlFontSize > 0 ? htmlFontSize : 1;
							const tipBorder = document.getElementsByClassName(
								"tipBorder"
							)[0] as HTMLElement;
							const scrollRightBtnLeft = scrollRightBtn.getBoundingClientRect()
								.left;
							const initAsideWidth = aside.getBoundingClientRect().width;
							const startTransForm = 9.4;
							const autoClose = 3.8;
							document.onmousemove = function(e) {
								e.stopPropagation();
								const end = e.clientX;
								if (document.body.clientWidth >= 600) {
									const scrollRightNewBtnLeft = end - init + scrollRightBtnLeft;
									scrollRightBtn.style.cssText =
										"left:" + scrollRightNewBtnLeft + "px";
									page.style.cssText =
										"padding-left: " +
										(scrollRightNewBtnLeft > 0 ? scrollRightNewBtnLeft : 0) +
										"px";
									if (scrollRightNewBtnLeft / htmlFontSize <= startTransForm) {
										// 4rem
										// console.log(" <= 444444444444 + ");
										aside.style.cssText =
											"width:" +
											aside.style.width +
											";transform: translateX(" +
											(scrollRightNewBtnLeft - aside.offsetWidth) +
											"px);";

										if (end / htmlFontSize <= autoClose) {
											// console.log(" <= 22222222222222222");
											tipBorder.style.cssText = "display:block";
										} else {
											tipBorder.style.cssText = "display:none";
										}
									} else {
										aside.style.cssText =
											"width:" +
											scrollRightNewBtnLeft +
											"px; transform: translateX(0px);";
									}
								} else {
									const scrollRightBtnNewLeft = end - init + scrollRightBtnLeft;
									page.style.cssText = "padding-left:0px"; //regard initPagePaddignLeft value as reference
									scrollRightBtn.style.cssText =
										"left:" + scrollRightBtnNewLeft + "px";

									if (scrollRightBtnNewLeft / htmlFontSize <= startTransForm) {
										aside.style.cssText =
											"width:" +
											aside.style.width +
											";transform: translateX(" +
											(scrollRightBtnNewLeft - parseInt(aside.style.width)) +
											"px);";

										if (end / htmlFontSize <= autoClose) {
											// console.log(" <= 22222222222222222");
											tipBorder.style.cssText = "display:block";
										} else {
											tipBorder.style.cssText = "display:none";
										}
									} else {
										console.log("herh");

										aside.style.cssText =
											"width:" +
											(end - init + initAsideWidth) +
											"px; transform: translateX(0px);";
									}
								}
							};
							document.onmouseup = function(e) {
								e.stopPropagation();
								const end = e.clientX;
								if (end / htmlFontSize <= autoClose) {
									tipBorder.style.cssText = "display:none";
									aside.style.cssText =
										"overflow-y:hidden;width:" +
										aside.style.width +
										";transform: translateX(" +
										(0 - aside.offsetWidth) +
										"px);";
									page.style.cssText = "padding-left: 0px";

									scrollRightBtn.style.cssText = "left: 0;";
								}
								document.onmousemove = null;
								document.onmouseup = null;
							};
						},
						false
					);
					el.addEventListener("mouseup", function(e) {
						document.getElementsByTagName("html")[0].style.cssText = "";
						window.onselectstart = function() {
							return true;
						};
					});
				}
			}
		},
		props: {
			whichPage: {
				type: String,
				required: true
			},
			showSideBar: {
				type: Boolean,
				required: false
			}
		},
		setup() {
			const whichSubDir = ref("");
			const asideVisible = false;
			const blured = null;
			return { whichSubDir, blured, asideVisible };
		},
		watch: {
			whichPage: function(newVal) {
				console.log(newVal);
				this.componentId = newVal;
			},
			showSideBar: function() {
				const aside = document.getElementsByClassName("aside")[0] as HTMLElement;
				const page = document.getElementsByClassName("page")[0] as HTMLElement;
				const scrollRightBtn = document.getElementsByClassName(
					"scrollRightBtn"
				)[0] as HTMLElement;
				// if (scrollRightBtn.style.left == "0px") {
				// if (this.asideVisible == false || scrollRightBtn.style.left == "0px") {
				if (this.asideVisible == false) {
					this.asideVisible = true;
					// appear
					aside.style.cssText =
						"transform: translateX(0);width:" + aside.style.width;
					scrollRightBtn.style.cssText = "left:" + aside.style.width;
					if (document.body.clientWidth > 600) {
						page.style.cssText = "padding-left:" + aside.style.width;
					} else {
						page.style.cssText = "padding-left:0";
						// this.$refs.aside.focus();
						// this.blured = false;
					}
				} else {
					this.asideVisible = false;
					// disappear
					aside.style.cssText =
						"transform: translateX(-100%);width:" + aside.style.width;
					scrollRightBtn.style.cssText = "left:0px";
					page.style.cssText = "padding-left:0";
				}
			}
		},
		methods: {
			hideInMobil(event) {
				// console.log(event);
				
				if (document.body.clientWidth <= 600) {
					// console.log(document.activeElement.tagName.toLowerCase());
					
					this.blured = true;
					this.asideVisible = false;
					const aside = document.getElementsByClassName(
						"aside"
					)[0] as HTMLElement;
					const page = document.getElementsByClassName("page")[0] as HTMLElement;
					const scrollRightBtn = document.getElementsByClassName(
						"scrollRightBtn"
					)[0] as HTMLElement;
					// disappear
					aside.style.cssText =
						"transform: translateX(-100%);width:" + aside.style.width;
					scrollRightBtn.style.cssText = "left:0px";
					page.style.cssText = "padding-left:0";
				}
			},
			// 点击按钮，返回顶部
			toTop() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			remoteMethod(query) {
				if (query !== "") {
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
						this.options = this.list.filter(item => {
							return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
						});
					}, 200);
				} else {
					this.options = [];
				}
			},
			scroll() {
				const headList = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
				// console.log(headList.length);

				if (headList.length == 0) {
					return;
				}
				const topList = [];
				headList.forEach(item => {
					topList.push({ id: item.id, y: item.getBoundingClientRect().y });
				});
				topList.sort((a, b) => {
					return a.y - b.y;
				});
				// console.log(topList);

				if (topList[topList.length - 1].y <= 0) {
					this.whichSubDir = topList[topList.length - 1].id;
				} else if (topList[0].y >= 0) {
					this.whichSubDir = topList[0].id;
				} else {
					for (let i = 0; i < topList.length - 1; i++) {
						if (topList[i].y < 0 && topList[i + 1].y >= 0) {
							if ((topList[i].y + topList[i + 1].y) / 2 < 0) {
								this.whichSubDir = topList[i + 1].id;
							} else {
								this.whichSubDir = topList[i].id;
							}
						}
					}
				}
				const hash = decodeURIComponent("#" + this.whichSubDir);
				this.$router.replace({
					hash,
					params: {
						source: "scroll"
					}
				});
			},
			initScrollLeftBtn() {
				// 初始化划动位置
				const leftEle = document.getElementsByClassName(
					"scrollLeftBtn"
				)[0] as HTMLElement;
				const aside = document.getElementsByClassName("aside")[0] as HTMLElement;
				const userAside = document.getElementsByClassName(
					"user-aside"
				)[0] as HTMLElement;
				const dirAside = document.getElementsByClassName(
					"dir-aside"
				)[0] as HTMLElement;
				const left =
					"height: " +
					(parseInt(getComputedStyle(userAside)["height"]) +
						parseInt(getComputedStyle(dirAside)["height"])) +
					"px;";
				// console.log(left);
				leftEle.style.cssText = left;
			},
			initScrollRightBtn() {
				// 初始化划动位置
				const rightEle = document.getElementsByClassName(
					"scrollRightBtn"
				)[0] as HTMLElement;
				const aside = document.getElementsByClassName("aside")[0] as HTMLElement;
				const right = "left:" + getComputedStyle(aside)["width"] + ";";
				console.log(right);
				rightEle.style.cssText = right;
			}
		},
		mounted() {
			this.$nextTick(() => window.addEventListener("scroll", this.scroll));
			this.initScrollLeftBtn();
			// // 搜索框
			// this.list = this.states.map(item => {
			// 	return { value: `value:${item}`, label: `label:${item}` };
			// });
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
				feedback: false,
				content: ""
			};
		},
		// updated() {
		// 	console.log('main updated');

		// 	this.initScrollRightBtn()
		// },
	});
</script>

<style scoped>
	/* 电脑 */
	@media screen and (min-width: 1024px) {
		.page {
			padding-left: 12rem;
		}
		.aside {
			width: 12rem;
		}
		.scrollRightBtn {
			left: 12rem;
		}
	}
	/* 平板 */
	@media screen and (max-width: 1024px) {
		.page {
			padding-left: 10rem;
		}
		.aside {
			width: 10rem;
			opacity: 1;
		}
		.scrollRightBtn {
			left: 10rem;
		}
	}
	/* 较小平板 */
	@media screen and (max-width: 800px) {
		.page {
			padding-left: 9.3rem;
		}
		.aside {
			width: 9.3rem;
		}
		.scrollRightBtn {
			left: 9.3rem;
		}
	}
	/* 手机 */
	@media screen and (max-width: 600px) {
		.page {
			padding-left: 0rem;
		}
		.content {
			padding: 2rem 0.5rem !important;
		}
		.aside {
			width: 9.3rem;
		}
		.scrollRightBtn {
			left: 9.3rem;
		}
	}
	.addons {
		position: fixed;
		right: 0rem;
		box-sizing: border-box;
		top: 85%;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.addons > * {
		display: block;
		text-align: right;
		padding-right: 0.2rem;
		padding-left: 0.2rem;
		background-color: #2f2a2a;
		color: aliceblue;
		border-radius: 0.2rem;
	}
	.search-btn-shrink {
		display: none;
	}
	@media screen and (max-width: 430px) {
		.search-btn-shrink {
			display: block;
		}
	}
	a.active {
		color: #3eaf7c !important;
		font-weight: bold !important;
	}
	.border-active {
		border-left-color: green !important;
		transition-property: border-left !important;
		transition-duration: 3s !important;
		transition-timing-function: cubic-bezier(0.7, 0, 0.11, 0.61) !important;
		transition-delay: 0.2s !important;
	}
	.main {
		position: relative;
		background-color: antiquewhite;
		padding-bottom: 100px;
	}
	.page {
		display: block;
		padding-bottom: 2rem;
		position: relative;
	}
	.content {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 2rem;
	}
	.aside {
		position: fixed;
		top: 2.8rem;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		border-right: 1px solid #eaecef;
		overflow-y: scroll;
		font-size: 16px;
		margin: 0;
		z-index: 99;
		background-color: antiquewhite;
	}
	.aside .scrollLeftBtn {
		min-height: 100vh;
		width: 0.3rem;
		opacity: 0;
		/* border-left: 0.15rem solid transparent; */
		position: absolute;
		top: 0;
		right: 0;
		z-index: 50;
		cursor: col-resize;
		background-color: rgb(131, 115, 93);
	}
	.page .scrollRightBtn {
		min-height: 100vh;
		width: 0.3rem;
		opacity: 0;
		/* border-left: 0.15rem solid transparent; */
		position: fixed;
		top: 0;
		z-index: 50;
		cursor: col-resize;
		background-color: rgb(102, 88, 70);
	}
	.tipBorder {
		width: 0.3rem;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 71;
		display: none;
		background-color: #3eaf7c;
		color: #3eaf7c;
	}
	.aside > .dir-aside > div:not(:first-child) {
		margin-top: 0.75rem;
	}
	.aside a {
		text-decoration: none;
		color: black;
	}
	.aside a:hover {
		color: #3eaf7c;
	}
	.dir-aside {
		padding: 1.5rem 0;
	}
	.aside-1stlevel {
		font-size: 1.1em;
		font-weight: 700;
		padding: 0.35rem 1.5rem 0.35rem 1.25rem;
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		border-left: 0.25rem solid transparent;
		border-top-left-radius: 0.2rem;
		border-bottom-left-radius: rem;
		transition: color 0.15s ease;
	}
	.aside-1stlevel a {
		width: 100%;
		display: block;
	}
	.aside-links {
		transition: height 0.1s ease-out;
		font-size: 0.95em;
		overflow: hidden;
	}
	.aside-sub {
		/* padding-left: 1rem; */
		font-size: 0.95em;
	}
	.aside-link {
		font-size: 1em;
		font-weight: 400;
		display: inline-block;
		color: #2c3e50;
		border-left: 0.25rem solid transparent;

		border-top-left-radius: 1rem;
		border-bottom-left-radius: 0rem;
		padding: 0.35rem 1rem 0.35rem 2rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
	}
	.aside-sub .aside-link {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		padding-left: 2.75rem;
	}
	.aside-2nd-sub .aside-link {
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		padding-left: 3.5rem;
	}
	.aside-3rd-sub .aside-link {
		padding-top: 0.15rem;
		padding-bottom: 0.15rem;
		padding-left: 4.25rem;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
	.aside-1stlevel ol,
	p,
	ul {
		line-height: 1.7;
	}
</style>		