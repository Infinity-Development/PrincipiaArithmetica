<script>
  import "../app.css";

  import Menubar from "$lib/components/Menubar.svelte";

  export const prerender = false;
</script>

<!-- Make the div fill whole screen-->
<div class="h-screen w-screen bg-white dark:bg-gray-900">
  <div class="flex flex-col h-full">
    <!--Menubar using tailwind-->
    <Menubar />
    <div class="bg-white dark:bg-gray-900 text-black-700 dark:text-white bg-contain p-8">
      <slot />
    </div>
  </div>
</div>
