<template lang="pug">
	#lcu-status
		el-container
			| Connected
</template>

<script>
	export default {
		name: 'lcu-status'
	}
</script>

<style scoped lang="sass">
	#lcu-status
		position: absolute
		top: 0
		right: 0
		padding: 1vh 1vw 1vh 1vw
		background-color: red
</style>