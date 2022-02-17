<template>
	<h1>反馈</h1>
	<div class="feedback">
		<textarea
			v-model="content"
			placeholder="作者乐于接受您的反馈，并做出改变。"
		></textarea>
		<button @click="sendFeedback">提交</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";
	import { ElMessage } from "element-plus";
	import { Statement } from "@xapi/xapi";

	export default defineComponent({
		setup() {
			const content = ref("");
			return { content };
		},
		methods: {
			sendFeedback() {
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
							id: "http://activitystrea.ms/schema/1.0/sent",
							display: { "en-US": "sent", "zh-CN": "发送了" }
						},
						object: {
							id: "http://example.com/activities/feedback",
							definition: {
								type: "http://activitystrea.ms/schema/1.0/comment",
								name: {
									"zh-CN": "反馈"
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
		}
	});
</script>

<style scoped>
    .feedback{
        position: relative;
    }
	.feedback > textarea {
		width: 100%;
		height: 12rem;
		overflow-y: auto;
	}
	.feedback > button {
		position: absolute;
		right: 0.2rem;
		top: 0.1rem;
	}
</style>