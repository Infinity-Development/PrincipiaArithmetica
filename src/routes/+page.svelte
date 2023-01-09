<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import ExtCard from "$lib/components/ExtCard.svelte";
	import GreyText from "$lib/components/GreyText.svelte";
	import { mainSiteUrl } from "$lib/url";

    console.log($page.data.positionsList)
	let extPos = 3 - ($page.data.positions.filter((f: any) => !f.hidden).length % 3) // The number of ext pos to have
</script>

<!--3 cards per row-->
{#if $page.data && $page.data.positions}
    <div class="flex flex-wrap justify-center items-center justify-evenly">
        {#each $page.data.positionsList as position}
	    {#if !$page.data.positions[position].hidden}	
            	<div>
                	<Card
                    		title={$page.data.positions[position].name}
                    		link={"/apply?position=" + position}
                    		linkText={"Apply now"}
                    		showArrow={false}
                    		showButton={!$page.data.positions[position].closed}
                	>
                    		{@html $page.data.positions[position].info.replaceAll("\n", "<br/>")}

                    		{#if $page.data.positions[position].closed}
                        		<GreyText>This position is currently closed</GreyText>
                    		{/if}
                	</Card>
            	</div>
	    {/if}
        {/each}
	{#each [...Array(extPos)] as _}
		<ExtCard />
	{/each}
    </div>
{/if}

<div class="mt-14"></div>
<div class="flex flex-wrap justify-center items-center justify-evenly">
    <DefaultCard
        title="More Resources"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">Being proactive and helping out is a great way to get noticed by our staff team and
        increase your chances of getting hired.</p>

        <div class="mt-5"></div>

        <h6 class="text-xl font-semibold dark:text-white">Staff Guide</h6>

        <p class="text-sm">Want to see the rules for what is expected of being a staff member? Then the Staff Guide
        is the place to go!</p>

        <div class="mt-5"></div>

        <Button link={"/staff/guide"}>Staff Guide</Button>

        <div class="mt-5"></div>

        <h6 class="text-xl font-semibold dark:text-white">Reviewer Templates</h6>

        <p class="text-sm">Want some quick approval/denial reasons for approving/denying bots? 
        It's always better to know some good approval/denial reasons especially for onboarding.</p>

        <div class="mt-5"></div>

        <Button link={"/staff/templates"}>Reviewer Templates</Button>

        <div class="mt-5"></div>

        <h6 class="text-xl font-semibold dark:text-white">Developer Guide</h6>

        <p class="text-sm">Want to show off your skills as a developer and help contribute to Infinity Bot List's 
        open source infrastructure? Then you'll want to first seed your database with some test data and learn how 
        to get started.</p>

        <div class="mt-5"></div>

        <Button link={"/dev/guide"}>Developer Guide</Button>
    </DefaultCard>
</div>
