<script lang="ts">
  import Email from "$components/Email.svelte";
  import type { EMail } from "static/types";
  let promise: Promise<EMail[]>;

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