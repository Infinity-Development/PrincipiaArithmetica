<script>
    import Icon from '@iconify/svelte';
	import PanelCard from '../components/PanelCard.svelte';

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
    <div class="flex flex-wrap justify-center items-center justify-evenly">
        <PanelCard title="Total Bots">
            <p class="text-3xl font-bold text-center">{stats.bots.length}</p>
        </PanelCard>
        <PanelCard title="Total Approved">
            <p class="text-3xl font-bold text-center">
                {stats.bots.filter((/** @type {{ type: any; }} */ bot) => bot.type == "approved" || bot.type == "certified").length}
            </p>
        </PanelCard>
        <PanelCard title="Total Certified">
            <p class="text-3xl font-bold text-center">
                {stats.bots.filter((/** @type {{ type: any; }} */ bot) => bot.type == "certified").length}
            </p>
        </PanelCard>
        <PanelCard title="Total Users">
            <p class="text-3xl font-bold text-center">{stats.total_users}</p>
        </PanelCard>
        <PanelCard title="Total Packs">
            <p class="text-3xl font-bold text-center">{stats.total_packs}</p>
        </PanelCard>
        <PanelCard title="Total Staff">
            <p class="text-3xl font-bold text-center">{stats.total_staff}</p>
        </PanelCard>
        <PanelCard title="Total Votes">
            <p class="text-3xl font-bold text-center">{stats.total_votes}</p>
        </PanelCard>
        <PanelCard title="Total Tickets">
            <p class="text-3xl font-bold text-center">{stats.total_tickets}</p>
        </PanelCard>
    </div>

    <div>
        <div class="block">
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