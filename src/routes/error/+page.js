import { error as errorExc } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    let error = url.searchParams.get("msg") || "unknown_error";

    switch (error) {
        case "api_token_failed":
            error = "Failed to get api token, try logging in on v4 at least once?";
            break;
        case "unknown_error":
            error = "Unknown error, try again later?";
            break;
    }

    throw errorExc(400, error);
}
