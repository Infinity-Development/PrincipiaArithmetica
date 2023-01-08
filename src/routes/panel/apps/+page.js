import { apiUrl } from '$lib/url';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent }) {
    let session = await parent();

    if(!session.admin) {
        throw error(403, "You are not a admin.");
    }

    let res = await fetch(`${apiUrl}/users/${session.userId}/apps?full=true`, {
        headers: {
            "Authorization": session.userToken
        }
    })

    if (res.ok) {
        let json = await res.json();

        return json;
    }

    let errorData = await res.json();

    throw error(res.status, errorData.message);
}
