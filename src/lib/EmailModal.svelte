<script lang="ts">
  import type { EMailBody } from "static/types";
  import { createEventDispatcher } from "svelte";
  export let email: { uid: string, body: EMailBody };
  let promise: Promise<EMailBody>;
  const dispatch = createEventDispatcher();
  
  function close() {
    dispatch('close', {
      text: 'closed'
    });
  }

  function cache(mail) {
    dispatch('cache', {
      mail
    });
  }

  if (email.body !== undefined) {
    promise = Promise.resolve(email.body);
  } else {
    promise = getMail();
  }

  async function getMail(){
    const res = await fetch('http://localhost:3000/user/mailbox/' + email.uid);

    const result = (await res.json()).result;
    result.date = (new Date(result.date)).toLocaleString();

    if (result) {
      cache(result);
    }

    return result;
  }
</script>

<div class="modal">
  <div class="backdrop" on:click={close} />
  <div class="content-wrapper">
  {#await promise}
    <p>Email betöltése...</p>
  {:then mail} 
    <section class="content-header">
      <p><span>Küldő:</span> {mail.from}</p>
      <p><span>Tárgy:</span> {mail.subject}</p>
      <p><span>Érkezés dátuma:</span> {mail.date}</p>
    </section>
    <section class="content">
      <p>{mail.body}</p>
    </section>
    <section class="content-footer">
      <button on:click="{close}">Bezárás</button>
    </section>
  {/await}
  </div>
</div>

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
      border-radius: 0.5rem;
      background-color: white;
      overflow: hidden;
      padding: 1rem 2rem;
      font-size: 1.4rem;

      .content-header {
        p {
          span {
            font-weight: bold;
          }
        }
      }

      .content {
        max-width: 65ch;
        height: 200px;
        overflow: scroll;
        padding: 1.5rem;
        margin: 10px 0;
        border: 1px solid var(--textColor);

        p {
          font-size: 1.8rem;
          word-spacing: 1px;
          line-height: 1.3;
        }
      }

      .content-footer {
        text-align: right;

        button {
          cursor: pointer;
          font-size: 1.6rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
</style>