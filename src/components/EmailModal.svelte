<script lang="ts">
  import type { EMailBody } from "static/types";
  export let emailUid: string;
  let isOpen = false;
  let promise: Promise<EMailBody> 

  export function open() {
    isOpen = true;
  }

  function close() {
    isOpen = false;
  }
  
  promise = getMail();

  async function getMail(){
    const res = await fetch('http://localhost:3000/user/mailbox/' + emailUid);

    return (await res.json()).result;
  }
</script>

{#if isOpen}
<div class="modal">
  <div class="backdrop" on:click={close} />
  {#await promise}
    <p>Mail betöltése...</p>
  {:then mail} 
  <div class="content-wrapper">
    <header>
      <span>{mail.from}</span>
      <span>{mail.subject}</span>
      <span>{mail.date}</span>
    </header>
    <section class="content">
      <p>{mail.body}</p>
    </section>
    <footer>
      
    </footer>
  </div>
  {/await}
</div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .content-wrapper {
      z-index: 10;
      max-width: 70vw;
      border-radius: 0.3rem;
      background-color: white;
      overflow: hidden;
    }

    .content {
      padding: 50px;
    }
  }
</style>