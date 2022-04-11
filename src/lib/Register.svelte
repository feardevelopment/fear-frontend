<script lang="ts">
	import type { HTTPResponse } from '../util/types';
	import { goto } from '$app/navigation';

	let formData = { email: '', name: '', password: '' };
	let passwordAgain = '';
	let errors = { email: '', name: '', password: '', passwordAgain: '' };
	let status: HTTPResponse;
	let successfulRegister = '';

	const submitHandler = () => {
		let valid = true;

		if (
			!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)
		) {
			valid = false;
			errors.email = 'Helytelen email!';
		} else {
			errors.email = '';
		}

		if (formData.name.trim().length < 1) {
			valid = false;
			errors.name = 'A felhasználónév nem lehet üres!';
		} else {
			errors.name = '';
		}

		if (formData.password.trim().length < 8) {
			valid = false;
			errors.password = 'A jelszó nem lehet kevesebb, mint 8 karakter!';
		} else {
			errors.password = '';
		}

		if (formData.password !== passwordAgain) {
			valid = false;
			errors.passwordAgain = 'A két jelszó nem egyezik!';
		} else {
			errors.passwordAgain = '';
		}

		if (valid) {
			register();
		}
	};

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
			errors.name = 'Már létezik ilyen nevű felhasználó!';
		} else {
			successfulRegister = 'Sikeres bejelentkezés! Hamarosan átirányítjuk.';
			setTimeout(() => {
				goto('login');
			}, 2500);
		}
	}
</script>

<section>
	<h2>Regisztráció</h2>
	<form on:submit|preventDefault={submitHandler}>
		<div>
			<input
				bind:value={formData.email}
				type="text"
				placeholder="Email"
				class:error-input={errors.email}
			/>
			<p class="error">{errors.email}</p>
		</div>
		<div>
			<input
				bind:value={formData.name}
				placeholder="Felhasználónév"
				class:error-input={errors.name}
			/>
			<p class="error">{errors.name}</p>
		</div>
		<div>
			<input
				bind:value={formData.password}
				type="password"
				placeholder="Jelszó"
				class:error-input={errors.password}
			/>
			<p class="error">{errors.password}</p>
		</div>
		<div>
			<input
				bind:value={passwordAgain}
				type="password"
				placeholder="Jelszó ismét"
				class:error-input={errors.passwordAgain}
			/>
			<p class="error">{errors.passwordAgain}</p>
		</div>
		<p class={successfulRegister === '' ? 'hidden' : 'success'}>{successfulRegister}</p>
		<button type="submit">Regisztráció</button>
	</form>
	<div class="have-account">
		<p>Már van fiókja?</p>
		<a href="/login"><p>Jelentkezzen be!</p></a>
	</div>
</section>

<style lang="stylus">
section
	@apply w-max text-left py-5 px-6 my-0 mx-auto bg-white rounded-sm text-black flex flex-col gap-y-4;
	
	form
		@apply flex flex-col gap-y-4;

		input
			@apply input-text py-3 px-4;
			width 340px
			border 0.5px solid black
			border-radius 3px

			&::placeholder
				@apply text-black opacity-100;

		button
			@apply headline-4 mx-auto py-2 px-4 cursor-pointer rounded-xl bg-blue-baby text-white transition-colors w-full;
			
			&:hover 
				@apply bg-blue-footer;

	.have-account
			@apply text-center mt-2 body-1;

			a
				@apply text-green-blueish underline;

.error-input
	@apply border-2 border-red;
	border 2px solid red

.error
	@apply text-red body-2 mt-1 font-bold;

.success	
	@apply text-green-button text-center body-1 mt-2;
</style>
