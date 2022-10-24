<script lang="ts">
    import { page } from "$app/stores"
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