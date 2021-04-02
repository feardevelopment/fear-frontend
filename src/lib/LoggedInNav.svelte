<script lang="ts">
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';

  function logOut() {
    goto('/').then(() => sessionStorage.removeItem('FEAR_token'));
    session.set(false);
  }
</script>

<div>
  <ul>
    <li><a href="/"><span>Saját adatok</span></a></li>
    <li><a href="/"><span>Tanulmányok</span></a></li>
    <li><a href="/"><span>Tárgyak</span></a></li>
    <li><a href="/"><span>Vizsgák</span></a></li>
    <li><a href="/"><span>Pénzügyek</span></a></li>
    <li><a href="/"><span>Információ</span></a></li>
  </ul>
  <span on:click="{logOut}">Kijelentkezés</span>
</div>

<style lang="scss">
  ul {
    li {
      display: inline;
    }
  }

  span {
    cursor: pointer;
  }
</style>