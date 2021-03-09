<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import LoggedInNav from '$components/LoggedInNav.svelte';
	import LoggedOutNav from '$components/LoggedOutNav.svelte';
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
		align-content: center;
    margin: 0 20px;
	}
</style>