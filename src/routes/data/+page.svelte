<script lang="ts">
	import Button from "$lib/components/Button.svelte";
import DefaultCardSm from "$lib/components/DefaultCardSm.svelte";
    import GreyText from "$lib/components/GreyText.svelte";
	import { apiUrl } from "$lib/url";

    async function reqData() {
        let res = await fetch(`${apiUrl}/login-cosmog`, {
            method: "POST",
            body: JSON.stringify({
                action: "dr"
            })
        });

        if(res.ok) {
            let data = await res.json();
            window.location.href = data.redirect
        } else {
            alert("An error occurred while fetching from our API");
        }
    }

    async function delData() {
        let res = await fetch(`${apiUrl}/login-cosmog`, {
            method: "POST",
            body: JSON.stringify({
                action: "ddr"
            })
        });

        if(res.ok) {
            let data = await res.json();
            window.location.href = data.redirect
        } else {
            alert("An error occurred while fetching from our API");
        }
    }
</script>

<h2 class="text-2xl font-semibold">Your Data</h2>

<h3 class="text-xl font-semibold">Important Notes</h3>

<ul>
    <li>Data requests may be different based on which device you use.</li>
    <li>This service is our best effort into fetching all of your data. Internally, it fetches all data with a <code>foreign key</code> of <code>users,user_id</code> (as well as other data in our DB)</li>
    <li>
        We use the information we collect in various ways, including to:
        <ol>
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our website.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website.</li>
            <li>Find and prevents any sort of frauds or malicious requests.</li>
        </ol>
    </li>
    <li>Votes are reset monthly.</li>
</ul>

<div class="flex flex-wrap justify-center items-center justify-evenly">
    <DefaultCardSm title="Data Request">
        <GreyText>Want to see the data we collect?</GreyText>
        <p>
            <strong>
                Please read the points above first!<br/><br/>

                This is a best-attempt at collecting your data.<br/><br/><br/>

                But... as we are all humans, we may have missed something while coding this feature 
                which we will be happy to correct if reported...
            </strong>
        </p>
        <div class="mt-3"></div>
        <Button link={"javascript:void(0)"} onclick={() => reqData()}>Request My Data</Button>
    </DefaultCardSm>
    <DefaultCardSm title="Data Deletion">
        <GreyText>This action is IRREVERSIBLE. Think twice before continuing.</GreyText>
        <p>
            <strong>
                You will lose ALL perks you have recieved on the service including any bots you have added to the service.<br/><br/>

                Any premium/certification perks you have on the site will NOT be refunded!<br/><br/><br/>

                But... if you insist...
            </strong>
        </p>
        <div class="mt-3"></div>
        <Button link={"javascript:void(0)"} onclick={() => delData()}>Delete My Data</Button>
    </DefaultCardSm>
</div>

<style>
    li {
        display: list-item;
        list-style-type: initial;
    }

    ol li {
        list-style-type: counter-style;
    }

    ul, ol {
        padding-left: 30px;
    }
</style>
