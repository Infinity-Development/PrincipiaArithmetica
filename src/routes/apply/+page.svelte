<script lang="ts">
    import { page } from "$app/stores"
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import Input from "$lib/components/Input.svelte";
</script>

<div class="flex justify-center items-center">
    <DefaultCard 
        title={"Applying for " + $page.data.name} 
    >
        {@html $page.data.info.replaceAll("\n", "<br/>")}
    </DefaultCard>
</div>

<div class="mt-10"></div>

{#each $page.data.questions as question}
    <Input
        id={question.id}
        label={question.question}
        placeholder={question.placeholder}
    >{question.para}</Input>
{/each}
