<script>
import GreyText from "$lib/components/GreyText.svelte";
</script>

<h4 class="font-semibold text-xl">Windows</h4>

<strong>WARNING:</strong> This guide is not well-tested yet. If it doesn't work, DM <code>Burgerking#5293</code>

<div class="mt-5"></div>

<h5 class="font-semibold">Required Downloads</h5>
<ul>
    <li><a href="https://devel.infinitybots.xyz/bin/seedman_linux_amd64">Seedman</a></li>
    <li><a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">PostgreSQL 14</a> -> Be sure to choose PostgreSQL 14.4 for *Windows [YOUR ARCH]*</li>
    <li><a href="https://nodejs.org/en/download/">Node.js 16+</a> -> Choose the *.msi* file here</li>
</ul>

<div class="mt-5"></div>

<ol class="list-decimal list-inside">
    <li>
        <strong>If you do not already have a proper version of Node.js already,</strong>, install <code>Node.js</code> by double clicking the <code>.msi</code> file and following the onscreen instructions
    </li>
    <li>
        Install PostgreSQL 14 using the <code>.exe</code> provided by <code>enterprisedb</code>
    </li>
    <li>
        Open <code>Command Prompt</code>, then type <code>pg_restore</code>. If this does not work, follow step 4 to add PostgreSQL to PATH until this step succeeds with a error message from <code>pg_restore</code>, otherwise skip to step 5
    </li>
    <li>
        Using <a href="https://blog.sqlbackupandftp.com/setting-windows-path-for-postgres-tools">this guide</a> or <a href="https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0">this other guide</a>, edit your <code>PATH</code> to include PostgreSQL. This is required for <code>seedman</code> to work correctly
    </li>
    <li>
        <strong>TIPS:</strong>
        <ul>
            <li class="li-seedshop-ul">
                If postgres is not running on port 5432, use the guide in step 4 to set the <code>PGPORT</code> variable to your postgres instances port
            </li>
            <li class="li-seedshop-ul">
                Check File Explorer or Command Prompt for the PATH of PostgreSQL first! The format will usually be <code>C:\Program Files\PostgreSQL\14\bin\</code> where <code>14</code> is the version of PostgreSQL
            </li>
        </ul>
    </li>
    <li>
        Go to where <code>seedman</code> was downloaded, then run <code>seedman_windows_amd64.exe</code> to setup a test database with test data. DM <code>Burgerking#5293</code> if there are any errors.
    </li>
</ol>

<div class="mt-3"></div>

<h4 class="font-semibold">Troubleshooting</h4>

<GreyText>This will help you fix any issues you face during setup.</GreyText>

<strong>WARNING:</strong>After each fix please restart <code>PostgreSQL</code> and <code>seedman</code>

<div class="mt-1"></div>

<strong>Common issues:</strong>

<ul>
    <li class="li-seedshop-ul">
        <strong>No role</strong> -&gt; Log into pgadmin and load up a database and do the following in query tool <code>CREATE ROLE [USERNAME];</code> then <code>ALTER ROLE [USERNAME] WITH SUPERUSER</code>. Then do <code>ALTER ROLE [USERNAME] WITH LOGIN</code>
    </li>
    <li class="li-seedshop-ul">
        <strong>No database</strong> -&gt; To fix this do the following <code>CREATE DATABASE [USERNAME];</code>
    </li>
    <li class="li-seedshop-ul">
        <strong>win32 error/[INSERT AUTHENTICATION ERROR HERE]</strong>
        To fix this error go to <strong>pg_hba.conf</strong> normally located at <code>C:\Program Files\PostgreSQL\14\data</code> then replace all &quot;scram-sha-256&quot; to &quot;trust&quot;
    </li>
</ul>

<strong>For any other error you face please contact <code>Burgerking#5293</code></strong>