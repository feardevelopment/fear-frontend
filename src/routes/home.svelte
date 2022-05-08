<script lang="ts">
	import Email from '$lib/Email.svelte';
	import type { EMailHeader } from '../util/types';

	let promise: Promise<EMailHeader[]>;
	promise = getEmails();

	async function getEmails(): Promise<EMailHeader[]> {
		return Promise.resolve(
			new Array(10).fill({
				from: 'Kiss Pista',
				subject: 'Első levelem',
				date: '2022. 03. 30 01:06:52',
				read: false,
				uid: ''
			})
		);
	}
</script>

<section>
	<div class="email-header">
		<h3>Üzenetek</h3>
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
		@apply flex items-center w-full border-b px-5 py-3;

	.table
		@apply w-full input-text flex flex-col;

		.table-header
			@apply py-3 w-full grid border-b divide-x;
			grid-template-columns: 1fr 3fr 1fr

			p
				@apply text-left input-text pl-5;
</style>
