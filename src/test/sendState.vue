<template>
	<div>
		<el-button type="primary" @click="send">send</el-button>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	declare const window: Window & { ADL: any; toBase64: Function };
	export default defineComponent({
		methods: {
			send() {
				const ADL = window.ADL;
				const toBase64 = window.toBase64;
				const conf = {
					endpoint: "http://172.81.237.74/data/xAPI/",
					auth:
						"Basic " +
						toBase64(
							"4f8cbb051ce732be931c8123f39dd2cfa061b25a:e33f148ed7f8ba84b48974cdfd7f7bcd3e0a7575"
						)
				};
				ADL.XAPIWrapper.changeConfig(conf);
				const stmt = {
					actor: {
						name: "xapigu789y",
						mbox: "mailto:" + "xxx@sssd.com",
						objectType: "Agent"
					},
					verb: {
						id: "http://adlnet.gov/expapi/verbs/answered",
						display: {
							"en-US": "answered"
						}
					},
					object: {
						id: "http://adlnet.gov/expapi/activities/example",
						definition: {
							name: {
								"en-US": "Example Activity"
							},
							description: {
								"en-US": "Example activity description"
							}
						},
						objectType: "Activity"
					},
					version: "1.0.3"
				};
				ADL.XAPIWrapper.sendStatement(stmt, function(
					resp: { status: string; statusText: string },
					obj: { id: string }
				) {
					ADL.XAPIWrapper.log(
						"[" + obj.id + "]: " + resp.status + " - " + resp.statusText
					);
				});
			}
		}
	});
</script>

<style scoped>
</style>