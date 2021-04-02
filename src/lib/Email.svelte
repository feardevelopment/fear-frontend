<script lang="ts">
  import type { EMailHeader } from 'static/types';
  import EmailModal from '$lib/EmailModal.svelte';
  export let email: EMailHeader;
  let show = false;
  let cachedEmail = {};
  email.date = (new Date(email.date)).toLocaleString();

  function openModal() {
    email.read = true;
    show = true;
  }

  function closeModal() {
    show = false;
  }

  function cacheEmail(e) {
    cachedEmail[email.uid] = e.detail.mail;
  }
</script>

<tr on:click="{openModal}" class:read="{email.read}">
  <td class="from">{email.from}</td>
  <td class="subject">{email.subject}</td>
  <td class="date">{email.date}</td>
</tr>
{#if show}
  <EmailModal email="{{ uid: email.uid, body: cachedEmail[email.uid] }}" on:close="{closeModal}" on:cache="{cacheEmail}" />
{/if}

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