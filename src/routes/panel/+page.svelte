<script>
    import DefaultCard from '$lib/components/DefaultCard.svelte';
	import GreyText from '$lib/components/GreyText.svelte';
    import Icon from '@iconify/svelte';

    async function getStats() {
        let res = await fetch("https://spider.infinitybots.gg/list/stats")
        return await res.json()
    }

    let msgs = [
        "Chomping on some numbers!",
        "Infiltrating the palace!",
        "Peace only comes from the barrel of a gun!",
    ]

    let msg = msgs[Math.floor(Math.random() * msgs.length)]
</script>
<h1 class="text-4xl font-bold mb-4 text-orange-400">Statistics</h1>

{#await getStats()}
    <Icon icon="mdi:yin-yang" width="64px" class="animate-spin text-center m-5" />
    <p class="font-semibold text-xl">{msg}</p>
{:then stats}
    <div>
        <div class="w-96 block">
            <details>
                <summary class="cursor-pointer">
                    <span>Advanced Info</span>
                </summary>
                <span class="text-xs break-all word-wrap">
                    <code>
                        {JSON.stringify(stats)}
                    </code>
                </span>
            </details>
        </div>
    </div>
{:catch err}
    <p class="text-white text-center">An error occurred while fetching stats: {err}</p>
{/await}