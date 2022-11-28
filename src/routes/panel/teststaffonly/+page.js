import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    let session = await parent();

    if(!session.staff) {
        throw error(400, "You are not a staff member.");
    }
}
