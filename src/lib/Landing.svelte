<section>
	<div class="flex flex-col gap-y-10">
		<h1>
			A FEAR (Fejlett Egyetemi Adminisztrációs Rendszer) egy tetszőleges egyetem adminisztrálására
			lett fejlesztve.
		</h1>
		<h4>
			A FEAR célja, hogy kényelmes, biztonságos és gyors adminisztrációt tegyen lehetővé minden
			felhasználója számára.
		</h4>
		<button><a href="/login">Vágjunk bele!</a></button>
	</div>
	<img src="../../static/graduate.svg" alt="Graduate icon">
</section>

<style lang="stylus">
section
	@apply flex flex-row gap-x-10;
	
    button
			@apply w-max bg-transparent text-white cursor-pointer headline-4;
			padding 0.5rem 1rem
			border 4px solid #15d173
			border-radius 0.9375rem
			transition all 0.2s ease-in

			&:hover
				background #15d173
</style>
