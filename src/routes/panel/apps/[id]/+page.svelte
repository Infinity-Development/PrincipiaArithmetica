<script>
	import { page } from "$app/stores";
	import GreyText from "$lib/components/GreyText.svelte";
	import { title } from "$lib/strings";
</script>
<h1 class="text-4xl font-bold mb-4 text-orange-400">{title($page.data.position)} Application</h1>
<div class="m-3"></div>
<GreyText>
    Note that not all applications are to get specific "positions" (despite that being the internal representation in the API)<br/>

    Some (most) applications are for certification/resubmission etc.

</GreyText>

{#each $page.data.answers.questions as question}
    <div class="mb-4">
        <h3 class="text-2xl font-bold">{question.question}</h3>
        <p class="text-gray-500">{question.paragraph}</p>
        <p>{$page.data.answers.answers[question.id]}</p>
    </div>
{/each}
