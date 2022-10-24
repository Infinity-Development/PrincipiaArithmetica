<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import Input from "$lib/components/Input.svelte";

    let interview: any[] | null = null

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

        flag = true

        if(interview) {
            let interviewMap = new Map();

            interview.forEach((question: any) => {
                if(!flag) {
                    return;
                }

                let userInpValue = (document.querySelector(`#${question.id}`) as HTMLInputElement).value;

                if(!userInpValue || userInpValue.length < 30) {
                    flag = false;
                    return;
                }

                interviewMap.set(question.id, userInpValue);
            });

            return [questionMap, interviewMap];
        }

        return true;
    }

    async function nextStep() {
        let validate = validateQuestions()

        console.log(validate)

        if(!validate) {
            // Dillon, can you pls make this better?
            alert("Please answer all questions");
            return;
        }

        let res = await fetch("https://sovngarde.infinitybots.gg/herpes/zoster")

        if(!res.ok) {
            alert("Something went wrong, please try again later");
            return;
        }

        interview = await res.json();
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

{#if !interview}
    <Button onclick={() => nextStep()} link={"javascript:void(0)"}>Next</Button>
{:else}
    <h5 class="text-xl font-semibold">Interview</h5>
    {#each interview as question}
        <Input
            id={question.id}
            label={question.question}
            placeholder={question.placeholder}
            minlength={30}
        >{question.para}</Input>
    {/each}
{/if}