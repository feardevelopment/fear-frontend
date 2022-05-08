<svelte:head>
	<title>FEAR | Egyetemi adminisztráció</title>
</svelte:head>

<section>
	<div class="text">
		<h1>
			A FEAR (Fejlett Egyetemi Adminisztrációs Rendszer) egy tetszőleges egyetem adminisztrálására
			lett fejlesztve.
		</h1>
		<h3>
			A FEAR célja, hogy kényelmes, biztonságos és gyors adminisztrációt tegyen lehetővé minden
			felhasználója számára.
		</h3>
	</div>
	<img src="../../static/graduate.svg" alt="Graduate icon" />
</section>

<style lang="stylus">
section
	@apply flex flex-row items-center justify-between gap-x-10 mt-12;
	
	.text
		@apply flex flex-col gap-y-7;
		max-width 960px

	img
		@apply mr-12;
</style>
