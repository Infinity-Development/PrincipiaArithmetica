import { apiUrl } from '$lib/url';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent }) {
    let session = await parent();

    if(!session.admin) {
        throw error(403, "You are not a admin.");
    }
}
