<script lang="ts">
  let formData = { firstName: '', lastName: '', email: '', username: '', password: '' };
  let errors = { firstName: '', lastName: '', email: '', username: '', password: '' };
  let message: string;

  const submitHandler = () => {
    let valid = true;

    if (formData.firstName.trim().length < 1) {
      valid = false;
      errors.firstName = 'A keresztnév nem lehet üres!'
    } else {
      errors.firstName = '';
    }

    if (formData.lastName.trim().length < 1) {
      valid = false;
      errors.lastName = 'A vezetéknév nem lehet üres!'
    } else {
      errors.lastName = '';
    }

    if (formData.username.trim().length < 1) {
      valid = false;
      errors.username = 'A felhasználónév nem lehet üres!'
    } else {
      errors.username = '';
    }
    
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
      valid = false;
      errors.email = 'Helytelen email!';
    } else {
      errors.email = '';
    }

    if (formData.password.trim().length < 8) {
      valid = false;
      errors.password = 'A jelszó nem lehet kevesebb, mint 8 karakter!';
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
      <div class="name-inputs">
        <div>
          <label for="firstName">Keresztnév:</label>
          <input bind:value={formData.firstName} type="text" id="firstName" class:error-input="{errors.firstName}">
          <p class="error">{ errors.firstName }</p>
        </div>
        <div>
          <label for="lastName">Vezetéknév:</label>
          <input bind:value={formData.lastName} type="text" id="lastName" class:error-input="{errors.lastName}">
          <p class="error">{ errors.lastName }</p>
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input bind:value={formData.email} type="text" id="email" class:error-input="{errors.email}">
        <p class="error">{ errors.email }</p>
      </div>
      <div>
        <label for="password">Jelszó:</label>
        <input bind:value={formData.password} type="password" id="password" class:error-input="{errors.password}">
        <p class="error">{ errors.password }</p>
      </div>
      <button type="submit">Regisztráció</button>
    </form>
</section>

<style lang="scss">
  section {
    width: 550px;
    height: min-content;
    max-width: 960px;
    padding: 20px 50px;
    margin: 0 auto;
    background-color: #EDEDED;
    border-radius: 8px;

    h1 {
      font-size: 32px;
      margin-bottom: 25px;
      letter-spacing: 2px;
      font-weight: bold;
      text-align: center;
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
        margin-top: 25px;
        padding: 10px 0;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: var(--footerColor);
        color: #EDEDED;
        width: 100%;
      }
    }
  }

  input {
    width: 100%;
  }

  .name-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
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