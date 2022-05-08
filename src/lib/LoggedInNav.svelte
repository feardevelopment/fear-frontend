<script lang="ts">
	import { session } from '$app/stores';

	const logout = async () => {
		await fetch('api/logout', {
			method: 'POST'
		});

		session.set({ user: null });
	};
</script>

<div class="flex items-center gap-x-4">
	{#if $session.user}
		<p>{$session.user.email}</p>
	{/if}
	<button on:click={logout}>Kijelentkezés</button>
</div>
