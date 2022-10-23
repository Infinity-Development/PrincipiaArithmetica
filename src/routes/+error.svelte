<script>
    import { page } from '$app/stores';
  </script>
  
  {#if $page.error && $page.error.message}
    <h1 class="font-semibold text-center text-3xl">{$page.status}<br/>{$page.error.message}</h1>
  {:else}
    <h1 class="font-semibold text-center text-3xl">{$page.status}: {$page.error}</h1>
  {/if}
  <p class="text-center italic">It sure does look like you're lost or doing something wrong or messed up...</p>