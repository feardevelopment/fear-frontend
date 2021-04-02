<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header />
<main>
	<slot></slot>
</main>
<Footer />

<style>
	main {
		display: grid;
		justify-content: center;
		margin: 3rem 2rem;
	}
</style>