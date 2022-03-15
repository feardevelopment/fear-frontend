<nav>
	<ul>
		<li><a class="register-cta" href="/register"><span>Regisztráció</span></a></li>
		<li><a class="login-cta" href="/login"><span>Bejelentkezés</span></a></li>
	</ul>
</nav>

<style lang="stylus">
ul
	@apply flex items-center gap-x-7;

	li
		@apply list-none;

		a
			@apply text-2xl;
			letter-spacing 0.005rem

			&.login-cta
				@apply bg-white text-blue-baby;
				padding 0.625rem 1rem
				border-radius 0.9375rem
				transition all 0.2s ease-in

				&:hover
					box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.5);
			
			&.register-cta:hover
				@apply underline;
</style>
