<script lang="ts">
  import LoggedOutNav from "./LoggedOutNav.svelte";
</script>

<header>
  <div>
    <span>FEAR</span>
    <nav>
      <LoggedOutNav />
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    height: 48px;
    margin-bottom: 2.4em;
    background-color: rgba(0, 0, 0, 0.05);
  }

  div {
    height: 100%;
    padding: 0 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 3em;
      font-weight: 600;
      letter-spacing: 0.2em;
    }

    nav {
      font-size: 2em;
    }
  }
</style>