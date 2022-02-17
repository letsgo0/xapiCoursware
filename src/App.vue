<template >
	<router-view></router-view>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "App",
		setup() {
			return {};
		}
	});
</script>

<style >
	#app {
		width: 100%;
		height: 100%;
		background-color: antiquewhite;
	}
</style>