import type { RequestEvent } from '@sveltejs/kit/types/private';
import { serialize } from 'cookie';

export const post = async ({ request }: RequestEvent) => {
	const body = await request.json();
	const res = await fetch('http://localhost:3000/api/auth/login', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (!res.ok) {
		return {
			status: 403,
			body: {
				message: 'Sikertelen bejelentkezés'
			}
		};
	}

	const response = await res.json();

	const headers = {
		'Set-Cookie': [
			serialize('token', response.token, {
				httpOnly: true,
				sameSite: 'lax',
				maxAge: 60 * 60 * 24 * 7,
				path: '/'
			}),
			serialize('email', body.email, {
				httpOnly: true,
				sameSite: 'lax',
				maxAge: 60 * 60 * 24 * 7,
				path: '/'
			})
		]
	};

	return {
		status: response.status,
		headers,
		body: {
			email: body.email
		}
	};
};
