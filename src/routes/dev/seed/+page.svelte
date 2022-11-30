<script>
    import GreyText from "$lib/components/GreyText.svelte";
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

<div class="mt-5"></div>

<aside>
    <strong>Note that if you still use the deprecated seedman, you will have to follow this guide, otherwise, just run <code>ibl seed apply latest</code></strong>
</aside>

<div class="mt-5"></div>

<h4 class="text-xl font-semibold">Step 1: Installing <code>ibl</code></h4>
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

<h4 class="text-xl font-semibold">Step 2: Do the thing!</h4>

Run <code>ibl seed apply latest</code>. It's that simple! If you need to update <code>ibl</code> client, just run <code>ibl update</code>!

<style>
    code {
        white-space: pre-line;
    }

    :global(.li-seedshop-ul:before) {
        content: "∞ ";
    }

    :global(.li-seedshop-ul) {
        padding-left: 30px;
    }
</style>