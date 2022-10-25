<script lang="ts">
    import { page } from "$app/stores";
    import DefaultCard from "$lib/components/DefaultCard.svelte";
	import Input from "$lib/components/Input.svelte";
</script>

<DefaultCard
    title="Interview"
>
Its interview time<br/><br/>

Note that the questions below are very general questions to allow us to get a 
better idea of who you are and whether you will be a good fit for our staff team.
</DefaultCard>

{#each $page.data.interview as question}
    <Input
        id={question.id}
        label={question.question}
        placeholder={question.placeholder}
        minlength={50}
    >{question.para}</Input>
{/each}
