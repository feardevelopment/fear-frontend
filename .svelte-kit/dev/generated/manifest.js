const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\training-pick\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\register\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\login\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\home\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/training-pick/index.svelte
	[/^\/training-pick\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/register/index.svelte
	[/^\/register\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/login/index.svelte
	[/^\/login\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/home/index.svelte
	[/^\/home\/?$/, [c[0], c[6]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];