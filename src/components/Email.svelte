<script lang="ts">
  import type { EMailHeader } from 'static/types';
  import EmailModal from '$components/EmailModal.svelte';
  export let email: EMailHeader;
  let emailModal;
  const date = new Date(email.date);

  function openMail() {
    email.read = true;
    emailModal.open();
  }
</script>

<tr on:click="{openMail}" class:read="{email.read}">
  <td>{email.from}</td>
  <td class="subject">{email.subject}</td>
  <td>{date.toLocaleString()}</td>
</tr>
<svelte:component this={EmailModal} bind:this={emailModal} emailUid={email.uid}/>

<style lang="scss">
  tr {
    cursor: pointer;

    td {
      border-bottom: 1px solid var(--textColor);
      font-size: 14px;
      padding: 5px;
      font-weight: 500;

      &.subject {
        max-width: 50ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    &.read {
      td {
        font-weight: 400;
      }
    }

    &:hover {
      background-color: #E0E0E0;
    }
  }
</style>