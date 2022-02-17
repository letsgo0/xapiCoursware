<template>
	<div class="row">
		<div class="col col-lg-8 col-md-10 col-sm-12" style="position:relative;">
			<div @click="toggle(true)" class="w-100" v-show="!showGif">
				<img class="gif-mask w-100" :src="imgAdd" alt="演示图" />
				<label
					style="color:white;width:50px;height:50px;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;"
					>GIF</label
				>
			</div>
			<img
				@click="toggle(false)"
				v-show="showGif"
				class="w-100"
				:src="gifAdd"
				alt=""
				srcset=""
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";
	import { Statement } from "@xapi/xapi";
	import { ElMessage } from "element-plus";

	export default defineComponent({
		props: {
			imgAdd: {
				type: String,
				required: true,
				default: ""
			},
			gifAdd: {
				type: String,
				required: true,
				default: ""
			}
		},
		setup() {
			const showGif = ref(false);
			const watchTimes = ref(0);
			function sendWatchAction(src: string) {
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
						id: "http://example.com/activities/image/" + src,
						definition: {
							type: "http://activitystrea.ms/schema/1.0/image",
							name: {
								"en-us": src
							}
						},
						objectType: "Activity"
					},
					result:{
						response:JSON.stringify({"watchTimes": watchTimes.value})
					}
				};
				this.$store.state.user.myXAPI.sendStatement(stat).then(
					() => {
						return;
					},
					reason => {
						ElMessage.error("发送失败，LRS或者网络可能出了问题哟");
					}
				);
			}
			return { showGif, sendWatchAction,watchTimes};
		},
		methods: {
			toggle(flag: boolean) {
				if (flag == true) {
					window.addEventListener("scroll", this.mask);

					this.showGif = !this.showGif;
					this.watchTimes++;
					// this.sendWatchAction(this.gifAdd);
				}else{
					this.showGif = false;
				}
			},
			mask() {
				const rect = this.$el.getBoundingClientRect();
				if (
					rect.top >=
						(window.innerHeight || document.documentElement.clientHeight) ||
					rect.bottom <= 0
				) {
					this.showGif = false;
					window.removeEventListener("scroll", this.mask);
				}
			}
		},
		beforeUnmount() {
			// if (this.watchTimes <= 0)
			// 	return ;
			this.sendWatchAction(this.gifAdd);
		},
	});
</script>

<style scoped>
	.gif-mask {
		-webkit-filter: brightness(30%);
		filter: brightness(30%);
	}
</style>