<script lang="ts">
	import { browser } from "$app/environment";


    async function loginUser() {
        let url = new URL(window.location.href);

        let userId = url.searchParams.get("user_id");
        let apiToken = url.searchParams.get("api_token");

        console.log(userId, apiToken);

        let res = await fetch(`https://spider.infinitybotlist.com/_duser/${userId}`)

        if (!res.ok) {
            alert("Invalid user id or api token");
            return
        }

        let data = await res.json();

        let username = data.username

        document.cookie = `user_id=${userId}; max-age=31536000; path=/;`;
        document.cookie = `api_token=${apiToken}; max-age=31536000; path=/;` 
        document.cookie = `username=${username}; max-age=31536000; path=/;`

        setTimeout(() => window.location.href = "/", 1000)
    }

    if(browser) {
        setTimeout(() => loginUser(), 1000);
    }
</script>

<p>Logging you in...</p>

<a on:click={loginUser} href={"javascript:void(0)"}>If the page does not load, click here</a>