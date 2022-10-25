<!--Card made using tailwind-->

<script lang="ts">
    export let title: string;

    export let onclick = () => {};
</script>


<a href={"javascript:void(0)"} on:click={onclick} class="block p-6 m-3 md:w-1/2 sm:w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{@html title}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"><slot /></p>
</a>
