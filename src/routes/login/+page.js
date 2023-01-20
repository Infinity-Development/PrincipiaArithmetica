import { mainSiteUrl } from '$lib/url';
import { redirect, error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load() {
    throw redirect(302, mainSiteUrl+`/sauron?state=portalLogin`);
}
