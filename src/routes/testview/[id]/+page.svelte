<script>
	import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";

</script>
<h2 class="text-3xl font-bold">App State: {$page.data.position}</h2>

{#each $page.data.answers.questions as question}
    <div class="mb-4">
        <h3 class="text-2xl font-bold">{question.question}</h3>
        <p class="text-gray-500">{question.para}</p>
        <p>{$page.data.answers.answers[question.id]}</p>
    </div>
{/each}

{#if $page.data.position == "pending"}
    <Button link={"javascript:void(0)"}>Send Interview</Button>
{/if}