<script lang="ts">
	import { title } from "$lib/strings";

    export let name: string;
    export let hasPerm: boolean;
</script>
<p><span class="font-semibold">{title(name)}</span> <span class="opacity-90">[{name}]:</span> <span class="opacity-70">{hasPerm}</span></p>