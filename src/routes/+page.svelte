<script lang="ts">
    import { page } from "$app/stores"
	import Card from "$lib/components/Card.svelte";
</script>

<!--3 cards per row-->
<div class="flex flex-wrap justify-center items-center justify-evenly">
    {#each $page.data.positions as position}
        <div>
            <Card
                title={$page.data[position].name}
                para={$page.data[position].info.replaceAll("\n", "<br/>")}
                link={"/apply?position=" + position}
                linkText={"Apply now"}
            />
        </div>
    {/each}
</div>