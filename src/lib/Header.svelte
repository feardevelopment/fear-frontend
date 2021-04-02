<script lang="ts">
	import LoggedInNav from '$lib/LoggedInNav.svelte';
	import LoggedOutNav from '$lib/LoggedOutNav.svelte';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	let loggedIn = false;
	
	if (browser) {
    session.subscribe(value => loggedIn = value);
		session.set(sessionStorage.getItem('FEAR_token') ? true : false);
	}
</script>

<header>
  <div>
    <a href="/"><span>FEAR</span></a>
    <nav>
      {#if loggedIn}
        <LoggedInNav />
      {:else}
        <LoggedOutNav />
      {/if}
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    height: 48px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  div {
    height: 100%;
    padding: 0 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;

      span {
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.2em;
      }
    }

    nav {
      font-size: 2rem;
    }
  }
</style>