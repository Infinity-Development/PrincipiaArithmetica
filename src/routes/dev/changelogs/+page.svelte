<script>
	import GreyText from "$lib/components/GreyText.svelte";
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
                <em>Development Notice:</em> Please use the <code>https://spider.infinitybotlist.com/_duser/USERID</code> endpoint when fetching users. 
                
                If running as a local service, use the <code>localhost</code> equivalent. See Popplio's source code for more information.
            </li>
            <li>
                New endpoints on Popplio (v6 only, these API endpoints can be used on v4 if required):
                <ul>
                    <li>Get Pack URL: <code>https://spider.infinitybotlist.com/packs/URL</code> (e.g: <code>https://spider.infinitybotlist.com/packs/buildcommunity</code>)</li>
                    <li>Get All Packs: <code>https://spider.infinitybotlist.com/packs/all</code></li>
                </ul>
            </li>
            <li>Large amount of refactors in Arcadis, including a better onboarding process, and the use of Rust workspaces to improve code layout</li>
        </ul>
    </div>
</Changelog>

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