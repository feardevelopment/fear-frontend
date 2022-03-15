<script lang="ts">
  import type { HTTPResponse } from "../util/types";
  import { goto } from '$app/navigation';

  let formData = { firstName: '', lastName: '', email: '', username: '', password: '' };
  let errors = { firstName: '', lastName: '', email: '', username: '', password: '' };
  let status: HTTPResponse;
  let successfulRegister = '';

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
      formData.firstName = formData.firstName[0].toUpperCase() + formData.firstName.substring(1).toLowerCase();
      formData.lastName = formData.lastName[0].toUpperCase() + formData.lastName.substring(1).toLowerCase();
      register();
    }
  }

  async function register() {
    const res = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    status = await res.json();
    
    if (status.code !== 200) {
      errors.username = 'Már létezik ilyen nevű felhasználó!';
    } else {
      successfulRegister = 'Sikeres bejelentkezés! Hamarosan átirányítjuk.';
      setTimeout(() => {
        goto('login');
      }, 2500);
    }
  }
</script>

<section>
    <h3>Regisztráció</h3>
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
        <label for="username">Felhasználónév:</label>
        <input bind:value={formData.username} type="text" id="username" class:error-input="{errors.username}">
        <p class="error">{ errors.username }</p>
      </div>
      <div>
        <label for="password">Jelszó:</label>
        <input bind:value={formData.password} type="password" id="password" class:error-input="{errors.password}">
        <p class="error">{ errors.password }</p>
      </div>
      <p class="{ successfulRegister === '' ? 'hidden' : 'success' }">{ successfulRegister }</p>
      <button type="submit">Regisztráció</button>
    </form>
    <p class="login-text">Már van fiókja? Jelentkezzen be <a href="/login">itt!</a></p>
</section>

<style lang="stylus">
  section 
    @apply w-full text-left h-min py-5 px-12 my-0 mx-auto bg-white rounded-lg text-black;
    max-width 600px

    h3
      @apply mb-4;
    
    form
      @apply flex flex-col gap-y-4;

      label
        @apply headline-6 mt-4 mx-0 mb-1;

      input
        @apply headline-6 rounded-md py-1 px-2;
        border 1.5px solid silver

      button
        @apply headline-4 mt-4 mx-auto py-2 px-4 cursor-pointer rounded-md bg-green-button transition-colors;
        
        &:hover 
          @apply bg-green-active;
        
    .login-text
      @apply body-1 text-center mt-2;

      a
        @apply text-green-button underline;
    
  input 
    @apply w-full;

  .name-inputs
    @apply flex gap-x-3;
  
  .error-input
    @apply border-2 border-red;
    border 2px solid red

  .error
    @apply text-red body-2 mt-1 font-bold;
  
  .success
    @apply text-green-button text-center body-1 mt-2;
</style>
