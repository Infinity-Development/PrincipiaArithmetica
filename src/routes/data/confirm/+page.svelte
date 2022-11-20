<script lang="ts">
	import GreyText from "$lib/components/GreyText.svelte";


    function downloadTextFile(text: string, name: string) {
        const a = document.createElement('a');
        const type = name.split(".").pop();
        a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
        a.download = name;
        a.click();
    }  
</script>
<h1 class="text-2xl font-semibold">Collecting data...</h1>
<GreyText>
    The action you have selected may take a bit of time to process. Do not close this tab until it has finished!
</GreyText>    
