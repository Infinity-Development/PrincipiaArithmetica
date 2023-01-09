<script>
	import { page } from "$app/stores";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import GreyText from "$lib/components/GreyText.svelte";
	import { title } from "$lib/strings";
	import { mainSiteUrl } from "$lib/url";
</script>
<h1 class="text-4xl font-bold mb-4 text-orange-400">{title($page.data.position)} Application</h1>
<div class="m-3"></div>
<GreyText>
    Note that not all applications are to get specific "positions" (despite that being the internal representation in the API)<br/>

    Some (most) applications are for certification/resubmission etc.
</GreyText>

<div class="flex flex-wrap justify-center items-center justify-evenly">
    <DefaultCard title={title($page.data.position) + " Application"}>
        <p><span class="font-semibold">App ID:</span> <span class="opacity-90 break-all">{$page.data.app_id}</span></p>
        <p><span class="font-semibold">State:</span> <span class="opacity-90">{$page.data.state}</span></p>
        <p><span class="font-semibold">Created By:</span> <span class="opacity-90"><a href={mainSiteUrl + "/users/" + $page.data.user_id}>{$page.data.user_id}</a></span></p>
        <p><span class="font-semibold">Created At:</span> <span class="opacity-90">{new Date($page.data.created_at)}</span></p>
        <div class="mt-5"></div>
    </DefaultCard>
</div>

{#each $page.data.answers.questions as question}
    <div class="mb-4">
        <h3 class="text-2xl font-bold">{question.question}</h3>
        <p class="text-gray-500">{question.paragraph}</p>
        <p>{$page.data.answers.answers[question.id]}</p>
    </div>
{/each}
