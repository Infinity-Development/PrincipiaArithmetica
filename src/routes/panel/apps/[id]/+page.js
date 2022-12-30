import { apiUrl } from '$lib/url';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    let res = await fetch(`${apiUrl}/apps/${params.id}`)

    if (res.ok) {
        let json = await res.json();

        return json;
    }

    let errorData = await res.json();

    throw error(res.status, errorData.message);
}
