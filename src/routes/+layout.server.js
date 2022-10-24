/** @type {import('./$types').LayoutServerLoad} */
export function load({ cookies }) {
    let userId = cookies.get('user_id') || "";
    let userToken = cookies.get('user_token') || "";

    let username = cookies.get("username") || "Unknown User";

    return {
        userId: userId,
        userToken: userToken,
        username: username,
    }
}
  