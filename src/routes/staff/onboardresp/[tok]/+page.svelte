<script lang="ts">
    import { page } from '$app/stores';
	import DefaultCard from '$lib/components/DefaultCard.svelte';
	import GreyText from '$lib/components/GreyText.svelte';

    // https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
    let toHHMMSS = (secs: string | number) => {
        var sec_num = parseInt(secs.toString(), 10)
        var hours   = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }
</script>

<h2 class="text-2xl font-semibold">Staff Onboarding Response</h2>
<GreyText>
    Read the onboarding response carefully, then decide as a team whether to approve or deny it. You can use the <code>onboardman</code>
    to approve/deny a onboarding.
</GreyText>

<DefaultCard
    title="Onboarding Response"
>
    <ul>
        <li><strong>User ID:</strong> {$page.data.onboardData.user_id}</li>
        <li><strong>Staff Onboarded Before:</strong> {$page.data.onboardData.staff_onboarded_before}</li>
        <div class="mt-3"></div>
        <li><strong>Analysis:</strong> {$page.data.onboardData.analysis}</li>
        <div class="mt-3"></div>
        <li><strong>Thoughts/Feedback:</strong> {$page.data.onboardData.thoughts}</li>
        <div class="mt-3"></div>
        <li><strong>Started At:</strong> {new Date($page.data.onboardData.start_ts * 1000)}</li>
        <li><strong>Submitted At:</strong> {new Date($page.data.onboardData.submit_ts * 1000)}</li>
        <li><strong>Duration:</strong> {toHHMMSS($page.data.onboardData.submit_ts - $page.data.onboardData.start_ts)} ({$page.data.onboardData.submit_ts - $page.data.onboardData.start_ts} seconds)</li>
        <div class="mt-3"></div>
        <li><strong>Invite:</strong> <a href={$page.data.onboardData.invite}>{$page.data.onboardData.invite}</a></li>
        <div class="mt-3"></div>
    </ul>
    <details>
        <summary class="cursor-pointer">
            <span>Advanced Info</span>
        </summary>
        <span>
            <code>
                {JSON.stringify($page.data.onboardData)}
            </code>
        </span>
    </details>
</DefaultCard>
