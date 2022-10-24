import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent }) {
    let res = await fetch(`https://sovngarde.infinitybots.gg/herpes`)

    if (res.ok) {
        let json = await res.json();

        return json;
    } else {
        let errorData = await res.text();
        throw error(500, errorData);
    }
}
