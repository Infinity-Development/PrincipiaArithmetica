<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import GreyText from "$lib/components/GreyText.svelte";

    export let name: string;
    export let repoName: string;
    export let description: string;
</script>

<h3 class="text-xl font-semibold">{name}</h3>
<GreyText>{description}</GreyText>
<Button link={`https://github.com/InfinityBotList/${repoName}`}>View {name}}</Button>
