<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import GreyText from "$lib/components/GreyText.svelte";
	import Input from "$lib/components/Input.svelte";

    import { toast } from '@zerodevx/svelte-toast'

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

            if(!userInpValue || (userInpValue.length < 50 && !question.short)) {
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
            toast.push("Please answer all questions");
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
                toast.push("Application sent!", {
                    duration: 2000,
                    theme: {
                        '--toastColor': 'mintcream',
                        '--toastBackground': 'rgba(72,187,120,0.9)',
                        '--toastBarBackground': '#2F855A'
                    }
                });
            } else {
                res.json().then(json => {
                    toast.push(json.reason, {
                        duration: 3000,
                    });
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
        minlength={question.short ? 1: 50}
    >{question.para}</Input>
{/each}

<GreyText>Ready to submit this application for review using our PounceCat system? Be sure to review everything first for spelling!</GreyText>
<Button onclick={() => sendApp()} link={"javascript:void(0)"} showArrow={false}>Pounce!</Button>