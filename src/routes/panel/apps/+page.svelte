<script>
	import { page } from "$app/stores";
    import Icon from '@iconify/svelte';
	import AppList from "$lib/components/AppList.svelte";
	import GreyText from "$lib/components/GreyText.svelte";
	import { apiUrl } from "$lib/url";
    
    async function getApps() {
        let res = await fetch(`${apiUrl}/users/${$page.data.userId}/apps?full=true`, {
            headers: {
                "Authorization": $page.data.userToken
            }
        })

        if(!res.ok) {
            throw new Error(`Got ${res.status} from API`)
        }

        return await res.json()
    }

    let msgs = [
        "Applying for a position!",
        "Got some apps a bit disorganized, organizing them now!",
        "Infiltrating the palace!",
        "Peace only comes from the barrel of a gun!",
    ]

    let msg = msgs[Math.floor(Math.random() * msgs.length)]
</script>
<h1 class="text-4xl font-bold mb-4 text-orange-400">Application List</h1>
<div class="m-3"></div>
<GreyText>
    Note that not all applications are to get specific "positions" (despite that being the internal representation in the API)<br/>

    Some (most) applications are for certification/resubmission etc.

</GreyText>

{#await getApps()}
    <Icon icon="mdi:yin-yang" width="64px" class="animate-spin text-center m-5" />
    <p class="font-semibold text-xl">{msg}</p>
{:then apps}
    <AppList appData={apps.apps} />
{:catch err}
    <p class="text-white text-center">An error occurred while fetching stats: {err}</p>
{/await}