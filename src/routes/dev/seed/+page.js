import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let seedData = await fetch(`https://devel.infinitybots.xyz/latest_seed.json`);

    if(!seedData.ok) {
        throw error(500, "Failed to get latest seed data. Perhaps a seed is being generated right now?");
    }

    let seed = await seedData.json();

    return seed;
}
