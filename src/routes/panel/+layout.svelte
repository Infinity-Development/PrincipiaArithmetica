<script>
	import PanelSidebar from "./components/PanelSidebar.svelte";

    export const prerender = false;
</script>
<div class="panel">
    <!--Create sidebar and put content to the right of it-->
    <div>
        <div>
            <PanelSidebar>
                <slot />
            </PanelSidebar>
        </div>
    </div>
</div>