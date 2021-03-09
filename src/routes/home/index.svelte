<script lang="ts">
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
      {#each emails as email}
        <p>{email.from}</p>
        <p>{email.subject}</p>
        <p>{email.date}</p>
        <p>{email.read}</p>
        <p>{email.uid}</p>
      {/each}
    {:else}
      <p>Nincsenek megjeleníthető emailek!</p>
    {/if}
  {/await}
</section>