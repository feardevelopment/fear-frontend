import { serialize } from 'cookie';

export const post = async () => {
	const headers = {
		'Set-Cookie': serialize('token', '', {
			expires: new Date(0),
			path: '/'
		})
	};

	return {
		status: 200,
		headers
	};
};
