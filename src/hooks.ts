import type { MaybePromise, RequestEvent, ResolveOptions } from '@sveltejs/kit/types/private';
import { parse } from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({
	event,
	resolve
}: {
	event: RequestEvent;
	resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) {
	const cookies = parse(event.request.headers.get('cookie') || '');

	if (cookies.token) {
		event.locals.user = { email: cookies.email };
		return resolve(event);
	}

	event.locals.user = null;
	return resolve(event);
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event: RequestEvent) {
	return event.locals.user
		? {
				user: {
					email: event.locals.user.email
				}
		  }
		: {};
}
