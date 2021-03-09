<script lang="ts">
  import type { EMailHeader } from 'static/types';
  import EmailModal from '$components/EmailModal.svelte';
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
      border-bottom: 1px solid var(--textColor);
      font-size: 1.4rem;
      padding: 5px;
      font-weight: 500;

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