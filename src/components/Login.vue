<template>
	<div class="fullWindow row mr-0 ml-0">
		<div
			v-show="close"
			class="col-xs-11 col-sm-9 col-md-8 col-lg-7 lead m-auto align-items-center"
		>
			<h3>课件说明</h3>
			<button @click="close = false" class="btn-danger">关闭</button>
			<p>
				本课件会收集使用过程中预定的信息，比如用户、邮箱和您主动提交的信息。课件以<span
					class="keywords"
					>邮箱</span
				>作为您的标识ID。这些数据将会被作为学习过程性数据存入LRS数据库中以供<span
					class="keywords"
					>教师角色</span
				>查看。如果您也想查看的话可以进入<span class="keywords"
					>课件--&gt;反馈</span
				>页面，提交反馈信息至LRS数据库，教师角色可以通过邮箱方式向您提供有<span
					class="keywords"
					>查看</span
				>权限的游客账号。您可以凭此登录<a
					target="_blank"
					class="inline-link"
					href="http://172.81.237.74"
					>LRS面板</a
				>查看自己或他人的学习过程性数据。
			</p>
			<p>
				如果您拥有自己的LRS，想将学习数据发送到自己的LRS，可以重新<span
					class="keywords"
					>设置</span
				>“LRS端点”、“登录方式”及“登录凭证”，目前只设置了“HTTP Basic
				Auth”登录方式。
			</p>
			<div class="color-red">
				<p>
					目前课件还处于<span class="keywords">测试</span
					>阶段，需要收集您的使用数据以优化课件。所以请暂时不要更改LRS信息。
				</p>
				<p>
					为了能对课件有更好的<span class="keywords">改进优化</span
					>，作者希望您使用课件学习后，能够点击<a
						class="inline-link"
						target="_blank"
						href="https://www.wjx.cn/vj/YDmKlgy.aspx"
						>这份问卷</a
					>填写<span class="keywords">使用体验</span>。
				</p>
			</div>
		</div>
		<div class="col-xs-11 col-sm-8 col-md-7 col-lg-4 m-auto align-items-center">
			<span class="title justify-content-center d-flex">
				E-learning Recources
			</span>
			<div :class="[{ line: true }, { addMB: infoForm.order != '' }]"></div>
			<div class="store">
				<el-form
					v-loading="login"
					element-loading-text="正在验证LRS"
					:model="infoForm"
					status-icon
					:rules="rules"
					ref="infoForm"
					label-width="auto"
					label-position="left"
				>
					<el-form-item label="用户" prop="name">
						<el-input
							placeholder="用户名"
							type="text"
							v-model="infoForm.name"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input
							placeholder="邮箱"
							type="email"
							v-model="infoForm.email"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-form-item label="LRS端点" prop="endPoint">
						<el-input
							v-model="infoForm.endPoint"
							type="url"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-form-item label="验证方式" prop="order">
						<el-select
							v-model="infoForm.order"
							placeholder="请选择"
							style="width: 100%"
						>
							<el-option
								v-for="auth in auths"
								:key="auth.value"
								:label="auth.label"
								:value="auth.value"
								:disabled="auth.disabled"
							></el-option>
						</el-select>
					</el-form-item>
					<div v-if="infoForm.order == '1'">
						<el-form-item label="仓库名" prop="key">
							<el-input
								v-model="infoForm.key"
								type="text"
								autocomplete="on"
							></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="secret">
							<el-input
								v-model="infoForm.secret"
								type="password"
								autocomplete="on"
								:show-password="true"
							></el-input>
						</el-form-item>
					</div>

					<el-form-item>
						<el-row type="flex" class="row-bg" justify="space-around">
							<el-button type="primary" @click="storeForm('infoForm')"
								>登录</el-button
							>
							<div></div>
							<el-button type="warning" @click="resetForm('infoForm')"
								>重置</el-button
							>
						</el-row>
					</el-form-item>
				</el-form>
				<div class="info-btn">
					<a @click="close = true" class="inline-link">课件说明</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
	import { ElForm, ElMessage } from "element-plus";
	import { defineComponent } from "vue";
	import XAPI, { Statement, Attachment, Person, Agent } from "@xapi/xapi";

	export default defineComponent({
		name: "login",
		data() {
			const checkEmail = (rule: any, value: string, callback: Function) => {
				if (value === "") {
					return callback(new Error("请输入邮箱地址！"));
				} else if (!/^.{1,15}@.{1,20}$/.test(value)) {
					return callback(new Error("邮箱格式错误！"));
				}
				return callback();
			};
			const checkName = (rule: any, value: string, callback: Function) => {
				if (value === "") {
					return callback(new Error("请输入用户名！"));
				} else if (value.length > 7) {
					return callback(new Error("用户名最多六位！"));
				}
				return callback();
			};
			const checkEndPoint = (rule: any, value: string, callback: Function) => {
				if (value === "") {
					return callback(new Error("请输入LRS端点！"));
				}
				return callback();
			};
			const checkOrder = (
				rule: any,
				value: string | number,
				callback: Function
			) => {
				if (value === "" || value < 1) {
					return callback(new Error("请选择验证方式！"));
				}
				return callback();
			};
			const checkKey = (rule: any, value: string, callback: Function) => {
				if (value === "") {
					return callback(new Error("库名不能为空！"));
				}
				return callback();
			};
			const checkSecret = (rule: any, value: string, callback: Function) => {
				if (value === "") {
					return callback(new Error("密码不能为空！"));
				}
				return callback();
			};
			return {
				close: true,
				auths: [
					{
						value: 1,
						label: "HTTP Basic Auth"
					},
					{
						value: 2,
						label: "Cookie Auth",
						disabled: true
					},
					{
						value: 3,
						label: "OAuth",
						disabled: true
					},
					{
						value: 4,
						label: "Token Auth",
						disabled: true
					}
				],
				rules: {
					name: [{ validator: checkName, trigger: "blur" }],
					email: [{ validator: checkEmail, trigger: "blur" }],
					endPoint: [{ validator: checkEndPoint, trigger: "blur" }],
					order: [{ validator: checkOrder, trigger: "blur.capture" }],
					key: [{ validator: checkKey, trigger: "blur" }],
					secret: [{ validator: checkSecret, trigger: "blur" }]
				},
				login: false,
				statusCode: null,
				infoForm: {
					// name: "陈天",
					// email: "3449315068@ww.com",
					name: "",
					email: "",
					endPoint: "http://172.81.237.74/data/xAPI/",
					order: 1,
					key: "43c9b2f7944213ee90cfe5ce37c95aa220a704a0",
					secret: "55a8a0854862e410b43c2f2a3cc96843f664a1e9"
					// key: "0ef0f7c65d074544c9fec6825202a29031b722f4",
					// secret: "6556019e859d40f8ae8069a6a89a8eb7894e5e38"
					// key: "e7b5d0ff3e26e4825065236caddfa73975f3c007",
					// secret: "230dbd8674f4291540f4c75bdcb2ed4fc242d092"
					// key: "7af1ea99a0ee2b065394ee3c2d2977ffacd786da",
					// secret: "e4cd8c3490a96112c8f8be7dc15779b1700fa50e"
				}
			};
		},
		methods: {
			async storeForm(formName: any) {
				async function startLearning(that) {
					function getDevice() {
						const agent = navigator.userAgent.toLowerCase();
						if (/windows/.test(agent)) {
							return "windows pc";
						} else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
							return "iphone";
						} else if (/ipad/.test(agent) && /mobile/.test(agent)) {
							return "ipad";
						} else if (/android/.test(agent) && /mobile/.test(agent)) {
							return "android";
						} else if (/linux/.test(agent)) {
							return "linux pc";
						} else if (/mac/.test(agent)) {
							return "mac";
						} else {
							return "other";
						}
					}
					// const person: Person = {
					// 	objectType: "Person",
					// 	name: ["test"],
					// }
					const stmt: Statement = {
						actor: {
							name: that.$store.state.user.User.name,
							mbox: "mailto:" + that.$store.state.user.User.email,
							objectType: "Agent"
						},
						verb: {
							id: "http://adlnet.gov/expapi/verbs/launched",
							display: {
								"en-US": "launched",
								"zh-CN": "进入学习"
							}
						},
						object: {
							id: "http://example.com/activities/chapter-insertion-sort",
							definition: {
								name: {
									"en-US": "chapter-insertion-sort",
									"zh-CN": "插入类排序一节"
								},
								description: {
									"zh-CN": "插入类排序章节,内容有直接(折半)插入排序、希尔排序"
								},
								type: "http://id.tincanapi.com/activitytype/chapter"
							},
							objectType: "Activity"
						},
						context: {
							extensions: {
								"http://id.tincanapi.com/extension/browser-info": JSON.stringify({
									platform: getDevice()
								})
							}
						}
					};
					const p = await that.$store.state.user.myXAPI.sendStatement(stmt).then(
						value => {
							return value.status;
						},
						reason => {
							const re = /status code ([0-9]{3,3})/;
							reason += "";
							if (reason.match(re)) {
								return reason.match(re)[1];
							} else {
								return -1;
							}
						}
					);
					return p;
				}
				(this.$refs[formName] as typeof ElForm).validate((valid: any) => {
					if (valid) {
						this.login = true;
					} else {
						return false;
					}
				});
				if (this.login) {
					this.$store.commit("user/setUser", this.infoForm);
					// console.log(this.$store.state.user.User);  // use state this way
					this.$store.commit("user/createXapiInstance");
					const statusCode = await startLearning(this);
					this.login = false; //隐藏加载图标
					if (statusCode === 200) {
						ElMessage.success("登录成功！");
						this.$store.commit("login");
						// console.log("this.$store.state in login");
						// console.log(this.$store.state);
						this.$router.push({
							name: "YouShouldKnow",
							hash: decodeURIComponent("#介绍")
						});
						// ElMessage.success("成功！");
						// this.$router.replace({ path: "/home/YouShouldKnow.html#介绍" });
					} else {
						this.$store.commit("exit");
						const message = "登录失败，请检查输入信息或网络状态！";
						// switch (statusCode) {
						// 	case 401:
						// 		message = "请检查LRS库名或密码";
						// 		break;
						// 	case -1:
						// 		message = "请检查LRS端点或者网络状态！";
						// 		break;
						// 	default:
						// 		message = "请检查LRS端点或者网络状态！";
						// }
						ElMessage.error(message);
					}
				}
			},
			resetForm(formName: any) {
				(this.$refs[formName] as typeof ElForm).resetFields();
			}
		}
		// mounted() {
		// 	this.storeForm("infoForm");
		// }
	});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div.info-btn {
		text-align: right;
		padding-right: 0.2rem;
	}
	div.info-btn > a {
		cursor: pointer;
	}
	div .lead {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 100;
		background-color: antiquewhite;
		/* width: 30rem; */
		font-weight: 500;
		font-size: 1em;
		overflow-y: auto;
		/* height: 100vh; */
		/* overflow-y: auto; */
	}
	div.lead > button {
		position: absolute;
		right: 1.5rem;
		top: 2rem;
	}
	.store {
		color: black;
		background: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
			0 1px 5px 0 rgb(0 0 0 / 12%);
		padding: 20px 20px 20px 20px;
	}
	.title {
		font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑";
		margin: 10px auto;
	}
	.line {
		height: 0px;
		border-bottom: 2px solid rgb(221, 164, 118);
		/* width: calc(100% - 10%);; */
		width: 55%;
		margin: 2px auto 70px auto;
	}
	.addMB {
		margin-bottom: 12px;
		margin-top: 0px;
	}
	.color-red {
		background-color: rgb(241, 200, 200);
	}
</style>
