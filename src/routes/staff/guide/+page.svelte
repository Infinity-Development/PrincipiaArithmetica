<script>
	import GreyText from "$lib/components/GreyText.svelte";
    import GuidePara from "./GuidePara.svelte";
	import GuideSect from "./GuideSect.svelte";
    import GuideTitle from "./GuideTitle.svelte";
    import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";
	import { dev } from "$app/environment";

    let keyAdded = false

    function addKeyToRandomLoc() {
        if(!$page.data.key) {
            return;
        }

        let flag = false

        let possibleLocs = document.querySelectorAll(".loc")

        if(!possibleLocs || possibleLocs.length == 0) {
            return;
        }

        // Randomly choose a paragraph that is not the last 2 
        let randomLoc = Math.floor(Math.random() * (possibleLocs.length - 2))

        // Split it into words
        let words = possibleLocs[randomLoc].innerHTML.split(" ")

        let rand = 0
        while(!flag) {
            rand = Math.floor(Math.random() * words.length)
            if(!words[rand] || words[rand].includes("https://")) {
                    continue
            }
            flag = true
        }

        words[rand] += `. ${$page.data.key}`

        words[rand] = words[rand].replace("!", "").replace(".", "")

        possibleLocs[randomLoc].innerHTML = words.join(" ")

        keyAdded = true
    }
</script>

<GuideTitle>Welcome to the Infinity Bot List Staff Team</GuideTitle>
<GreyText>All commands below are shown in slash command form however prefix commands are well supported as well in case slash commands don't work</GreyText>


<GuideSect>Logging</GuideSect>
<GuidePara>
    All staff actions are logged to our database.<br/><br/>
    
    In the past, staff activity was a huge problem. We hope doing this will allow us to better manage Infinity Bot List to make it a truly wonderful place.
</GuidePara>


<GuideSect>Your Role</GuideSect>
<GuidePara>
    Being a Website Moderator is also being the forefront of Infinity Bot List.<br/><br/>
    
    You are the first interaction for people on the server. You also have one of the utmost important jobs for a bot list: Approving and Denying bots.
</GuidePara>

<GuideSect>The Process</GuideSect>
<GuidePara>
    The process of approving and denying bots at Infinity Bot List is a rather simple and straightforward process.<br/><br/>

    When a bot gets added to the bot queue it'll show up in the #bot-logs channel in the Infinity Bot List Server. Here you will get a ping (<code>@Website Moderators</code>) and you will be able to view the bot profile page (which you must do while testing a bot).
</GuidePara>

<GuideSect>Resubmissions</GuideSect>
<GuidePara>
    Resubmitted means that for whatever reason the bot has been denied. Such bots can be resubmitted by the owner of the bot. (An example of this is <code>Ninja Bot</code> from the training sandbox)<br/><br/>

    During all bot approvals and denials, regardless of whether it is resubmitted or not, the owner/developer of the bot must be a member of Infinity Bot List. <em>Arcadia (our management bot) will not let you approve/deny the bot otherwise</em>.<br/><br/>

    Head to Verification Center. In the #queue channel in Verification Center, you can then use <code>/queue</code> to get the bots pending verification.
</GuidePara>


<GuideSect>Queue Order</GuideSect>
<GuidePara>
    Please go in Queue order. A bot thats in #2 position should not be done before a bot that is in #1 position! This is to ensure that everyone has their bot reviewed fairly.<br/><br/>
    
    If you see a ticket of the form "Why was my bot not yet tested", please be sure to check the queue order and then inform accordingly. As of now, this queue order is public (by running <code>/queue</code>)
</GuidePara>


<GuideSect>Inviting the bot</GuideSect>
<GuidePara>
    You can use the <code>/invite</code> command to get the invite to the bot based on its Bot ID, Name or Vanity.<br/><br/>

    If you see a bot whose invite errors with 'Unknown Application' or otherwise fails in the OAuth2 page (due to requesting privileged intents, please deny it as per the 'Flagged/Banned Bot' <a href="/staff/templates">template</a>)
</GuidePara>


