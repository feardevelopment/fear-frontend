<script lang="ts">
	import { session } from '$app/stores';

	const logout = async () => {
		await fetch('api/logout', {
			method: 'POST'
		});

		session.set({ user: null });
	};

  const navItems = ['Saját adatok', 'Tanulmányok', 'Tárgyak', 'Vizsgák']
</script>

<div class="flex items-center justify-between w-2/3">
  <nav>
    <ul class="flex items-center divide-x border-x">
      {#each navItems as navItem}
        <li class="px-6">{navItem}</li>
      {/each}
    </ul>
  </nav>
  <div class="flex items-center gap-x-4">
    {#if $session.user}
      <h5>{$session.user.email}</h5>
    {/if}
    <button on:click={logout}>Kijelentkezés</button>
  </div>
</div>

<style lang="stylus">

</style>
