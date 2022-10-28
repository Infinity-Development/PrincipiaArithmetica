import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, parent }) {
    let session = await parent()

    if(!session.userId) {
        throw error(400, "Please login so we can verify its really you before starting the interview.");
    }

    let app = await fetch(`https://sovngarde.infinitybots.gg/herpes/app?app_id=${params.id}&user_id=${session.userId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": session.userToken
        }
    });

    if (!app.ok) {
        let errorData = await app.json();
        throw error(404, errorData.reason);
    }

    let appData = await app.json();

    if(appData.user_id != session.userId) {
        throw error(400, "You are not the creator of this application.");
    }

    if(appData.state != "pending-interview") {
        throw error(400, "This application is not pending an interview.");
    }

    let res = await fetch("https://sovngarde.infinitybots.gg/herpes/zoster")

    if (res.ok) {
        let json = await res.json();

        return {
            app: appData,
            interview: json
        };
    }

    let errorData = await res.json();
    throw error(400, errorData.reason);
}