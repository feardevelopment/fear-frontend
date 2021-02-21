<script lang="ts">

</script>

<ul class="nav">
  <li><a class="register-cta" href="/register"><span>Regisztráció</span></a></li>
  <li><a class="login-cta" href="/login"><span>Bejelentkezés</span></a></li>
</ul>

<style lang="scss">
    ul li a {
      border-radius: 5px;

      &.login-cta {
        background-color: var(--accentColor);

        &:hover {
          background-color: var(--lightAccentColor);
        }
      }

      &.register-cta:hover {
        text-decoration: underline;
      }
    }
</style>