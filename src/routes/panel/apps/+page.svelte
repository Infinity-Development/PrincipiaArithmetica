<script>
	import { page } from "$app/stores";
	import AppList from "$lib/components/AppList.svelte";
	import GreyText from "$lib/components/GreyText.svelte";
</script>
<h1 class="text-4xl font-bold mb-4 text-orange-400">Application List</h1>
<div class="m-3"></div>
<GreyText>
    Note that not all applications are to get specific "positions" (despite that being the internal representation in the API)<br/>

    Some (most) applications are for certification/resubmission etc.

</GreyText>

<AppList appData={$page.data.apps} />