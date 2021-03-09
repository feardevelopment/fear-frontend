<script lang="ts">
  import Email from '$components/Email.svelte';
  import type { EMailHeader } from 'static/types';
  let promise: Promise<EMailHeader[]>;

  promise = getEmails();

  async function getEmails() {
    const res = await fetch('http://localhost:3000/user/mailbox');

    return res.json();
  }
</script>

<section>
  <h2>Emailek</h2>
  {#await promise}
    <p>Emailek betöltése...</p>
  {:then emails}
    {#if emails.length}
      <table>
        <tr>
          <th>Küldő</th>
          <th>Tárgy</th>
          <th>Érkezés dátuma</th>
        </tr>
        {#each emails as email}
          <Email {email}/>
        {/each}
      </table>
    {:else}
      <p>Nincsenek megjeleníthető emailek!</p>
    {/if}
  {/await}
</section>

<style lang="scss">
  section {
    background-color: var(--formColor);
    border: 1px solid var(--textColor);
    padding: 20px;
    width: 100%;

    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 2.8rem;
    }

    table {
      width: 100%;
      border: 1px solid var(--textColor);
      padding: 5px 10px 10px;
      border-spacing: 0;

      th {
        font-size: 1.8rem;
        border-bottom: 2.5px solid var(--textColor);
      }
    }
  }
</style>