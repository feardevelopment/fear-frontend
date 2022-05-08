<script lang="ts">
	import Email from '$lib/Email.svelte';
	import type { EMailHeader } from '../util/types';

	let promise: Promise<EMailHeader[]>;
	let searchTerm = '';
	let allEmails: Promise<EMailHeader[]>;
	promise = getEmails();

	async function getEmails(): Promise<EMailHeader[]> {
		allEmails = Promise.resolve(
			new Array(10).fill({
				from: 'Kiss Pista',
				subject: 'Első levelem',
				date: '2022. 03. 30 01:06:52',
				read: false,
				uid: ''
			})
		);

		return allEmails;
	}

	const searchEmails = async () => {
		if (!searchTerm) {
			promise = allEmails;
			return;
		}

		promise = Promise.resolve(
			(await allEmails).filter(
				(email) => email.from.includes(searchTerm) || email.subject.includes(searchTerm)
			)
		);
	};
</script>

<svelte:head>
	<title>Főoldal</title>
</svelte:head>

<section>
	<div class="email-header">
		<h3>Üzenetek</h3>
		<div class="search-input">
			<input
				on:change={searchEmails}
				bind:value={searchTerm}
				type="text"
				placeholder="Keresés..."
			/>
			<img src="../../static/search.svg" alt="Search icon" />
		</div>
	</div>
	{#await promise}
		<p>Üzenetek betöltése...</p>
	{:then emails}
		{#if emails.length}
			<div class="table">
				<div class="table-header">
					<p>Feladó</p>
					<p>Tárgy</p>
					<p>Érkezés időpontja</p>
				</div>
				<div class="emails">
					{#each emails as email, index}
						<Email {email} {index} />
					{/each}
				</div>
			</div>
		{:else}
			<p>Nincsenek megjeleníthető üzenetek!</p>
		{/if}
	{/await}
</section>

<style lang="stylus">
section
	@apply w-full h-min border overflow-y-auto bg-white text-black rounded-lg;
	max-height: 80vh;

	.email-header 
		@apply flex items-center w-full border-b px-5 py-3 justify-between;

		.search-input
			@apply relative;

			input
				@apply border outline-none py-1 px-2 input-text;

			img
				@apply w-5 h-5 absolute cursor-pointer;
				top: 10px;
				right: 6px;

	.table
		@apply w-full input-text flex flex-col;

		.table-header
			@apply py-3 w-full grid border-b divide-x;
			grid-template-columns: 1fr 3fr 1fr

			p
				@apply text-left input-text pl-5;
</style>
