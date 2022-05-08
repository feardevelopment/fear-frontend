<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({ routeId, session, url }: LoadInput) {
		const unauthenticatedRoutes = ['', 'login', 'register'];

		if (!session?.user && !unauthenticatedRoutes.includes(routeId)) {
			return { status: 302, redirect: '/login' };
		} else if (session?.user && unauthenticatedRoutes.includes(routeId)) {
			return { status: 302, redirect: '/home' };
		} else {
			return {
				props: {
					user: session.user,
					url
				}
			};
		}
	}
</script>

<script>
	import Header from '$lib/Header.svelte';
	import LoggedOutNav from '$lib/LoggedOutNav.svelte';
	import Footer from '$lib/Footer.svelte';
	import LoggedInNav from '$lib/LoggedInNav.svelte';
	import PageTransition from '$lib/PageTransition.svelte';

	export let user;
	export let url;
</script>

<div class="default-layout-wrapper">
	<div class="default-layout">
		<div class="content">
			<Header>
				{#if user}
					<LoggedInNav />
				{:else}
					<LoggedOutNav />
				{/if}
			</Header>
			<main>
				<PageTransition {url}>
					<slot />
				</PageTransition>
			</main>
		</div>
		<Footer />
	</div>
</div>

<style lang="stylus">
.default-layout-wrapper
	@apply h-screen bg-contain;
	background url("/static/Wave.svg") no-repeat fixed bottom

.default-layout
	@apply w-full h-full flex flex-col;

	.content
		@apply w-full mx-auto my-0 px-20;

	main
		margin-top 0.625rem
</style>
