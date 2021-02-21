<script lang="ts">
  let email = '';
  let password = '';
  let success: boolean;

  async function register() {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const text = await res.text();
    success = text == '"OK"';
  }
</script>

<div>
    <h1>Regisztráció</h1>
    <form>
        <label for="email">Email:</label>
        <input bind:value={email} type="text" id="email">
        <label for="password">Jelszó:</label>
        <input bind:value={password} type="password" id="password">
        <label for="password-again">Jelszó ismét:</label>
        <input type="password" id="password-again">
        <input on:click={register} type="button" value="Regisztráció">
    </form>
</div>

<style lang="scss">

</style>