<script>
	import Header from '$lib/Header.svelte';
</script>

<div class="landing-wrapper">
	<div class="landing">
		<Header />
		<main>
			<slot></slot>
		</main>
	</div>
</div>

<style lang="stylus">
.landing-wrapper
	height 100%
	background url("/static/Wave.svg") no-repeat fixed bottom
	background-size contain

.landing
	max-width 90rem
	width 100%
	padding 0 1.875rem
	margin 0 auto

	main
		margin-top 0.625rem
</style>