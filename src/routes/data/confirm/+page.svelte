<script lang="ts">
	import { browser } from "$app/environment";
	import Button from "$lib/components/Button.svelte";
	import GreyText from "$lib/components/GreyText.svelte";
	import { apiUrl } from "$lib/url";
	import { toast } from "@zerodevx/svelte-toast";

    let status = "Loading... try clicking the 'Update Status' button?";

    let stopAutoUpdate = false

    function downloadTextFile(text: string, name: string) {
        const a = document.createElement('a');
        const type = name.split(".").pop();
        a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
        a.download = name;
        a.click();
    }  

    async function updateStatus() {
        const searchParams = new URLSearchParams(window.location.search)

        let taskId = searchParams.get("tid");
        let act = searchParams.get("act");

        let res = await fetch(`${apiUrl}/cosmog/tasks/${taskId}`)
        
        let resp = await res.text();

        if(!res.ok) {    
            toast.push(resp);
            return;
        }

        if(resp == "WAITING") {
            status = "Waiting for the task to start..."
        } else if(resp.startsWith("{")) {
            stopAutoUpdate = true
            downloadTextFile(resp, act+"."+taskId+".json")
        } else {
            status = resp
        }
    }

    if(browser) {
        setInterval(() => {
            if(stopAutoUpdate) {
                return
            }
            updateStatus()
        }, 1500)
    }
</script>
<h1 class="text-2xl font-semibold">Collecting data...</h1>
<GreyText>
    {status}
</GreyText>    
<Button on:click={() => updateStatus()} link={"javascript:void(0)"}>Update Status Manually</Button>