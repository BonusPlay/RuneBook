<template lang="pug">
	#app
		top-bar
		lcu-status
		router-view
</template>

<script>
	import TopBar from './components/TopBar';
	import LcuStatus from './components/LcuStatus';

	export default {
		name: 'runebook',
		components: {
			TopBar,
			LcuStatus
		}
	}
</script>

<style lang="sass">
	body
		overflow: hidden
</style>
