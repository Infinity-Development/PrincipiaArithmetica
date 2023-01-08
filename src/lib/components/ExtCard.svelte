<script>
	import { mainSiteUrl } from "$lib/url";
	import Card from "./Card.svelte";
</script>

<div class="hidden lg:block">
    <Card
        title={"Flying in soon..."}
        link={"#"}
        linkText={""}
        showArrow={false}
        showButton={false}
    >
        In the meanwhile, why not check out our other applications and our <a href={mainSiteUrl}>website</a>
    </Card>
</div>
