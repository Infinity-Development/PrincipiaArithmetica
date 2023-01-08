<script lang="ts">
    export let link: string;
    export let name: string;
    export let onClick = () => {};
</script>

<li>
    <a href={link} on:click={onClick} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
       <slot />
       <span class="ml-3">{name}</span>
    </a>
 </li>
