<script>
	import Header from '$lib/Header.svelte';
</script>

<div class="landing-wrapper">
	<div class="landing">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</div>

<style lang="stylus">
.landing-wrapper
	@apply h-screen bg-contain;
	background url("/static/Wave.svg") no-repeat fixed bottom

.landing
	@apply w-full mx-auto my-0;
	max-width 90rem

	main
		margin-top 0.625rem
</style>
