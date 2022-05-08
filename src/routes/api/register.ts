import type { RequestEvent } from '@sveltejs/kit/types/private';

export const post = async ({ request }: RequestEvent) => {
	const body = await request.json();
	const res = await fetch('http://localhost:3000/api/auth/register', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const { status } = await res.json();

	return {
		status
	};
};
