<script>
	import PanelSidebar from "./components/PanelSidebar.svelte";

    export const prerender = false;
</script>

<svelte:head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="panel">
    <!--Create sidebar and put content to the right of it-->
    <div>
        <div class="flex flex-cols">
            <span class="hidden md:block lg:block">
                <PanelSidebar />
            </span>
            <div class="panel-content">
                <div class="panel-content-inner px-4">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</div>