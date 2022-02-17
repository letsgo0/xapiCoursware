<template>
	<h1 id="介绍">
		<a href="#介绍" class="header-anchor">#</a>
		介绍
	</h1>
	<p>
		本课件原计划开发内容为《数据结构》中的<span class="keywords">内部排序</span
		>这一部分知识点，这个章节主要内容为内部排序中的五类排序算法：插入类、交换类、选择类、归并类、分配类。
	</p>
	<p>
		课件结构分为四个部分：<span class="keywords">介绍</span>(本页面)、<span
			class="keywords"
			>内部与外部排序</span
		>(基本概念)、<span class="keywords">内部排序</span>(五类排序算法)、<span
			class="keywords"
			>复杂度和稳定性图表</span
		>，如侧栏目录所示。
	</p>
	<p>目前课件基本开发完成了内部排序中的插入类排序算法。</p>
	<p>本课件与LRS数据库结合使用，目前没有提供离线版本。</p>
	<h2 id="目标"><a href="#目标" class="header-anchor">#</a>目标</h2>
	<p>针对目前已开发完成的内容，作者期望您学习课件的收获有：</p>
	<p>1. 理解插入排序的基本思想，</p>
	<p>2. 了解直接插入排序、折半插入排序两种算法的复杂度，</p>
	<p>3. 简单运用三种常用的插入排序算法(直接插入排序、折半插入排序和希尔排序)，</p>
	<p>4. 知道上述三种排序算法的区别和特点。</p>
	<h2 id="起点技能"><a href="#起点技能" class="header-anchor">#</a>起点技能</h2>
	<p>
		本课件演示内容时用到了顺序表和链表结构，伪代码；在交互动作中使用Javascript脚本语言。
	</p>
	<p>
		希望您在学习本内容时已经了解顺序表和链表的基本用法，了解至少一门编程语言的基本语法。
	</p>
	<div class="scard scard-tip">
		<p class="scard-title">提示</p>
		<p class="scard-body">
			如果您暂时还不了解下面的内容，没关系，后面学习需要时再了解也行。
		</p>
	</div>
	<div class="init-skills is-masked ">
		<div class="mask" v-show="!$store.state.isNewLearner.isNewLearner"></div>
		<p class="">
			为了解您第一次使用该学习课件的情况，请根据自己的情况在下面选项打勾，然后点击提交按钮。
		</p>
		<div class="scard">
			<div class="scard-body checkbox">
				<p>
					<input
						type="checkbox"
						v-model="initSkills"
						name="initSkills"
						id="1st-skill"
						value="了解至少一门编程语言"
					/><label for="1st-skill"></label> 了解至少一门编程语言基本语法
				</p>
				<div class="checkbox-sub">
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-C"
							value="C"
						/><label for="lang-C"></label>C</span
					>
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-Java"
							value="Java"
						/><label for="lang-Java"></label>Java</span
					>
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-Python"
							value="Python"
						/><label for="lang-Python"></label>Python</span
					>
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-C++"
							value="C++"
						/><label for="lang-C++"></label>C++</span
					>
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-C#"
							value="C#"
						/><label for="lang-C#"></label>C#</span
					>
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-JavaScript"
							value="JavaScript"
						/><label for="lang-JavaScript"></label>JavaScript</span
					>
					<span
						><input
							type="checkbox"
							v-model="languages"
							id="lang-PHP"
							value="PHP"
						/><label for="lang-PHP"></label>PHP</span
					>
					<div class="checkbox-other">
						<span>
							<input
								class="input-text"
								type="text"
								v-model="otherLanguage"
								placeholder="其他语言，多种语言以空格分开"
							/>
						</span>
					</div>
				</div>
				<p>
					<input
						type="checkbox"
						v-model="initSkills"
						name="initSkills"
						id="2nd-skill"
						value="了解顺序表和链表"
					/><label for="2nd-skill"></label> 了解顺序表和链表，能独立画出草图
				</p>

				<button class="btn-warning " @click="sendInitSkills">
					提交
				</button>
				<p
					style="color:red"
					v-show="false == $store.state.isNewLearner.isNewLearner"
				>
					您已经提交过记录了(有问题可以提交反馈哟)
				</p>
			</div>
		</div>
	</div>
	<h2 id="回顾一下"><a href="#回顾一下" class="header-anchor">#</a>回顾一下</h2>
	<h3 id="复杂度"><a href="#复杂度" class="header-anchor">#</a>复杂度</h3>
	<p>
		下图为常见复杂度的曲线图。可以看出，当n大于5后，各项复杂度函数的值差距逐渐增大。
	</p>
	<div class="img">
		<img
			class="w-100"
			src="../../assets/img/O.png"
			alt="复杂度曲线图"
			srcset=""
		/>
	</div>

	<h3 id="存储结构"><a href="#存储结构" class="header-anchor">#</a>存储结构</h3>
	<h4 id="顺序表"><a href="#顺序表" class="header-anchor">#</a>顺序表</h4>
	<p>
		是指用一组连续的存储单元，依次存储线性表中的各个元素，从而使得逻辑上相邻的元素在
		<span class="keywords">物理位置上也相邻</span>
		。
	</p>
	<div class="img">
		<img class="w-100" src="../../assets/img/orderedList.png" />
	</div>
	<h5 id="顺序表-特点">
		<a href="#顺序表-特点" class="header-anchor">#</a>顺序表-特点
	</h5>

	<p>
		1. 根据首元素地址和元素序号，可以<span class="keywords">随机存取</span>，
	</p>

	<p>2. 元素的插入和删除需要<span class="keywords">移动大量</span>的元素，</p>
	<p>
		3. 存储分配需要一段<span class="keywords">连续</span>的存储空间，不够灵活。
	</p>

	<h5 id="顺序表-时间复杂度">
		<a href="#顺序表-时间复杂度" class="header-anchor">#</a>顺序表-时间复杂度
	</h5>
	<div class="scard is-masked">
		<div class="mask" v-show="!$store.state.sequenceList.notInputed"></div>
		<p class="">
			假定顺序表长为n，在平均情况下
		</p>
		<ul class="">
			<li>
				<span>某位置i插入元素，时间复杂度为O(</span>
				<input
					type="text"
					class="input-text "
					aria-label="how much it will take"
					placeholder="输入有关n的表达式"
					v-model="insertTimes"
				/>
				<span>)</span>
				<span
					class="mathRender ref-answer"
					type="text"
					v-show="false == $store.state.sequenceList.notInputed"
					>参考：\(O(n)\)</span
				>
			</li>

			<li>
				<span>删除某位置元素，时间复杂度为O(</span>
				<input
					type="text"
					class="input-text d-inline-block"
					aria-label="how much it will take"
					placeholder="输入有关n的表达式"
					v-model="deleteTimes"
				/>
				<span>)</span>
				<span
					class="mathRender ref-answer"
					type="text"
					v-show="false == $store.state.sequenceList.notInputed"
					>参考：\(O(n)\)</span
				>
			</li>
			<li>
				<span>按序号查找某元素，时间复杂度为O(</span>
				<input
					type="text"
					class="input-text d-inline-block"
					aria-label="how much it will take"
					placeholder="输入有关n的表达式"
					v-model="queryByOrderTimes"
				/>
				<span>)</span>
				<span
					class="mathRender ref-answer"
					type="text"
					v-show="false == $store.state.sequenceList.notInputed"
					>参考：\(O(1)\)</span
				>
			</li>
			<li>
				<span>按值查找某元素，时间复杂度为O(</span>
				<input
					type="text"
					class="input-text d-inline-block"
					aria-label="how much it will take"
					placeholder="输入有关n的表达式"
					v-model="queryByValTimes"
				/>
				<span>)</span>
				<span
					class="mathRender ref-answer"
					type="text"
					v-show="false == $store.state.sequenceList.notInputed"
					>参考：\(O(n)\)</span
				>
			</li>
		</ul>
		<button class="btn-warning" @click="sendSequenceListTimes">提交</button>
		<p style="color:red" v-show="false == $store.state.sequenceList.notInputed">
			您已经提交过记录了(有问题可以提交反馈哟)
		</p>
	</div>

	<h4 id="链表"><a href="#链表" class="header-anchor">#</a>链表</h4>
	<p>
		以单链表为例，是指通过一组任意的存储单元来存储线性表中的元素，每个元素之间的逻辑关系有存储<span
			class="keywords"
			>单元中的指针部分</span
		>建立起来。
	</p>
	<div class="img">
		<img class="w-100" src="../../assets/img/linkedList.png" />
	</div>
	<h5 id="链表-特点">
		<a href="#链表-特点" class="header-anchor">#</a>链表-特点
	</h5>
	<p>
		1. 单链表的存储单元是<span class="keywords">不连续</span
		>的，因此无论是查找第i个元素，还是查找具有某个值的元素，都只能从头节点出发。
	</p>
	<h5 id="链表-时间复杂度">
		<a href="#链表-时间复杂度" class="header-anchor">#</a>链表-时间复杂度
	</h5>
	<div class="scard is-masked ">
		<div class="mask" v-show="!$store.state.linkedList.notInputed"></div>
		<p class="">
			假定单链表长为n，平均情况下
		</p>
		<ul class="">
			<li>
				<span>查找元素的时间复杂度为O(</span>
				<input
					type="text"
					class="input-text"
					aria-label="how much it will take"
					placeholder="输入有关n的表达式"
					v-model="linkedListQueryByValTimes"
				/>
				<span>)</span>
				<span
					class="mathRender ref-answer"
					type="text"
					v-show="false == $store.state.linkedList.notInputed"
					>参考：\(O(n)\)</span
				>
			</li>
		</ul>
		<button class="btn-warning" @click="sendLinkedListTimes">提交</button>
		<p style="color:red" v-show="false == $store.state.linkedList.notInputed">
			您已经提交过记录了(有问题可以提交反馈哟)
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, reactive } from "vue";
	import { Statement, GetStatementsQuery, StatementsResponse } from "@xapi/xapi";
	import { ElMessage, ElMessageBox } from "element-plus";
	import { AxiosResponse } from "axios";

	export default defineComponent({
		data() {
			return {
				initSkills: [],
				languages: [],
				otherLanguage: "",

				insertTimes: "",
				deleteTimes: "",
				queryByOrderTimes: "",
				queryByValTimes: "",

				linkedListQueryByValTimes: ""
			};
		},

		methods: {
			async getLinkedListTimes() {
				if (this.$store.state.linkedList.notInputed != null) {
					// return directly, the work does before
					this.linkedListQueryByValTimes = this.$store.state.linkedList.queryByValTimes;
					return;
				}
				const query: GetStatementsQuery = {
					agent: {
						objectType: "Agent",
						mbox: "mailto:" + this.$store.state.user.User.email
					},
					// verb: Verbs.COMPLETED.id,
					verb: "http://activitystrea.ms/schema/1.0/complete",
					activity:
						"http://example.com/activities/linked-list-basic-operation-times",
					ascending: true,
					limit: 1,
					format: "exact"
				};
				let notInputed = null;
				[
					notInputed,
					this.linkedListQueryByValTimes
				] = await this.$store.state.user.myXAPI
					.getStatements(query)
					.then((result: AxiosResponse) => {
						const statementsResponse: StatementsResponse = result.data;
						//console.log(statementsResponse);
						if (statementsResponse.statements.length == 0) {
							return [true, ""];
						} else {
							const result = statementsResponse.statements[0].result;

							const linkedListQueryByValTimes =
								result.extensions[
									"http://example.com/activities/linked-list-basic-operation-times/queryByValTimes"
								] || "";
							return [false, linkedListQueryByValTimes];
						}
					});
				this.$store.commit("linkedList/setNotInputed", notInputed);
				this.$store.commit(
					"linkedList/setQueryByValTimes",
					this.linkedListQueryByValTimes
				);
			},
			async sendLinkedListTimes() {
				if (this.$store.state.linkedList.notInputed == false) {
					ElMessage.error("您已经提交过记录了(有问题可以提交反馈哟)");
					return;
				}
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
							id:
								"http://example.com/activities/linked-list-basic-operation-times",
							definition: {
								type: "http://adlnet.gov/expapi/activities/assessment",
								name: {
									"en-us": "linked-list-basic-operation-times",
									"zh-CN": "链表基本操作复杂度"
								}
							},
							objectType: "Activity"
						},
						result: {
							completion: true,
							response: "链表",
							extensions: {
								"http://example.com/activities/linked-list-basic-operation-times/queryByValTimes": this
									.linkedListQueryByValTimes
							}
						}
					};
					const p = await this.$store.state.user.myXAPI.sendStatement(stat).then(
						value => {
							return value.status;
						},
						reason => {
							// console.log("failed");
							// console.log(reason);
							const re = /status code ([0-9]{3,3})/;
							reason += "";
							if (reason.match(re)) {
								return reason.match(re)[1];
							} else {
								return -1;
							}
						}
					);
					if (p == 200) {
						this.$store.commit("linkedList/setNotInputed", false);
						this.$store.commit(
							"linkedList/setQueryByValTimes",
							this.linkedListQueryByValTimes
						);
					} else {
						ElMessage.error("发送失败，LRS或者网络可能出了问题哟");
					}
				}
			},
			async getSequenceListTimes() {
				// console.log(" youshould mounted this.$store.state");
				// console.log(this.$store.state);

				if (this.$store.state.sequenceList.notInputed != null) {
					// return directly, the work does before
					this.insertTimes = this.$store.state.sequenceList.insertTimes;
					this.deleteTimes = this.$store.state.sequenceList.deleteTimes;
					this.queryByOrderTimes = this.$store.state.sequenceList.queryByOrderTimes;
					this.queryByValTimes = this.$store.state.sequenceList.queryByValTimes;

					return;
				}
				const query: GetStatementsQuery = {
					agent: {
						objectType: "Agent",
						mbox: "mailto:" + this.$store.state.user.User.email
					},
					// verb: Verbs.COMPLETED.id,
					verb: "http://activitystrea.ms/schema/1.0/complete",
					activity:
						"http://example.com/activities/sequence-list-basic-operation-times",
					ascending: true,
					limit: 1,
					format: "exact"
				};
				let notInputed = null;
				[
					notInputed,
					this.insertTimes,
					this.deleteTimes,
					this.queryByOrderTimes,
					this.queryByValTimes
				] = await this.$store.state.user.myXAPI
					.getStatements(query)
					.then((result: AxiosResponse) => {
						const statementsResponse: StatementsResponse = result.data;
						//console.log(statementsResponse);
						if (statementsResponse.statements.length == 0) {
							return [true, "", "", "", ""];
						} else {
							const result = statementsResponse.statements[0].result;

							const insertTimes =
								result.extensions[
									"http://example.com/activities/sequence-list-basic-operation-times/insertTimes"
								] || "";

							const deleteTimes =
								result.extensions[
									"http://example.com/activities/sequence-list-basic-operation-times/deleteTimes"
								] || "";

							const queryByOrderTimes =
								result.extensions[
									"http://example.com/activities/sequence-list-basic-operation-times/queryByOrderTimes"
								] || "";

							const queryByValTimes =
								result.extensions[
									"http://example.com/activities/sequence-list-basic-operation-times/queryByValTimes"
								] || "";

							return [
								false,
								insertTimes,
								deleteTimes,
								queryByOrderTimes,
								queryByValTimes
							];
						}
					});
				this.$store.commit("sequenceList/setNotInputed", notInputed);
				this.$store.commit("sequenceList/setInsertTimes", this.insertTimes);
				this.$store.commit("sequenceList/setDeleteTimes", this.deleteTimes);
				this.$store.commit(
					"sequenceList/setQueryByOrderTimes",
					this.queryByOrderTimes
				);
				this.$store.commit(
					"sequenceList/setQueryByValTimes",
					this.queryByValTimes
				);
			},
			async sendSequenceListTimes() {
				if (this.$store.state.sequenceList.notInputed == false) {
					ElMessage.error("您已经提交过记录了(有问题可以提交反馈哟)");
					return;
				}
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
							id:
								"http://example.com/activities/sequence-list-basic-operation-times",
							definition: {
								type: "http://adlnet.gov/expapi/activities/assessment",
								name: {
									"en-us": "sequence-list-basic-operation-times",
									"zh-CN": "顺序表基本操作复杂度"
								}
							},
							objectType: "Activity"
						},
						result: {
							completion: true,
							response: "顺序表",
							extensions: {
								"http://example.com/activities/sequence-list-basic-operation-times/insertTimes": this
									.insertTimes,
								"http://example.com/activities/sequence-list-basic-operation-times/deleteTimes": this
									.deleteTimes,
								"http://example.com/activities/sequence-list-basic-operation-times/queryByOrderTimes": this
									.queryByOrderTimes,
								"http://example.com/activities/sequence-list-basic-operation-times/queryByValTimes": this
									.queryByValTimes
							}
						}
					};
					const p = await this.$store.state.user.myXAPI.sendStatement(stat).then(
						value => {
							return value.status;
						},
						reason => {
							// console.log("failed");
							// console.log(reason);
							const re = /status code ([0-9]{3,3})/;
							reason += "";
							if (reason.match(re)) {
								return reason.match(re)[1];
							} else {
								return -1;
							}
						}
					);
					if (p == 200) {
						this.$store.commit("sequenceList/setNotInputed", false);
						this.$store.commit("sequenceList/setInsertTimes", this.insertTimes);
						this.$store.commit("sequenceList/setDeleteTimes", this.deleteTimes);
						this.$store.commit(
							"sequenceList/setQueryByOrderTimes",
							this.queryByOrderTimes
						);
						this.$store.commit(
							"sequenceList/setQueryByValTimes",
							this.queryByValTimes
						);
					} else {
						ElMessage.error("发送失败，LRS或者网络可能出了问题哟");
					}
				}
			},
			// confirm if the agent is a new learner who dosen't save `startSkills` info in LRS
			async getInitSkills() {
				// retreive statements from given lrs
				// and justice

				if (this.$store.state.isNewLearner.isNewLearner != null) {
					// return directly, the work does before
					this.initSkills = this.$store.state.isNewLearner.initSkills;
					this.languages = this.$store.state.isNewLearner.languages;
					this.otherLanguage = this.$store.state.isNewLearner.otherLanguage;
					return;
				}
				const query: GetStatementsQuery = {
					agent: {
						objectType: "Agent",
						mbox: "mailto:" + this.$store.state.user.User.email
					},
					// verb: Verbs.COMPLETED.id,
					verb: "http://activitystrea.ms/schema/1.0/complete",
					activity: "http://example.com/activities/init-skills-search",
					ascending: true,
					limit: 1,
					format: "exact"
				};
				let isNew = null;
				[
					isNew,
					this.initSkills,
					this.languages,
					this.otherLanguage
				] = await this.$store.state.user.myXAPI
					.getStatements(query)
					.then((result: AxiosResponse) => {
						const statementsResponse: StatementsResponse = result.data;
						// console.log(statementsResponse);
						if (statementsResponse.statements.length == 0) {
							return [true, [], [], ""];
						} else {
							const result = statementsResponse.statements[0].result;
							const initSkills = JSON.parse(result.response);
							const languages = JSON.parse(
								result.extensions[
									"http://example.com/activities/init-skills-search/languages"
								] || "[]"
							);
							const otherLang =
								result.extensions[
									"http://example.com/activities/init-skills-search/otherLanguages"
								] || "";

							return [false, initSkills, languages, otherLang];
						}
					});
				this.$store.commit("isNewLearner/isNewLearner", isNew);
				this.$store.commit("isNewLearner/setInitSkills", this.initSkills);
				this.$store.commit("isNewLearner/setLanguages", this.languages);
				this.$store.commit("isNewLearner/setotherlanguage", this.otherLanguage);
			},
			async sendInitSkills() {
				// event.target.disabled = true;
				if (this.$store.state.isNewLearner.isNewLearner == false) {
					ElMessage.error("您已经提交过记录了(有问题可以提交反馈哟)");
					return;
				}
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
				const otherLang = this.$store.state.isNewLearner.otherLanguage?.trim();
				const stmt: Statement = {
					actor: {
						name: this.$store.state.user.User.name,
						mbox: "mailto:" + this.$store.state.user.User.email,
						objectType: "Agent"
					},
					// verb: Verbs.COMPLETED,
					verb: {
						id: "http://activitystrea.ms/schema/1.0/complete",
						display: { "en-US": "completed", "zh-CN": "完成了" }
					},
					object: {
						id: "http://example.com/activities/init-skills-search",
						definition: {
							type: "http://adlnet.gov/expapi/activities/assessment",
							name: {
								"en-us": "init-skills-search",
								"zh-CN": "了解初始学习情况"
							}
						},
						objectType: "Activity"
					},
					result: {
						completion: true,
						response: JSON.stringify(this.initSkills),
						extensions: {
							"http://example.com/activities/init-skills-search/languages": JSON.stringify(
								this.languages
							),
							"http://example.com/activities/init-skills-search/otherLanguages": otherLang
						}
					}
				};
				const code = await this.$store.state.user.myXAPI.sendStatement(stmt).then(
					value => {
						// console.log("success");
						// console.log(value);
						return value.status;
						// console.log(status);
					},
					reason => {
						ElMessage.error("您的网络似乎出了问题，无法发送信息至LRS");
						// console.log(reason);
						const re = /status code ([0-9]{3,3})/;
						reason += "";
						if (reason.match(re)) {
							return reason.match(re)[1];
						} else {
							return -1;
						}
					}
				);
				if (code == 200) {
					this.$store.commit("isNewLearner/isNewLearner", false);
					this.$store.commit("isNewLearner/setInitSkills", this.initSkills);
					this.$store.commit("isNewLearner/setLanguages", this.languages);
					this.$store.commit("isNewLearner/setotherlanguage", otherLang);
				}
			}
		},
		mounted() {
			// 	console.log('this.$store.state');
			// 	console.log(this.$store.state);
			// console.log('getInitSkills');

			this.getInitSkills();
			// console.log('this.getSequenceListTimes();')
			this.getSequenceListTimes();
			// console.log("this.getLinkedListTimes();")
			this.getLinkedListTimes();

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
	button {
		border-radius: 0.2rem;
	}
	.scard {
		position: relative;
		border-radius: 0.3rem;
		padding: 0.1rem 0.5rem 0.1rem 0.5rem;
		margin: 1rem 0 1rem 0;
		background-color: #f3e2c2;
		color: #222;
	}
	.scard ul {
		list-style-type: none;
		margin: 0.2rem 0;
		padding-left: 0;
	}
	.scard-title {
		font-weight: 600;
		margin-bottom: -0.4rem;
	}
	.scard-body {
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
	.checkbox label {
		margin: 0 auto;
		background-color: white;
		border-radius: 5px;
		width: 1.2rem;
		height: 1.2rem;
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		line-height: 1.7;
		position: relative;
	}
	.checkbox input[type="checkbox"] {
		display: none;
	}
	.checkbox input + label:before {
		position: absolute;
		top: 0;
		left: 0;
		display: inline-block;
		width: 1.2rem;
		height: 1.2rem;
		content: "";
		border: 1px solid #d3d3d3;
		border-radius: 5px;
	}
	.checkbox input + label:after {
		position: absolute;
		top: 0;
		left: 0.35rem;
		box-sizing: border-box;
		display: none;
		width: 0.5rem;
		height: 0.9rem;
		transform: rotate(45deg);
		border-width: 0.15rem;
		border-style: solid;
		border-color: #fff;
		border-top: 0;
		border-left: 0;
		content: "";
	}
	.checkbox input:checked + label::before {
		animation-name: none;
		border: #3e97eb;
		background-color: #3e97eb;
	}
	.checkbox input:checked + label::after {
		display: block;
	}

	.checkbox .checkbox-sub {
		margin-top: -0.4rem;
		padding-left: 1.4rem;
		line-height: 1.4;
	}

	.checkbox .checkbox-sub span:not(:first-of-type) {
		margin-left: 0.6rem;
	}
	.checkbox .checkbox-sub label {
		width: 1rem;
		height: 1rem;
	}

	.checkbox .checkbox-sub input + label:before {
		width: 1rem;
		height: 1rem;
	}
	.checkbox .checkbox-sub input + label:after {
		position: absolute;
		top: 0;
		left: 0.31rem;
		box-sizing: border-box;
		display: none;
		width: 0.4rem;
		height: 0.8rem;
		transform: rotate(45deg);
		border-width: 0.15rem;
		border-style: solid;
		border-color: #fff;
		border-top: 0;
		border-left: 0;
		content: "";
	}
	.checkbox .checkbox-sub input:checked + label::after {
		display: block;
	}
	.checkbox-other {
		margin-top: 0.3rem;
	}
	.scard-tip {
		padding: 0.1rem 1.5rem;
		border-left: 0.5rem solid #42b983;
	}
	.scard input[class~="input-text"] {
		width: fit-content;
		display: inline-block;
	}
</style>