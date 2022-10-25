<script lang="ts">
	import Button from "$lib/components/Button.svelte";
import InputSm from "$lib/components/InputSm.svelte";
import Input from "$lib/components/Input.svelte";
import Template from "./Template.svelte";

    let listName = "[list name]"
    let commands = "[commands/features here]"
</script>

<h5 class="text-2xl font-semibold">Variables</h5>
<p class="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300">You can substitute variables for values here to get the perfect reason</p>

<InputSm
    id="listName"
    label="List Name"
    placeholder="List Name"
    minlength={0}
    bind:value={listName}
>Enter the list name here if you want this page to reflect a specific list</InputSm>

<Button
    link={"javascript:void(0)"}
    onclick={() => {
        listName = "Infinity Bot List"
    }}
>Autofill: Infinity Bot List</Button>

<div class="mt-3"></div>

<Input
    id="commands"
    label="Commands"
    placeholder="Commands"
    minlength={0}
    bind:value={commands}
>Enter the commands here if you want this page to reflect specific commands that may have issues</Input>

<div class="mt-5"></div>


<!--This is where the actual content begins-->
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

This can cause your bot to get rate-limited frequently and can be considered Discord API Abuse. 

Please fix the issue and re-apply." />
    <Template
        title="Requires Admin Perms"
        icon="🛑"
        reason="
Some of your bot's features require the bot itself to have the ADMINISTRATOR permission. 

NO bot requires administrator permissions to function. This is in fact a security risk that even Discord themselves dislike.

Please change your bot to only require the permissions it truly needs and re-apply." />
    <Template
        title="Source Code In Description"
        icon="🔑"
        reason="
Your bot description is your bots code. 

Your long description should not consist of your bots code, it should be about what your bot does, a command list etc. 

Please rewrite your description to include more useful information about your bot. 

Friendly reminder to NEVER share your bots token with *anyone* " />
    <Template
        title="Long Description Abuse"
        icon="👾"
        reason="
Your bot's long description has been found to be abusive:

- It is filled out with spam, junk or invisible characters
- It contains malicious links (such as phishing links or links to malware)
- It contains hate speech or other offensive content" />
    <Template
        title="Stopped Responding"
        icon="📵"
        reason="
Your bot has stopped responding during testing and due to this we are unable to continue testing it.

Friendly reminder that using repl.it and other shared hosting services is not reliable and is often a cause of this issue." />
    <Template
        title="Open DM Commands"
        icon="🛂"
        reason="
Your bot has a DM command/function which allows anyone to DM a user which can be used maliciously. The following conditions must be met for such commands:

- The message your bot sends in DMs must state the author or that its from an anonymous user
- It must have a block/opt-out feature

Otherwise, remove this command entirely before resubmitting." />
    <Template
        title="Presence/Status Abuse"
        icon="🌀"
        reason="
Your bots presence changes every few seconds/too quickly and is as such considered Discord API abuse. 

The maximum frequency your bot can change its status is *5 times per 20 seconds.* although we implore you to change it to something more reasonable, such as every 120 seconds.
    " />
    <Template
        title="No Help Command"
        icon="❌"
        reason="
Your bot doesnt have a (working) help command or obvious point of entry. 

Please make sure your bot has a help command or has an explanation in the bot description.

Note that if you are using slash commands, then you do not need a help command" />
</div>