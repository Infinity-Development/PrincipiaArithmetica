<!--Card made using tailwind-->

<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    export let title: string;
    export let link: string;
    export let linkText: string;
</script>

<div class="w-96 h-[26rem] p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href={"#"}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-72"><slot /></p>
    
    <Button link={link}>{linkText}</Button>
</div>
