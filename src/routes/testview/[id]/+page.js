import { error, redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, parent }) {
    let session = await parent()

    if(!session.userId) {
        throw redirect(302, '/login')
    }

    let res = await fetch(`https://sovngarde.infinitybots.gg/herpes/app?app_id=${params.id}&user_id=${session.userId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": session.userToken
        }
    })

    if (res.ok) {
        let json = await res.json();

        return json;
    } else {
        let errorData = await res.text();
        throw error(500, errorData);
    }
}
