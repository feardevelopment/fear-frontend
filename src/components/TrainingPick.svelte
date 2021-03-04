<script lang="ts">
  let training = '';
  let promise: Promise<string[]>;

  async function getTraining() {
    const res = await fetch("http://localhost:3000/studies/trainings/available");
    return res.json();
  };

  promise = getTraining();

  async function sendTraining() {
    const data = JSON.stringify({ userID: 'asd', training });
    console.log(data);
    const res = await fetch("http://localhost:3000/user/training/new", {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const status = await res.json();
    console.log(status);
  };
</script>

<main>
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
        <label for="training">Szak:</label>
        <select bind:value="{training}" id="training">
        {#each trainings as training}
          <option value={training}>
            {training}
          </option>
        {/each}
        </select>
      </div>
    {/await}
    <button type="submit"></button>
  </form>
</main>