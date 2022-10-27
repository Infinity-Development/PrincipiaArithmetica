import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    let onboardResp = await fetch(`https://sovngarde.infinitybots.gg/svapi-onboarddata?code=${params.tok}`, {
        headers: {
            "sv-version": "wistala3"
        }
    });

    if(!onboardResp.ok) {
        let err = await onboardResp.json();
        throw error(400, err.reason);
    }

    let onboardData = await onboardResp.json();

    return {onboardData: onboardData};
}
