<script lang="ts">

</script>

<ul>
  <li><a href="/"><span>Bejelentkezés</span></a></li>
  <li><a href="/"><span>Regisztráció</span></a></li>
</ul>

<style lang="scss">
  ul {
    display: flex;

    li {
      list-style-type: none;
      margin-left: 1em;

      a {
        padding: 3px 10px;
        border-radius: 5px;
        background-color: var(--accentColor);

        &:active {
          color: var(--textColor);
        }

        &:visited {
          color: var(--textColor);
        }

        span {
          font-weight: 500;
        }
      }
    }
  }
</style>