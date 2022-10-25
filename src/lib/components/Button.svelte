<script lang="ts">
    export let link: string;

    export let onclick = () => {};
</script>

<a href={link} on:click={onclick}>
    <button
        on:keypress={onclick}
        on:click={onclick}
        class="inline-flex bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-2 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded"
    >
    <slot />
    </button>
</a>