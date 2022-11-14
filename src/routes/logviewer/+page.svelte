<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
    import GreyText from "$lib/components/GreyText.svelte";
	import InputSm from "$lib/components/InputSm.svelte";
    import { toast } from '@zerodevx/svelte-toast'

    let psk = ""
    let ip = "100.86.85.125" // Default IP
    let file = "popplio.log" // Default logfile

    let statusMsg = "Ready!"

    let logData: any[] = []

    let filters = {
        allowedLevels: ["info", "warn", "error", "debug"],
    }

    let pageData = {
        limit: 300,
        offset: 0
    }

    let lineCount = 0

    async function getLineCount() {
        statusMsg = `Fetching line count of ${file}...`

        let res = await fetch(`${ip}/${file}/length`, {
            headers: {
                "PSK": psk
            }
        })

        if(!res.ok) {
            toast.push(`Got ${res.status}. Is the PSK correct?`)
            let resText = await res.text()
            statusMsg = `Got ${res.status}. Is the PSK correct? ${resText}`
            return
        }

        let data = await res.json()

        lineCount = data.length

        statusMsg = `Got line count of ${lineCount}`

        pageData = pageData
    }

    async function getLogEntries() {
        statusMsg = `Fetching ${pageData.limit} entries from offset ${pageData.offset}...`

        let res = await fetch(`${ip}/${file}?limit=${pageData.limit}&offset=${pageData.offset}`, {
            headers: {
                "PSK": psk
            }
        })

        if(!res.ok) {
            toast.push(`Got ${res.status}. Is the PSK correct?`)
            let resText = await res.text()
            statusMsg = `Got ${res.status}. Is the PSK correct? ${resText}`
            return
        }

        let data = await res.json()

        logData = data

        statusMsg = `Fetched ${pageData.limit} entries from offset ${pageData.offset}`

        await getLineCount()

        pageData = pageData
    }

    async function connect() {
        if(!psk || !ip || !file) {
            toast.push("Please fill out all fields")
            return
        }

        statusMsg = "Connecting..."

        if(!ip.startsWith("http")) {
            // Set port if not set
            if(!ip.includes(":")) {
                ip = ip + ":1039"
            }

            ip = "http://" + ip
        }

        try {
            let res = await fetch(`${ip}/conntest/a`, {
                headers: {
                    "PSK": psk
                }
            })

            if(!res.ok) {
                toast.push(`Got ${res.status}. Is the PSK correct?`)
                let resText = await res.text()
                statusMsg = `Got ${res.status}. Is the PSK correct? ${resText}`
                return
            }
        } catch (err) {
            statusMsg = `Connection failed: ${err}`
        }

        getLogEntries()
    }

    function title(str: string) {
        return str.replace(/(^|\s)\S/g, function(t: string) { return t.toUpperCase() });
    }

    function cast(a: any): string {
        return a.toString()
    }

    function castToObj(a: any): any {
        if(typeof a === "object") {
            return a
        }
        return {}
    }

    function setLimit() {
        let limit = parseInt(prompt("Enter new limit") || "0")

        if(!limit || limit > 300) {
            toast.push("Invalid limit")
            return
        }

        pageData.limit = limit
    }
</script>

<div class="flex justify-center items-center">
    <DefaultCard title="Usage Instructions">
        <GreyText>For Developers Only</GreyText>
        <h3>This allows viewing the Popplio logs</h3>

        <div class="mt-5"></div>
        
        <ol class="list-decimal list-inside">
            <li>Login to the VPS, then run <code>logviewer/log.py</code> within Popplio</li>
            <li>Type the server IP, PSK (per-session key, this is printed to the terminal on every run) and filename below to view</li>
        </ol>

        <div class="mt-5"></div>

        <InputSm
            id="server"
            label="Server IP"
            placeholder="100.XX.XX.XX"
            bind:value={ip}
            minlength={1}
        />
        
        <InputSm
            id="psk"
            label="PSK (per-session key)"
            placeholder="PSK"
            bind:value={psk}
            minlength={1}
        />

        <InputSm
            id="logfile"
            label="File to view"
            placeholder="popplio.log etc."
            bind:value={file}
            minlength={1}
        />

        <Button onclick={() => connect()} link={"javascript:void(0)"} showArrow={false}>Connect!</Button>
        <div class="mt-5"></div>
        <p><span class="font-semibold">Status:</span> {statusMsg}</p>
    </DefaultCard>
</div>
<div class="flex justify-center items-center">
    <DefaultCard title="Options">
        <Button onclick={() => setLimit()} link={"javascript:void(0)"} showArrow={false}>Set Limit</Button>
        <div class="mt-5"></div>
        <p><span class="font-semibold">Limit: </span>{pageData.limit}</p>
        <p><span class="font-semibold">Current Offset: </span>{pageData.offset}</p>
        <p><span class="font-semibold">Current Page: </span>{Math.floor(pageData.offset/pageData.limit) + 1}</p>
        <p><span class="font-semibold">Line Count: </span> {lineCount}</p>
    </DefaultCard>
</div>

{#each logData as entry}
    {#if filters.allowedLevels.includes(entry.level)}
        <span>
            {#each Object.entries(entry) as [key, value]}
                {#if key !== "ts"}
                    <!--Case where value is a object-->
                    {#if typeof value === "object"}
                        <p><span class="font-semibold">{title(key)}:</span></p>
                        {#each Object.entries(castToObj(value)) as [key2, value2]}
                            <ul>
                                <li><span class="ml-2">{title(key2)}: {cast(value2)}</span></li>
                            </ul>
                        {/each}
                    {:else}
                        <p><span class="font-semibold">{title(key)}:</span> {cast(value).replaceAll("<", "&lt").replaceAll(">", "&gt")}</p>
                    {/if}
                {/if}
            {/each}
            <p><span class="font-semibold">Timestamp:</span> <span class="text-md text-gray-500 dark:text-gray-400 mb-2">{new Date(entry.ts * 1000)}</span></p>
        </span>
        <div class="mt-5"></div>
    {/if}
{/each}

{#if logData.length > 0}
    <div class="flex justify-center items-center">
        {#if pageData.offset >= pageData.limit}
            <Button onclick={() => {
                pageData.offset -= pageData.limit
                getLogEntries()
            }} link={"javascript:void(0)"} showArrow={false}>Previous</Button>
        {/if}
        <div class="mr-5"></div>
        <Button onclick={() => {
            // Using lineCount, get the total number of pages
            let page = Math.floor(lineCount/pageData.limit)
            pageData.offset = pageData.limit * page
            getLogEntries()
        }} link={"javascript:void(0)"} showArrow={false}>Last</Button>
        <div class="mr-5"></div>
        {#if logData.length == pageData.limit}
            <Button onclick={() => {
                pageData.offset += pageData.limit
                getLogEntries()
            }} link={"javascript:void(0)"} showArrow={false}>Next</Button>
        {/if}
    </div>
{/if}