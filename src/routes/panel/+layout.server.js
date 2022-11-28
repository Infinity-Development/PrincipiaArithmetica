/** @type {import('./$types').LayoutServerLoad} */
export async function load({ parent, fetch }) {
    let session = await parent();

    if(!session || !session.userId) {
        return {
            staff: false,
            admin: false,
            hadmin: false,
            loggedIn: false,
            user: null,
        }
    }

    // Query /users/:id
    let res = await fetch(`https://spider.infinitybots.gg/users/${session.userId}`);

    if (res.ok) {
        let resp = await res.json();
        return {
            staff: resp.staff || false,
            admin: resp.admin || false,
            hadmin: resp.hadmin || false,
            loggedIn: true,
            user: resp || null,
        }
    } else {
        return {
            staff: false,
            admin: false,
            hadmin: false,
            loggedIn: true,
            user: null,
        }
    }
}
  