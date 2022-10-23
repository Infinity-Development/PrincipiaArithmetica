/** @type {import('./$types').LayoutServerLoad} */
export function load({ cookies }) {
    let user = cookies.get('user');

    let userSplit = user ? user.split('|') : null;

    let userId = userSplit ? userSplit[0] : '';
    let userToken = userSplit ? userSplit[1] : '';

    let username = cookies.get("username") || userId;

    return {
        userId: userId,
        userToken: userToken,
        username: username,
    }
}
  