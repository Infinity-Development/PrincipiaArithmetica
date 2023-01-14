<script>
	import Button from "$lib/components/Button.svelte";
import GreyText from "$lib/components/GreyText.svelte";
	import { apiUrl } from "$lib/url";
    import Changelog from "./Changelog.svelte";
	import NewSeeder from "./NewSeeder.svelte";

</script>
<h2 class="text-2xl font-semibold">Developer Changelog</h2>
<GreyText>
    Note that this primarily deals with changes to the database that may require you as a developer to reseed it before continuing development
</GreyText>

<Changelog>
    <span slot="date">Saturday, 3rd September 2022</span>
    <div slot="entry">
        <NewSeeder />
        <ul>
            <li>
                <code>onboard_data</code> table has been added to store final onboarding data for Arcadia
            </li>
            <li>
                <code>staff_onboard_session_code</code> column has been added to users table to store staff verification seeds for Arcadia
            </li>
            <li>
                <em>staff_onboard_macro_time</em> added to store the actual start time of a onboarding session in the onboarding response page
            </li>
        </ul>    
    </div>
</Changelog>

<Changelog>
    <span slot="date">Wednesday, 26th October 2022</span>
    <div slot="entry">
        <NewSeeder />
        <span>As it has been a long time (seedguide is unmaintained), not all changes are listed below but there were several:</span>
        <ul>
            <li>
                <code>avatar</code> column has been added to the <code>bots</code> table to store the avatar of bots.
            </li>
            <li>
                <code>apps</code> table has been added to store applications
            </li>
            <li>
                <em>Development Notice:</em> Please use the <code>{apiUrl}/_duser/USERID</code> endpoint when fetching users. 
                
                If running as a local service, use the <code>localhost</code> equivalent. See Popplio's source code for more information.
            </li>
            <li>
                New endpoints on Popplio (v6 only, these API endpoints can be used on v4 if required):
                <ul>
                    <li>Get Pack URL: <code>{apiUrl}/packs/URL</code> (e.g: <code>{apiUrl}/packs/buildcommunity</code>)</li>
                    <li>Get All Packs: <code>{apiUrl}/packs/all</code></li>
                </ul>
            </li>
            <li>Large amount of refactors in Arcadis, including a better onboarding process, and the use of Rust workspaces to improve code layout</li>
        </ul>
    </div>
</Changelog>

<Changelog>
    <span slot="date">Thursday, 24th Nov 2022</span>
    <div slot="entry">
        <NewSeeder />
        <span>As it has been a long time, not all changes are listed below but there were several refactors to the DB structure</span>
        <ul>
            <li>
                <code>hepatitis-antiviral</code> is about to be rewritten to not rely on reflection and other techniques.
            </li>
            <li>
                <code>CSP</code> headers are now properly set on the client
            </li>
            <li>
                <em>Development Notice:</em> Panel is being rewritten to Prinicipia Arithmetica by Dillon and has been removed from v4 (it anyways broke during all the refactors)
            </li>
            <li>Large amount of refactors in Popplio, including a better routing system</li>
        </ul>
    </div>
</Changelog>

<Changelog>
    <span slot="date">Thursday, 30th Nov 2022</span>
    <div slot="entry">
        <NewSeeder />
        <span>As it has been a long time, not all changes are listed below but there were several refactors to the DB structure *again*</span>
        <ul>
            <li>
                <code>premium_period_length</code> is now a <code>interval</code>.
            </li>
            <li>
                <code>start_premium_period</code> is now a <code>timestamptz</code>
            </li>
            <li>
                The <code>Patch Bot Vanity</code> API has been added to Popplio to allow for vanity URLs of bots to be changed
            </li>
            <li>
                The <code>Special Login</code> API endpoint series has been refactored and now uses a <code>POST</code> request instead of a <code>GET</code> request to ensure tokens are not transmitted in the URL
            </li>
            <li>
                Rewriting <code>hepatitis-antiviral</code> is no longer planned as it is temporary until v4 is released anyways
            </li>
            <li>
                Seeding now happens using the new <code>ibl</code> client. Source code is available <a href="https://github.com/InfinityBotList/ibl">here</a>. Licensed under the AGPL3.
            </li>
            <li>Minor bug fixes to Popplio</li>
        </ul>
    </div>
</Changelog>

<Changelog>
    <span slot="date">Saturday, 14th Jan 2023</span>
    <div slot="entry">
        <NewSeeder />
        <span>As it has been a long time, not all changes are listed below but there were several refactors to the DB structure *again*</span>
        <ul>
            <li>
                The schema of the <code>reviews</code> has been mostly finalized with several changes including the removal of <code>rate</code> and the addition of <code>parent_id</code> (for replies).
            </li>
            <li>
                Bot resolution has been improved with the <code>utils.ResolveBot</code> function
            </li>
            <li>Minor bug fixes to Popplio</li>
        </ul>
    </div>
</Changelog>


<Button link={"/dev/guide"}>Back To Developer Guide</Button>

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