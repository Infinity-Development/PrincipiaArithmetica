<script>
	import DefaultCard from "$lib/components/DefaultCard.svelte";
    import GreyText from "$lib/components/GreyText.svelte";
    import { page } from '$app/stores';
	import Select from "$lib/components/Select.svelte";
	import WinGuide from "./WinGuide.svelte";
    import LinuxGuide from "./LinuxGuide.svelte";
    import MacGuide from "./MacGuide.svelte";

    let osMap = new Map();
    // For contributors: Add all the OS's here
    osMap.set("Windows", "windows");
    osMap.set("Linux", "linux");
    osMap.set("MacOS", "mac");

    let os = "default";
</script>
<h2 class="text-2xl font-semibold">SeedShop</h2>
<GreyText>Welcome to SeedShop: Infinity Development's database seeding shop. How can we help you?</GreyText>

<DefaultCard
    title="Current Seed Info"
>
<ul>
    <li><strong>Version:</strong> {$page.data.version}</li>
    <li><strong>Nonce:</strong> {$page.data.nonce}</li>
    <li><strong>Created At:</strong> {$page.data.created_at}</li>
</ul>
</DefaultCard>

<div class="mt-5"></div>

<aside>
    <h4 class="text-xl font-semibold">Checking Seed Version</h4>
    <GreyText>Maybe you already have the right seed version right now?</GreyText>
    <span>To check, run the following SQL queries in PostgreSQL, if any of them fail or error out, then you need to reseed:</span>
    <GreyText><strong>Pro Tip:</strong> <code>$</code> means that you have to run it in bash and <code>psql</code> means to run it in Postgres</GreyText>
    <div class="mt-5"></div>
    <pre>
        <code>$: psql # &lt-- If this fails, you need to install PostgreSQL if not already installed and add it to PATH, then retry
            psql: \c infinity # &lt-- If this fails, you definitely need to reseed
            OUTPUT [SAMPLE]: You are now connected to database "infinity" as user "USERNAME".
            psql: SELECT * FROM seed_info; # &lt-- If this fails, you definitely need to reseed
            OUTPUT [SAMPLE]:          
            OUTPUT [SAMPLE]: nonce | version | created_at            
            OUTPUT [SAMPLE]: ------+---------+---------------------------------
            OUTPUT [SAMPLE]: Q8sdRaXx2Scsb_yLttUS3A | 9 | 2022-10-23 07:23:48.33244+05:30
            (1 row)
        </code>
    </pre>
    <span>For the people who just want the raw commands:</span>
    <pre>
        <code>
            $: psql
            psql: \c infinity
            psql: SELECT * FROM seed_info;
        </code>
    </pre>
    <span>Check that the <code>nonce</code> and <code>version</code> match (or are newer than) the <em>Current Seed Info</em> card</span>
</aside>

<div class="mt-5"></div>

<h4 class="text-xl font-semibold">Time to seed?</h4>
<Select 
    name="os"
    placeholder="Choose your operating system"
    options={osMap}
    bind:value={os}
/>

<div class="mt-10"></div>

{#if os == "windows"}
    <WinGuide />
{:else if os == "linux"}
    <LinuxGuide />
{:else if os == "mac"}
    <MacGuide />
{/if}

<style>
    pre, code {
        white-space: pre-line;
    }

    ul {
        list-style: none;
    }
    :global(.li-seedshop-ul:before) {
        content: "∞ ";
    }

    :global(.li-seedshop-ul) {
        padding-left: 30px;
    }
</style>