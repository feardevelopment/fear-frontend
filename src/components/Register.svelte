<script lang="ts">
  let email = '';
  let password = '';

  async function register() {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const text = await res.text();
    
    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
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