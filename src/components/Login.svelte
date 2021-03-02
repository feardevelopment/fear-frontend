<script lang="ts">
  let formData = { username: '', password: '' };
  let errors = { username: '', password: '' };
  let message: string;
</script>

<section>
  <h1>Bejelentkezés</h1>
  <form>
    <div>
      <label for="username">Felhasználónév:</label>
      <input bind:value={formData.username} type="text" id="username" class:error-input="{errors.username}">
      <p class="error">{ errors.username }</p>
    </div>
    <div>
      <label for="password">Jelszó:</label>
      <input bind:value={formData.password} type="password" id="password" class:error-input="{errors.password}">
      <p class="error">{ errors.password }</p>
    </div>
    <button type="submit">Bejelentkezés</button>
  </form>
  <p class="register-text">Még nincs felhasználója? Regisztráljon <a href="/register">itt!</a></p>
</section>

<style lang="scss">
section {
    text-align: left;
    width: 420px;
    height: min-content;
    max-width: 960px;
    padding: 20px 50px;
    margin: 0 auto;
    background-color: #EDEDED;
    border-radius: 8px;

    h1 {
      font-size: 28px;
      margin-bottom: 25px;
      letter-spacing: 2px;
      text-align: center;
    }

    form {
      label {
        display: block;
        margin: 15px 0 5px;
        font-size: 18px;
        letter-spacing: 1.2px;
        opacity: 80%;
      }

      input {
        font-size: 18px;
        padding: 3px 8px;
        border: 1.5px solid silver;
        border-radius: 5px;
      }

      button {
        font-size: 22px;
        letter-spacing: 1px;
        margin-top: 25px;
        padding: 10px 0;
        cursor: pointer;
        border: none;
        border-radius: 5px;
	      background: linear-gradient(225deg, var(--accentColor) 0%, var(--lightAccentColor) 100%);
        width: 100%;
      }
    }

    .register-text {
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
  }

  input {
    width: 100%;
  }

  .error-input {
    border: 2px solid red;
  }

  p.error {
    color: red;
    font-weight: bold;
    font-size: 12px;
    margin-top: 5px;
  }
</style>