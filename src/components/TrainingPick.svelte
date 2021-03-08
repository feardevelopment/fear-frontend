<script lang="ts">
  import type { HTTPResponse } from "static/types";

  let training = '';
  let promise: Promise<string[]>;
  let result = '';
  let status: HTTPResponse;

  async function getTraining() {
    const res = await fetch("http://localhost:3000/studies/trainings/available");
    return res.json();
  };

  promise = getTraining();

  async function sendTraining() {
    const token = localStorage.getItem("FEAR_token");
    const data = JSON.stringify({ token, training });
    
    const res = await fetch("http://localhost:3000/user/training/new", {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    status = await res.json();
    result = status.result;

    if (status.code === 200) {
      setTimeout(() => {
        window.location.href = "/home";  // This should work fine now, only for testing
      // Maybe should find an official route change within svelte-kit
      }, 1500);
    }
  };
</script>

<section>
  <form on:submit|preventDefault="{sendTraining}">
    <!-- <div>
      <label for="name">Név:</label>
      <input type="text" id="name">
    </div>
    <div>
      <label for="birth-date">Születési dátum:</label>
      <input type="date" id="birth-date">
    </div> -->
    {#await promise}
      <p>...waiting</p>
    {:then trainings} 
      <div>
        <h1>Szak kiválasztása</h1>
        <label for="training">Szak:</label>
        <select bind:value="{training}" id="training">
        {#each trainings as training}
          <option value={training}>
            {training}
          </option>
        {/each}
        </select>
      </div>
      <button type="submit">Tovább</button>
    {/await}
  </form>
  <p>{result}</p>
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
      font-size: 28px;
      margin-bottom: 25px;
      letter-spacing: 2px;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
    }

    form {
      label {
        display: block;
        margin: 15px 0 5px;
        font-size: 18px;
        letter-spacing: 1.2px;
        opacity: 80%;
      }

      select {
        font-size: 18px;
        padding: 3px 8px;
        border: 1.5px solid silver;
        border-radius: 5px;
        width: 100%;
      }

      button {
        font-size: 22px;
        letter-spacing: 1px;
        margin-top: 25px;
        padding: 10px 0;
        cursor: pointer;
        border: none;
        border-radius: 5px;
	      background: linear-gradient(225deg, var(--accentColor) 0%, var(--secondaryAccentColor) 100%);
        width: 100%;
      }
    }
  }
</style>