/** @type {import('@sveltejs/kit').HandleClientError} */
export function handleError({ error }) {
    return {
      message: error.toString()
    };
  }
  