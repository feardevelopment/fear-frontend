<ul class="nav">
  <li><a class="register-cta" href="/register"><span>Regisztráció</span></a></li>
  <li><a class="login-cta" href="/login"><span>Bejelentkezés</span></a></li>
</ul>

<style lang="scss">
    ul li a {
      border-radius: 5px;
      text-decoration: none;

      &.login-cta {
	      background: var(--accentColor);

        &:hover {
	        background: var(--secondaryAccentColor);
        }
      }

      &.register-cta:hover {
        text-decoration: underline;
      }
    }
</style>