import { error, redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url, parent }) {
    let session = await parent()

    if(!session.userId) {
        throw redirect(302, '/login')
    }

    let res = await fetch(`https://sovngarde.infinitybots.gg/herpes`)

    let position = url.searchParams.get("position")

    if(!position) {
        throw error(400, "Missing position!");
    }

    if (res.ok) {
        let json = await res.json();

        if(!json[position]) {
            throw error(400, "Invalid position!");
        }

        return json[position];
    } else {
        let errorData = await res.text();
        throw error(500, errorData);
    }
}
