<nav>
	<ul>
		<li><a class="register-cta" href="/register"><span>Regisztráció</span></a></li>
		<li><a class="login-cta" href="/login"><span>Bejelentkezés</span></a></li>
	</ul>
</nav>

<style lang="stylus">
ul
	display flex
	align-items center
	column-gap 1.875rem

	li
		list-style none

		a
			font-size 1.5rem
			letter-spacing 0.005rem

			&.login-cta
				color #2BA5EA
				padding 0.625rem 1rem
				border-radius 0.9375rem
				background #FFFFFF
				transition all 0.2s ease-in

				&:hover
					box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.5);
			
			&.register-cta:hover
				text-decoration underline
</style>
