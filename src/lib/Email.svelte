<script lang="ts">
  import type { EMailHeader } from 'static/types';
  import EmailModal from '$lib/EmailModal.svelte';
  export let email: EMailHeader;
  let emailModal: EmailModal;
  email.date = (new Date(email.date)).toLocaleString();

  function openMail() {
    email.read = true;
    emailModal.open();
  }
</script>

<tr on:click="{openMail}" class:read="{email.read}">
  <td class="from">{email.from}</td>
  <td class="subject">{email.subject}</td>
  <td class="date">{email.date}</td>
</tr>
<svelte:component this={EmailModal} bind:this={emailModal} emailUid={email.uid}/>

<style lang="scss">
  tr {
    cursor: pointer;

    td {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.3;
      border-bottom: 1px solid var(--textColor);
      padding: 5px;

      &.from {
        width: 30ch;
      }

      &.subject {
        width: 50ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &.date {
        width: 15ch;
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