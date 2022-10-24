<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";
	import DefaultCard from "$lib/components/DefaultCard.svelte";
	import Input from "$lib/components/Input.svelte";

    function validateQuestions() {
        let questionMap = new Map();

        $page.data.questions.foreach((question: any) => {
            let userInpValue = (document.querySelector(`#${question.id}`) as HTMLInputElement).value;

            if(!userInpValue || userInpValue.length < 50) {
                return false;
            }

            questionMap.set(question.id, userInpValue);
        });

        return questionMap;
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

<Button link={"javascript:void(0)"}>Next</Button>