<GuideSect>Claim the bot</GuideSect>
<GuidePara>
    To limit confusion amongst other Website Moderators, Infinity Bot List has a claim system.<br/><br/>
    
    Using <code>/claim</code>  avoids multiple mods testing the same bot. If it turns out that you cannot test it after you've claimed it (ex. Something in real life came up that'll take longer than 30 minutes), use <code>/unclaim</code>.<br/><br/>
    
    We want to avoid bots sitting claimed for days with no testing being done <em>which is also why the queue shows claimed bots as well</em>.<br/><br/>

    <em>One difference from v3 in claims is the addition of "Force Claim" and "Remind" in <code>/claim</code>. "Force Claim" allows you to forcibly claim a bot when it is currently being reviewed by someone else</em>
</GuidePara>


<GuideSect>Some Pointers</GuideSect>
<GuidePara>
    Here are some pointers to keep in mind while testing a bot:<br/>
    <ul>
        <li>
            When testing the bot please ensure you are doing an in depth test. Not just a handful of commands.
        </li>
        <li>
            If the bot goes offline during testing please message the owner either directly or in the #bot-feedback channel in the main server. Ex: "<em>Hello @Toxic Dev your bot is offline and I can't test it. Let me know when this is fixed so I can continue the test</em>". Please also do this if the bot is online but unresponsive.
        </li>
        <li>
            Please refer to the #info channel on the Verification Center for rules of what's acceptable and what's not acceptable.
        </li>
        <li>
            If you have any questions please ping <code>@Staff Managers</code> or <code>@Head Staff Managers</code>. No question is a stupid question and we are always ready to help.
        </li>
        <li>
            After testing is complete please <em>do not remove the bot from the testing server. Arcadia will do this for you once you have added it to the main server</em>
        </li>
        <li>
            <strong>You may test bots on your own server if you ever wish to. This may be required by some bots (eg. ticket bots, antinuke bots)</strong>
        </li>
    </ul>
</GuidePara>


<GuideSect>After Testing</GuideSect>
<GuidePara>
    You can <em>either</em> use the panel or this bot to approve or deny the bot. Panel may lag behind in terms of features (such as onboarding which will NOT be implemented outside of the bot) so it is recommended to use this bot.<br/><br/>

    Please note that the owner must be in main server to use approve/deny. <em>Once approved, be sure to add it to the main server following which arcadia will kick the bot from testing server for you.</em>
</GuidePara>


<GuideSect>Commonly asked permissions</GuideSect>
<GuidePara>
    <p>Here are some commonly asked permissions and what to look out for if you see any such permission</p>
    <ul>
        <li>
            <em>Administrator</em> - Bots that require the Administrator permission <em>on the bot account</em> to run should be denied always (<em>but please still test <code>Ninja Bot</code> and give feedback on all commands and what you would do in the training sandbox</em>)
        </li>
        <li>
            <em>Manage Channel</em> - Ticket bots commonly require this. Always test the functionality of the bot to see if it does anything related to channels before approving or denying. Such bots may also need certain functionality to be tested on your own server (especially ticket bots).
        </li>
    </ul>
</GuidePara>


<GuideSect>Resources</GuideSect>
<GuidePara>
    Cheatsheet of some common staff responses (highly recommended to use this): <a href="/staff/templates">https://botlist.app/staff/templates</a>
</GuidePara>

{#if $page.data.key}
    {#if !keyAdded}
        <GreyText>Be sure to read the entire staff guide before continuing. You will be demoted if you do not properly follow the rules</GreyText>
        <Button link={"javascript:void(0)"} onclick={addKeyToRandomLoc}>Show Code</Button>
    {:else}
        <GreyText>
            The staff verification code is somewhere in the guide.<br/>
            
            Note that just trying to Ctrl-F it is not allowed and you may be demoted for lack of knowledge of the rules. Read the whole guide at least 5-10 times.
        </GreyText>
    {/if}
{/if}

<style>
    ul {
        list-style: none;
    }
    li:before {
        content: "∞ ";
    }

    li {
        padding-left: 30px;
    }
</style>