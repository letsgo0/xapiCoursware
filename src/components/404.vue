<template>
	<div style="width: 100vw;height: 100vh;" class="row mx-0">
		<div class="col-xs-11 col-sm-8 col-md-7 col-lg-4 m-auto">
			<h1>Too Bad</h1>
            <p>您来到了未知地带。</p>
			<p>
				{{ second }}秒后页面将会自动跳转到<router-link class="inline-link" to="/Login.html">登陆界面。</router-link>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		setup() {
            const second  = ref(5);
            const timer = null;
			return {second, timer};
		},
		methods: {
			toLogin() {
                this.second--;                
                if(this.second <= 0){
                    window.clearInterval(this.timer);
                    this.$router.push({ name: "login" });
                }
			}
		},
		mounted() {
            this.timer = setInterval(this.toLogin,1000);
		},
        beforeUnmount() {
            console.log('404');
            
            clearInterval(this.timer);
        },
	});
</script>

<style scoped>
	h1 {
		margin-top: 0;
	}
</style>