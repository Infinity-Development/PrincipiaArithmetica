<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
</script>

<!--3 cards per row-->
{#if $page.data && $page.data.positions}
    <div class="flex flex-wrap justify-center items-center justify-evenly">
        {#each $page.data.positions as position}
            <div>
                <Card
                    title={$page.data[position].name}
                    link={"/apply?position=" + position}
                    linkText={"Apply now"}
                >
                    {@html $page.data[position].info.replaceAll("\n", "<br/>")}
                </Card>
            </div>
        {/each}
    </div>
{/if}

<div class="mt-10"></div>

<h5 class="text-2xl font-semibold">More Resources</h5>

<p>Being proactive and helping out is a great way to get noticed by our staff team and
increase your chances of getting hired.</p>

<h6 class="text-xl font-semibold">Seed Guide</h6>

<p>Want to show off your skills as a developer and help contribute to Infinity Bot List's 
open source infrastructure? Then you'll want to first seed your database with some test data.</p>

<Button link={"/dev/seedguide"}>Database Seeding Guide</Button>