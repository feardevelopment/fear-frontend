<script lang="ts">

</script>

<ul class="nav">
  <li><a class="register-cta" href="/register"><span>Regisztráció</span></a></li>
  <li><a class="login-cta" href="/login"><span>Bejelentkezés</span></a></li>
</ul>

<style lang="scss">
    ul li a {
      border-radius: 5px;
      text-decoration: none;

      &.login-cta {
	      background: linear-gradient(225deg, var(--accentColor) 0%, var(--secondaryAccentColor) 100%);

        &:hover {
	      background: linear-gradient(180deg, var(--accentColor) 0%, var(--secondaryAccentColor) 100%);
        }
      }

      &.register-cta:hover {
        text-decoration: underline;
      }
    }
</style>