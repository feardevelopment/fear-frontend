<script lang="ts">
	import { session } from '$app/stores';
import NavigationItem from './NavigationItem.svelte';

	const logout = async () => {
		await fetch('api/logout', {
			method: 'POST'
		});

		session.set({ user: null });
	};

  const navItems = [
    {
      name: 'Saját adatok',
      subItems: ['Személyes adatok', 'Képzettségek', 'Elérhetőségek', 'Beállítások', 'Adatmódosítások']
    }
  ]
</script>

<div class="flex items-center justify-between w-2/3">
  <nav>
    <ul class="flex items-center divide-x border-x">
      {#each navItems as navItem}
        <NavigationItem name={navItem.name} subItems={navItem.subItems}/>
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
