<template>
	<div style="width: 100%;height: 10rem;" class="row mx-0">
		<div class="m-auto">
			<h1>抱歉，该知识点正在开发中{{dot}}</h1>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		setup() {
            const dots  = ['.','..','...','....'];
            const dot = ref(dots[0]);
            const timer = null;
            const index = 0;
			return {dots,dot,index, timer};
		},
		methods: {
			toggle() {
                this.index++;
                if (this.index >= this.dots.length){
                    this.index = 0;
                }                
                this.dot = this.dots[this.index];
			}
		},
        mounted() {
            this.timer = setInterval(this.toggle, 1000);
        },
	});
</script>

<style scoped>
	h1 {
		margin-top: 0;
	}
</style>