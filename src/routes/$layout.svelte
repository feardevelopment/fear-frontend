<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header />
<main>
	<slot></slot>
</main>
<Footer />

<style lang="scss">
	main {
		display: grid;
		justify-content: center;
		align-content: center;
	}
</style>