<h4 class="font-semibold text-xl">macOS</h4>

<strong>WARNING:</strong> This guide is not well-tested yet. If it doesn't work, DM <code>Burgerking#5293</code>

<div class="mt-5"></div>

<h5 class="font-semibold">Required Downloads</h5>

<ul>
    <li>
        <a href="https://devel.infinitybots.xyz/bin/seedman_mac_amd64">Seedman (Intel)</a> <strong>OR</strong> <a href="https://devel.infinitybots.xyz/bin/seedman_mac_arm64">Seedman (Apple Silicon)</a>
    </li>
    <li>
        <a href="https://brew.sh">Homebrew</a> -> Run the script provided on their webpage to install Homebrew
    </li>
</ul>

<div class="mt-5"></div>

<ol class="list-decimal list-inside">
    <li>
        Install PostgreSQL using homebrew: <code>brew install postgresql@14</code> (and then run <code>brew postgresql-upgrade-database</code> if you had a older version installed).
    </li>
    <li>
        Start PostgreSQL using <code>brew services restart postgresql</code>
    </li>
    <li>
        Go to where <code>seedman</code> was downloaded, then find <code>seedman_mac_ARCH</code> (<code>amd64</code> is ARCH on Intel and <code>arm64</code> for Apple M1) <strong>in finder</strong>
    </li>
    <li>
        <em>macOS is a bit annoying in regards to codesigning:</em> This means you need to first double-click normally and click <code>Ok</code> when the verification errors pops up. Then right click the downloaded file and then click <code>Open</code> to actually run the program to setup a test database with test data. DM <code>Burgerking#5293</code> if there are any errors besides this.
    </li>
    <li>
        Install Node.js using homebrew: <code>brew install node@16</code>. This will allow you to develop JavaScript projects.
    </li>
</ol>