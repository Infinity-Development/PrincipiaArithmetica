<!--Card made using tailwind-->

<script lang="ts">
    export let title: string;
</script>

<div class="w-60 h-36 p-6 m-3 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white text-center">{title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-36"><slot /></p>
</div>
