<script lang="ts">
  let formData = { email: '', password: '' };
  let errors = { email: '', password: '' };
  let message: string;

  const submitHandler = () => {
    let valid = true;
    
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
      valid = false;
      errors.email = 'Helytelen email!';
    } else {
      errors.email = '';
    }

    if (formData.password.length < 8 || formData.password.length > 24) {
      valid = false;
      errors.password = 'A jelszónak 8 és 24 karakter között kell lennie!';
    } else {
      errors.password = '';
    }

    if (valid) {
      register();
    }
  }

  async function register() {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    message = (await res.json()).message;
    console.log(message);
  }
</script>

<section>
    <h1>Regisztráció</h1>
    <form on:submit|preventDefault={submitHandler}>
      <label for="email">Email:</label>
      <input bind:value={formData.email} type="text" id="email" class:error-input="{errors.email}" autocomplete="false">
      <p class="error">{ errors.email }</p>
      <label for="password">Jelszó:</label>
      <input bind:value={formData.password} type="password" id="password" class:error-input="{errors.password}">
      <p class="error">{ errors.password }</p>
      <button type="submit">Regisztráció</button>
    </form>
</section>

<style lang="scss">
  section {
    width: min-content;
    height: min-content;
    max-width: 960px;
    padding: 20px 50px;
    margin: 0 auto;
    background-color: #EDEDED;

    h1 {
      font-size: 32px;
      margin-bottom: 35px;
      letter-spacing: 2px;
      font-weight: bold;
    }

    form {
      label {
        display: block;
        margin: 15px 0 5px;
        font-size: 18px;
        letter-spacing: 1.2px;
        font-weight: 500;
        opacity: 80%;
      }

      input {
        font-size: 20px;
        padding: 3px 8px;
        border: 1.5px solid silver;
        border-radius: 5px;
      }

      button {
        font-size: 20px;
        margin-top: 15px;
        padding: 3px 8px;
        cursor: pointer;
      }
    }
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