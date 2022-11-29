<script>
	import Repo from "./components/Repo.svelte";
	import GreyText from "$lib/components/GreyText.svelte";

</script>

<h2 class="text-2xl font-semibold">Infinity LOVES Open Source!</h2>
<GreyText>And there's a lot of it too!</GreyText>

<div class="mt-5"></div>

<Repo name="Popplio" repoName="Popplio" description="The backend API for IBL v4" />
<Repo name="Arcadia" repoName="Arcadia" description="The rewrite of the manager bot for IBL v4" />
<Repo name="Artemis" repoName="Artemis" description="The custom redirection system used in IBL" />
<Repo name="PrincipiaArithmetica" repoName="PrincipiaArithmetica" description="The site you're on right now! Handles staff apps, our staff panel and more!" />
<Repo name="hepatitis-antiviral" repoName="hepatitis-antiviral" description="Our data migration tool to move data from MongoDB to Postgres" />