<script lang="ts">
import type { HTTPResponse } from "static/types";

  let formData = { username: '', password: '' };
  let errors = { username: '', password: '', failedLogin: '' };
  let status: HTTPResponse;

  const submitHandler = () => {
    let valid = true;
    errors.failedLogin = '';

    if (formData.username.trim().length < 1) {
      valid = false;
      errors.username = 'A felhasználónév nem lehet üres!'
    } else {
      errors.username = '';
    }

    if (formData.password.trim().length < 8) {
      valid = false;
      errors.password = 'A jelszó nem lehet kevesebb, mint 8 karakter!';
    } else {
      errors.password = '';
    }

    if (valid) {
      login();
    }
  }

  async function login() {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    status = await res.json();

    if (status.code !== 200) {
      errors.failedLogin = 'Hibás felhasználónév vagy jelszó!';
    } else {
      localStorage.setItem("FEAR_token", status.result);
      window.location.href = "/training-pick";  // This should work fine now, only for testing
      // Maybe should find an official route change within svelte-kit
    }
  }

</script>

<section>
  <h1>Bejelentkezés</h1>
  <form on:submit|preventDefault={submitHandler}>
    <div>
      <label for="username">Felhasználónév:</label>
      <input bind:value={formData.username} type="text" id="username" class:error-input="{errors.username || errors.failedLogin}">
      <p class="error">{ errors.username }</p>
    </div>
    <div>
      <label for="password">Jelszó:</label>
      <input bind:value={formData.password} type="password" id="password" class:error-input="{errors.password || errors.failedLogin}">
      <p class="error">{ errors.password }</p>
    </div>
    <p class="error login">{ errors.failedLogin }</p>
    <button type="submit">Bejelentkezés</button>
  </form>
  <p class="register-text">Még nincs felhasználója? Regisztráljon <a href="/register">itt!</a></p>
</section>

<style lang="scss">
section {
    text-align: left;
    width: 420px;
    height: min-content;
    padding: 20px 50px;
    background-color: var(--formColor);
    border-radius: 8px;

    h1 {
      font-size: 2.8rem;
      margin-bottom: 25px;
      letter-spacing: 2px;
      text-align: center;
    }

    form {
      label {
        display: block;
        margin: 15px 0 5px;
        font-size: 1.8rem;
        letter-spacing: 1.2px;
      }

      input {
        font-size: 1.8rem;
        padding: 3px 8px;
        border: 1.5px solid silver;
        border-radius: 5px;
      }

      button {
        font-size: 2.2rem;
        letter-spacing: 1px;
        margin-top: 25px;
        padding: 10px 0;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        width: 100%;
	      background: var(--accentColor);

        &:hover {
          background: var(--secondaryAccentColor);
        }
      }
    }

    .register-text {
      font-size: 1.2rem;
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

  .error {
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 5px;
  }

  .login {
    text-align: center;
    font-size: 1.8rem;
    margin-top: 10px;
  }
</style>