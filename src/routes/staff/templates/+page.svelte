<script lang="ts">
	import Button from "$lib/components/Button.svelte";
import InputSm from "$lib/components/InputSm.svelte";
import Input from "$lib/components/Input.svelte";
import Template from "./Template.svelte";

    let listName = "[list name]"
    let commands = "[commands/features here]"
</script>

<h5 class="text-2xl font-semibold">Approval Templates</h5>
<p class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300">The below templates also serve as great checks before approving or denying a bot</p>

<div class="flex flex-wrap justify-start justify-evenly">
    <!--Place all approval reasons here-->
    <Template
        title="Cool Bot"
        icon="👏"
        reason="
Thank you for applying.

Your bot is cool and all the commands seem to be working as they should. 

Welcome to {listName}." />
    <Template
        title="Nice Bot"
        icon="😁"
        reason="
Very nice bot with a huge variety of features. 

I have experienced little to no errors while testing this bots features. 

Keep up the amazing work and welcome to {listName}" />
    <Template
        title="Minor Issues"
        icon="🤨"
        reason="
Your bot seems to be having a few issues with {commands}. 
        
Everything else seems to work as intended. Welcome to {listName}" />
</div>

<div class="mt-5"></div>

<h5 class="text-2xl font-semibold">Denial Templates</h5>
<p class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300">Whenever denying a bot, it is recommended to try using a template if one exists</p>

<div class="flex flex-wrap justify-start justify-evenly">
    <!--Place all deny reasons here-->
    <Template
        title="Bot Offline"
        icon="📡"
        reason="
Your bot was offline when we tried to review it. 

Please get your bot online and re-apply." />
    <Template
        title="API Abuse"
        icon="🚫"
        reason="
Your bot has feature/commands that spams or abuses Discord's API. 

This causes your bot to get rate-limited and can be considered Discord API Abuse. 

Please fix the issue and re-apply." />
    <Template
        title="Requires Admin Perms"
        icon="🛑"
        reason="
Some of your bot's features require the bot itself to have the ADMINISTRATOR permission. 

NO bot requires administrator permissions to function. This is in fact a security risk that even Discord themselves dislike.

Please change your bot to only require the permissions it truly needs and re-apply." />

</div>

<div class="mt-5"></div>

<h5 class="text-2xl font-semibold">Variables</h5>
<p class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300">You can substitute variables for values here to get the perfect reason</p>

<InputSm
    id="listName"
    label="List Name"
    placeholder="List Name"
    minlength={0}
    bind:value={listName}
>Enter the list name here if you want this page to reflect a specific list</InputSm>

<Input
    id="commands"
    label="Commands"
    placeholder="Commands"
    minlength={0}
    bind:value={commands}
>Enter the commands here if you want this page to reflect specific commands that may have issues</Input>

<Button
    link={"javascript:void(0)"}
    onclick={() => {
        listName = "Infinity Bot List"
    }}
>Use preset variables for Infinity Bot List</Button>