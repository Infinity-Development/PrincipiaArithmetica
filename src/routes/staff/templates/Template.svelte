<script lang="ts">
	import DefaultCardSm from "$lib/components/DefaultCardSm.svelte";
    import Swal from 'sweetalert2';

    import { templateTitleStore } from "./templatestore";

    export let title: string;
    export let reason: string;
    export let icon = "👏";

    $templateTitleStore.push(title);

    function copy(text: string) {
        if(navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            const el = document.createElement("textarea");
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
        }

        Swal.fire({
            title: "Copied!",
            text: "The template has been copied to your clipboard",
            icon: "success",
            timer: 800,
            timerProgressBar: true,
            showConfirmButton: false
        });
    }
</script>

<DefaultCardSm
    title={icon + "&nbsp&nbsp" + title}
    onclick={() => {
        copy(reason.trim());
    }}
>
{@html reason.trim().replaceAll("\n", "<br/>")}
</DefaultCardSm>