<script>
	import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";


    function sendInterview() {
        fetch(`https://sovngarde.infinitybots.gg/herpes/app/interview?user_id=${$page.data.userId}&app_id=${$page.params.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": $page.data.userToken
            },
        }).then((res) => {
            if(res.ok) {
                alert("Interview sent!");
            } else {
                res.json().then((data) => {
                    alert(data.reason);
                });
            }
        });
    }
</script>
<h2 class="text-3xl font-bold">App Info</h2>
<p>App State: {$page.data.state}</p>
<p>App Position: {$page.data.position}</p>


{#each $page.data.answers.questions as question}
    <div class="mb-4">
        <h3 class="text-2xl font-bold">{question.question}</h3>
        <p class="text-gray-500">{question.para}</p>
        <p>{$page.data.answers.answers[question.id]}</p>
    </div>
{/each}

{#if $page.data.state == "pending"}
    <Button link={"javascript:void(0)"} onclick={sendInterview}>Send Interview</Button>
{/if}