<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ routeId, session }: LoadInput): Promise<LoadOutput> {
		const unauthenticatedRoutes = ['', 'login', 'register'];

		if (!session?.user && !unauthenticatedRoutes.includes(routeId)) {
			return { status: 302, redirect: '/login' };
		} else if (session?.user || unauthenticatedRoutes.includes(routeId)) {
			return {
				props: {
					user: session.user
				}
			};
		} else {
			return { status: 302, redirect: '/login' };
		}
	}
</script>

<script>
	import Header from '$lib/Header.svelte';
	import LoggedOutNav from '$lib/LoggedOutNav.svelte';
	import Footer from '$lib/Footer.svelte';
	export let user;
</script>

<div class="default-layout-wrapper">
	<div class="default-layout">
		<div class="content">
			<Header>
				{#if user}
					<p>Logged in</p>
				{:else}
					<LoggedOutNav />
				{/if}
			</Header>
			<main>
				<slot />
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
