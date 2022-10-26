<script>
  import "../app.css";

  import Menubar from "$lib/components/Menubar.svelte";

  import { SvelteToast } from '@zerodevx/svelte-toast'

  export const prerender = false;

</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<!-- Make the div fill whole screen-->
<div class="h-screen w-screen bg-white dark:bg-gray-900">
  <div class="flex flex-col h-full">
    <!--Menubar using tailwind-->
    <Menubar />
    <div class="bg-white dark:bg-gray-900 text-black-700 dark:text-white bg-contain p-8">
      <slot />

      <SvelteToast />
    </div>
  </div>
</div>
