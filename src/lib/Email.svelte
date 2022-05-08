<script lang="ts">
	import type { EMailHeader } from 'src/util/types';
	import EmailModal from '$lib/EmailModal.svelte';
	export let email: EMailHeader;
	export let index: number;
	let show = false;
	let cachedEmail = {};
	email.date = new Date(email.date).toLocaleString();

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

<div
	class="{index % 2 ? 'dark' : 'light'} email"
	on:click={openModal}
	class:read={email.read}
	title={email.subject}
>
	<p class="from">{email.from}</p>
	<p class="subject">{email.subject}</p>
	<p class="date">{email.date}</p>
</div>
{#if show}
	<EmailModal
		email={{ uid: email.uid, body: cachedEmail[email.uid] }}
		on:close={closeModal}
		on:cache={cacheEmail}
	/>
{/if}

<style lang="stylus">
.email
  @apply cursor-pointer grid border-b divide-x divide-black divide-opacity-50 py-1;
  grid-template-columns: 1fr 3fr 1fr

  p 
    @apply body-1 font-bold pl-5;

  &.read 
    p 
      font-weight: 400;

  &.dark
    @apply bg-gray-dark;

  &.light
    @apply bg-gray-light;

  &:hover 
    background-color: #C2C2C2;
</style>
