<script lang="ts">
  let email: string;
  let password: string;
  let message: string;

  async function register() {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    message = (await res.json()).message;
  }
</script>

<section>
    <h1>Regisztráció</h1>
    <form>
      <label for="email">Email:</label>
      <input bind:value={email} type="text" id="email">
      <label for="password">Jelszó:</label>
      <input bind:value={password} type="password" id="password">
      <input on:click={register} type="button" value="Regisztráció">
    </form>
</section>

<style lang="scss">
  section {
    width: min-content;
    height: min-content;
    max-width: 960px;
    padding: 20px 50px;
    margin: 0 auto;

    h1 {
      font-size: 32px;
      margin-bottom: 35px;
      letter-spacing: 2px;
    }

    form {
      label {
        display: block;
        font-size: 18px;
        letter-spacing: 1.2px;
        font-weight: 500;
        opacity: 80%;
      }

      input {
        font-size: 20px;
        margin: 8px 0 15px;
        padding: 3px 8px;

        &[type="button"] {
          cursor: pointer;
        }
      }
    }
  }
</style>