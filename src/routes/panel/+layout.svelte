<script>
	import PanelDrawer from "./components/PanelDrawer.svelte";

    export const prerender = false;
</script>
<div class="panel">
    <!--Create sidebar and put content to the right of it-->
    <div>
        <div>
            <PanelDrawer>
                <slot />
            </PanelDrawer>
        </div>
    </div>
</div>