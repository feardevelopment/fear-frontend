<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import LoggedInNav from '$lib/LoggedInNav.svelte';
	import LoggedOutNav from '$lib/LoggedOutNav.svelte';
	let loggedIn = false;
</script>

<Header >
	{#if loggedIn}
		<LoggedInNav />
	{:else}
		<LoggedOutNav />
	{/if}
</Header>
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