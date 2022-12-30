import { apiUrl } from '$lib/url';
import { error, redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url, parent }) {
    let session = await parent()

    if(!session.userId) {
        throw redirect(302, '/login')
    }

    let res = await fetch(`${apiUrl}/apps/meta`)

    let position = url.searchParams.get("position")

    if(!position) {
        throw error(400, "Missing position!");
    }

    if (res.ok) {
        let json = await res.json();

        if(!json.positions[position]) {
            throw error(400, "Invalid position!");
        }

        let data = json.positions[position]

        data["positionName"] = position

        return data;
    } else {
        let errorData = await res.text();
        throw error(500, errorData);
    }
}
