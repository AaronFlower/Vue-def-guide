<template>
	<div>
		<h2>Vue-cli build demo</h2>
		<p>{{msg}}</p>
		<slot></slot>
	</div>
</template>

<script>
	export default	{
		data () {
			return {
				msg: 'Hello Vue-cli build!'
			}
		},

		created () {
			this.$slots.default = [this.createDefaultSlot()]
		},

		methods: {
			createDefaultSlot () {
				const h = this.$createElement
				return h('div', ['this.$createElement create a default slot....'])
			}
		}
	}
</script>

<style>
	body {
		width: 65%;
		margin: auto;
	}
	p {
		color: rebeccapurple;
	}
</style>