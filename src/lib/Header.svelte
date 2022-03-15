<script lang="ts">
	import LoggedOutNav from '$lib/LoggedOutNav.svelte';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import { onDestroy } from 'svelte';
	
	let loggedIn = false;
	const sub = session.subscribe((value) => {
		loggedIn = value.user?.loggedIn;
	});

	if (browser) {
		const token = sessionStorage.getItem('FEAR_token') !== null ? true : false;
		session.update((value) => {
			return (value = {
				user: {
					loggedIn: token
				}
			});
		});
	}

	onDestroy(sub);
</script>

<header>
	<a href={loggedIn ? '/home' : '/'}><p class="fear-logo">FEAR</p></a>
	<LoggedOutNav />
</header>

<style lang="stylus">
header
	@apply flex items-center justify-between;
	padding 1.875rem 0
</style>
