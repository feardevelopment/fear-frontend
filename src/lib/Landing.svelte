<section>
  <article>
    <h1>A FEAR <em>(Fejlett Egyetemi Adminisztrációs Rendszer)</em> egy tetszőleges egyetem adminisztrálására lesz fejlesztve.</h1>
    <p class="desc">A FEAR célja, hogy kényelmes, biztonságos és gyors adminisztrációt tegyen lehetővé minden felhasználó számára.</p>
    <img src="5251.png" alt="University Graphics">
    <a class="login-cta" href="/login"><p>Jelentkezzen be!</p></a>
    <p class="register-text">Még nincs fiókja? Regisztráljon <a href="/register">itt!</a></p>
  </article>
</section>

<style lang="scss">
  section {
    max-width: 1200px;

    article {
      display: grid;
      column-gap: 3rem;
      row-gap: 2.5rem;
      grid-template-columns: 2fr 3fr;

      h1 {
        font-size: 4.5rem;
        grid-area: 1 / 1 / 2 / 2; 
      }

      p {
        font-size: 2.7rem;
        font-weight: 600;

        &.desc {
          grid-area: 2 / 1 / 3 / 2;
        }

        &.register-text {
          font-size: 1.5rem;
          grid-area: 4 / 1 / 5 / 2;
          margin-top: -1.2rem;
        }
      }

      a {
        &.login-cta {
          padding: 10px;
          border-radius: 5px;
          grid-area: 3 / 1 / 4 / 2;
          white-space: nowrap;
          width: min-content;
          color: var(--textColor);
	        background: var(--accentColor);
          text-decoration: none;

          &:hover {
	          background: var(--secondaryAccentColor);
          }
          
          p {
            font-size: 3rem;
          }
        }
      }
      
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        grid-area: 1 / 2 / 2 / 3;
      }
    }
  }
</style>