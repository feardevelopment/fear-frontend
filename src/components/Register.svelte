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

<div>
    <h1>Regisztráció</h1>
    <form>
        <label for="email">Email:</label>
        <input bind:value={email} type="text" id="email">
        <label for="password">Jelszó:</label>
        <input bind:value={password} type="password" id="password">
        <input on:click={register} type="button" value="Regisztráció">
    </form>
</div>

<style lang="scss">

</style>