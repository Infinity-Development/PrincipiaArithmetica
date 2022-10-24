<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import Input from "$lib/components/Input.svelte";

    function validateQuestions() {
        let questionMap = new Map();

        console.log($page.data.questions);

        let flag = true;

        $page.data.questions.forEach((question: any) => {
            if(!flag) {
                return;
            }

            let userInpValue = (document.querySelector(`#${question.id}`) as HTMLInputElement).value;

            console.log(userInpValue)

            if(!userInpValue || userInpValue.length < 50) {
                flag = false;
                return
            }

            questionMap.set(question.id, userInpValue);
        });

        if(!flag) {
            return false;
        }

        return questionMap;
    }

    function sendApp() {
        let validate = validateQuestions();

        if(!validate) {
            alert("Please answer all questions");
            return;
        }

        // Convert map to object
        let obj = Object.fromEntries(validate.entries());

        console.log(obj);

        fetch(`https://sovngarde.infinitybots.gg/herpes?user_id=${$page.data.userId}&position=${$page.data.positionName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": $page.data.userToken
            },
            body: JSON.stringify(obj)
        }).then((res) => {
            if(res.status === 200) {
                alert("Application sent!");
            } else {
                let resp = res.json().then(json => {
                    alert(json.reason);
                });
                
            }
        });
    }
</script>

<div class="flex justify-center items-center">
    <DefaultCard 
        title={"Applying for " + $page.data.name} 
    >
        {@html $page.data.info.replaceAll("\n", "<br/>")}
    </DefaultCard>
</div>

<div class="mt-10"></div>

{#each $page.data.questions as question}
    <Input
        id={question.id}
        label={question.question}
        placeholder={question.placeholder}
        minlength={50}
    >{question.para}</Input>
{/each}

<Button onclick={() => sendApp()} link={"javascript:void(0)"}>Next</Button>