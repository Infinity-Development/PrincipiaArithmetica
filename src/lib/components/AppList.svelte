<script lang="ts">
	import { title } from "$lib/strings";
	import { mainSiteUrl } from "$lib/url";
	import Card from "./Card.svelte";
	import ExtCard from "./ExtCard.svelte";

    export let appData: any;

    let extPos = 3 - (appData.length % 3) // The number of ext pos to have
</script>
<div class="flex flex-wrap justify-center items-center justify-evenly">
    {#each appData as app}
        <Card title={title(app.position) + " Application"} link={"/panel/apps/" + app.app_id} linkText="View">
            <p><span class="font-semibold">App ID:</span> <span class="opacity-90 break-all">{app.app_id}</span></p>
            <p><span class="font-semibold">State:</span> <span class="opacity-90">{app.state}</span></p>
            <p><span class="font-semibold">Created By:</span> <span class="opacity-90"><a href={mainSiteUrl + "/users/" + app.user_id}>{app.user_id}</a></span></p>
            <p><span class="font-semibold">Created At:</span> <span class="opacity-90">{new Date(app.created_at)}</span></p>
            <div class="mt-5"></div>
        </Card>
    {/each}
	{#each [...Array(extPos)] as _}
        <ExtCard />
	{/each}
</div>
