<script lang="ts">

</script>

<ul>
  <li><a class="login-cta" href="/"><span>Bejelentkezés</span></a></li>
  <li><a class="register-cta" href="/"><span>Regisztráció</span></a></li>
</ul>

<style lang="scss">
  ul {
    display: flex;

    li {
      list-style-type: none;
      margin-left: 0.3em;

      a {
        padding: 4px 10px;
        border-radius: 5px;

        span {
          font-weight: 500;
        }

        &:active {
          color: var(--textColor);
        }

        &:visited {
          color: var(--textColor);
        }
        &.register-cta {
          background-color: var(--accentColor);

          &:hover {
            background-color: var(--lightAccentColor);
          }
        }

        &.login-cta:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>