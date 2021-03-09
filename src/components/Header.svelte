<script>
	import LoggedInNav from '$components/LoggedInNav.svelte';
	import LoggedOutNav from '$components/LoggedOutNav.svelte';
	let loggedIn = false;
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
        font-size: 3em;
        font-weight: 600;
        letter-spacing: 0.2em;
      }
    }

    nav {
      font-size: 2em;
    }
  }
</style>