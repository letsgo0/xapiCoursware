<template>
	<div class="aside-btn" @click="$emit('toggleSideBar')">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			viewBox="0 0 448 512"
			class="icon"
		>
			<path
				fill="currentColor"
				d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
			></path>
		</svg>
	</div>
	<slot name="toggle"></slot>
	<el-select

		class="d-none search-btn"
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

	<div class="info">
		<span class="cursorText header-item   btn">
			{{ name }}
		</span>
		<span class="cursorText header-item  btn ">
			{{ email }}
		</span>
		<slot name="exit"></slot>
	</div>
	<div class="manage-btn">
		<div style="cursor:pointer;" @click="showInfo = !showInfo">用户</div>
		<div class="manage-info" v-show="showInfo">
			<span class="" type="text">{{ email }}</span>
			<span class="" type="text">{{ name }}</span>
			<span  style="cursor:pointer;"><slot name="manageExit"></slot></span>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";

	export default defineComponent({
		emits: {
			toggleSideBar: null
		},
		setup() {
			const showInfo = ref(false);
			return { showInfo };
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
				]
			};
		},
		computed: {
			name() {
				return this.$store.state.user.User.name;
			},
			email() {
				return this.$store.state.user.User.email;
			}
		},
		mounted() {
			// 搜索框
			this.list = this.states.map(item => {
				return { value: `value:${item}`, label: `label:${item}` };
			});
		},
		methods: {
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
			}
		}
	});
</script>

<style scoped>
	.aside-btn,
	.manage-btn {
		display: none;
	}
	.manage-btn {
		position: absolute;
		padding-left: 1.5rem;
		box-sizing: border-box;
		right: 1.5rem;
		top: 0.2rem;
		flex-direction: column;
		align-items: flex-end;
	}
	.manage-info {
		position: relative;
		padding-left: 0rem;
		box-sizing: border-box;
		right: -1.5rem;
		top: 0.4rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.manage-info > span {
		display: block;
		text-align: left;
		padding-right: 0.5rem;
		padding-left: 1.2rem;
		background-color: #2f2a2a;
		border-top-left-radius: 0.1rem;
		border-bottom-left-radius: 1rem;
	}
	.manage-info > span:nth-child(2) {
		padding-left: 3rem;
	}
	.info {
		padding-left: 1.5rem;
		box-sizing: border-box;
		position: absolute;
		right: 1.5rem;
		top: 0.2rem;
		display: flex;
	}
	.header-item,
	.header-item:hover,
	.header-item:focus,
	.header-item:active {
		background-color: transparent !important;
		border-color: transparent !important;
		color: #ffffff !important;
		margin: auto 5px;
		border: none;
		box-shadow: 0 0;
	}
	.cursorText {
		cursor: text !important;
	}

	@media screen and (max-width: 1024px) {
		.aside-btn {
			cursor: pointer;
			display: block;
			width: 1.25rem;
			height: 1.25rem;
			position: absolute;
			padding: 0;
			top: 0.7rem;
			left: 1rem;
		}
		.aside-btn .icon {
			display: block;
			width: 1.25rem;
			height: 1.25rem;
		}
	}
	@media screen and (max-width: 980px) {
		.info {
			display: none;
		}
		.manage-btn {
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		.aside-btn {
			width: 1.25rem;
			height: 1.25rem;
			position: absolute;
			padding: 0;
			top: 0.7rem;
			left: 0.5rem;
		}
		.aside-btn .icon {
			display: block;
			width: 1.25rem;
			height: 1.25rem;
		}
	}
	@media screen and (max-width: 500px) {
		.search-btn {
			display: none;
		}
	}
</style>