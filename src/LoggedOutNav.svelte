<script lang="ts">

</script>

<ul class="nav">
  <li><a class="login-cta" href="/"><span>Bejelentkezés</span></a></li>
  <li><a class="register-cta" href="/"><span>Regisztráció</span></a></li>
</ul>

<style lang="scss">
    ul li a {
      border-radius: 5px;

      &.register-cta {
        background-color: var(--accentColor);

        &:hover {
          background-color: var(--accentColor);
        }
      }

      &.login-cta:hover {
        text-decoration: underline;
      }
    }
</style>