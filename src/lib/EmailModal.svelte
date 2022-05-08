<script lang="ts">
	import type { EMailBody } from 'src/util/types';

	import { createEventDispatcher } from 'svelte';
	export let email: { uid: string; body: EMailBody };
	let promise: Promise<EMailBody>;
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close', {
			text: 'closed'
		});
	}

	function cache(mail) {
		dispatch('cache', {
			mail
		});
	}

	if (email.body !== undefined) {
		promise = Promise.resolve(email.body);
	} else {
		promise = getMail();
	}

	async function getMail() {
		/*const res = await fetch('http://localhost:3000/user/mailbox/' + email.uid);

    const result = (await res.json()).result;
    result.date = (new Date(result.date)).toLocaleString();

    if (result) {
      cache(result);
    }

    return result;*/

		return {
			from: 'Kiss Pista',
			subject: 'Első levelem',
			date: '2022. 03. 30 01:06:52',
			body: 'Hello Im body'
		};
	}
</script>

<div class="modal">
	<div class="backdrop" on:click={close} />
	<div class="content-wrapper">
		{#await promise}
			<p>Email betöltése...</p>
		{:then mail}
			<section class="content-header">
				<p><span>Küldő:</span> {mail.from}</p>
				<p><span>Tárgy:</span> {mail.subject}</p>
				<p><span>Érkezés dátuma:</span> {mail.date}</p>
			</section>
			<section class="content">
				<p>{mail.body}</p>
			</section>
			<section class="content-footer">
				<button on:click={close}>Bezárás</button>
			</section>
		{/await}
	</div>
</div>

<style lang="stylus">
.modal
  @apply fixed top-0 left-0 w-full h-screen flex items-center justify-center;

  .content-wrapper
    @apply z-10 rounded-lg bg-white overflow-hidden py-4 px-8 text-black;

    .content-header 
      p 
        span 
          @apply font-bold;

    .content 
      @apply overflow-scroll p-6 my-40 mx-0 border border-black;
      max-width: 65ch
      height: 200px

      p
        @apply body-1;

    .content-footer 
      @apply text-right;

      button
        @apply cursor-pointer py-2 px-4;
        font-size: 1.6rem
</style>
