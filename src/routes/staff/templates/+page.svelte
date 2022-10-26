<script lang="ts">
	import Button from "$lib/components/Button.svelte";
import InputSm from "$lib/components/InputSm.svelte";
import Input from "$lib/components/Input.svelte";
import Template from "./Template.svelte";

    let listName = "[list name]"
    let commands = "[commands/features here]"
    let linkToBot = "[Link to Bot](https://somelink.com)"
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

<InputSm
    id="linkToBot"
    label="Link To Bot"
    placeholder="Link To Bot"
    minlength={0}
    bind:value={linkToBot}
>Enter the "link to bot" here if you want this page to reflect specific bots that have been copied or are otherwise identical to.</InputSm>

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
    <Template
        title="Suicide/Gore Promotion"
        icon="🔪"
        reason="
Your bot has a suicide command which is considered as glorification/promotion of suicide, which is against Discord ToS. 

Please remove this command entirely." />
    <Template
        title="BDFD Fork or Template"
        icon="🤖"
        reason='
Your bot seems to be an unmodified instance of [Bot Designer for Discord](https://botdesignerdiscord.com/).

We dont allow unmodified clones of other bots or bot creation services.
        ' />
    <Template
        title="Cross Promotion"
        icon="👀"
        reason="
Your bots page is filled out with a link/button to another bot listing website. 

Please remove any references to other bot listing websites in your description and re-apply." />
    <Template
        title="Seizure Inducing Content"
        icon="🏨"
        reason="
Your bots commands have emojis or gifs that could cause epileptic seizures due to its flashy and flickering nature. 

Please remove all content of such nature in your commands.
        " />
    <Template
        title="NSFW Features/Content"
        icon="🔞"
        reason="
Your bot page mentions, or promotes NSFW functions in its descriptions. 

Please remove any mentioning of NSFW features and make sure that all the NSFW functions are locked for [NSFW channels](https://support.discord.com/hc/en-us/articles/115000084051-NSFW-Channels-and-Content)." />
    <Template
        title="Unmodified Instance"
        icon="🤖"
        reason="
Your bot seems to be an unmodified instance of: {linkToBot}. 

We dont allow unmodified clones of other bots. Please note for BotGhost/BDFD clones in particular, we require 5 or more custom commands." />
    <Template
        title="J4J/Third Party Ads"
        icon="🔖"
        reason="
Your bot is promoting sponsors/partners/servers. 

Bots are not allowed to use the Discord API to advertise/promote any third-party service. 

As stated in their [Terms](https://i.imgur.com/eTLRu3m.png), you may not use the APIs in any way to target users with advertisements or marketing. 

If your bot has a Join4Join feature, please read Discord's stance regarding bots of this nature here or join the [Discord Developers](https://discord.gg/discord-developers) server for more information." />
    <Template
        title="Flagged/Banned Bot"
        icon="⚠️"
        reason="
Your bot has been flagged by Discord for one of the following reasons (Spam, Abusive Behaviour, reaching guild limit without verification, verified successfully by Discord but using privileged intents that your application was not whitelisted for.) which results in us being unable to test your bot. 

For more information, please reach out Discord directly [here](https://dis.gd/contact) if you have questions. 

Please resolve this issue before reapplying." />
    <Template
        title="No Functions/Features"
        icon="🤷‍♂️"
        reason="
Your bot doesnt have any actual (functioning) features/commands. 

We require bots to have a minimum of at least 7 working commands not including the help and about commands. 

Please add some features and or commands to your bot before re-applying!" />
    <Template
        title="Main Owner Banned"
        icon="⚖️"
        reason="
The primary owner of this bot was banned from our discord server. As such they are prohibited from adding any bots. 

They can however appeal any and all bans by contacting our Support Team" />
    <Template
        title="Admin Bots"
        icon="⚔️"
        reason="
Your bot is asking for the admin permission on invite. No bot should require this kind of permission to function correctly.

Please properly setup command permissions on your bots commands to what they *actually need* and reapply." />
    <Template
        title="Unknown Application"
        icon="🤔"
        reason="
There is an unknown application error when trying to invite your bot. 

Please make sure that the application ID you entered is correct, you have a bot user with your application and your bot application wasnt deleted.

You must fix this issue before reapplying." />
    <Template
        title="Broken Commands"
        icon="💻"
        reason="
The majority of your commands listed on your bots page, or help command do not provide a response, or do not seem to function/work. 

Please resolve this issue and resubmit!" />
    <Template
        title="Public Owner/Dev Commands"
        icon="🔓"
        reason="
Your bot has an owner only command(s) that allows users to access potential vulnerabilities or features that should be locked to developers. 

Please lock these commands for developers/owners only and re-apply." />
    <Template
        title="Running Multiple Instances"
        icon="👨‍👩‍👧‍👦"
        reason="
Your bot application seems to be running multiple instances, which could cause unhandled ratelimits and api abuse, as well as spam. 

Please be sure that your bot isnt running on multiple instances prior to resubmitting." />
</div>