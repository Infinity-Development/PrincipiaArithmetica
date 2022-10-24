<script>
	import { page } from "$app/stores";

</script>
{#each $page.data.answers.questions as question}
    <div class="mb-4">
        <h3 class="text-2xl font-bold">{question.question}</h3>
        <p class="text-gray-500">{question.para}</p>
        <p>{$page.data.answers}</p>
    </div>
{/each}