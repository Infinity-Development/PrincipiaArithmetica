import { apiUrl } from '$lib/url';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let res = await fetch(`${apiUrl}/apps/meta`)

    if (res.ok) {
        let json = await res.json();

        // Order positions by order key in ascending order where positions is an array of objects
        // @ts-ignore
        let plist = []

        // convert json.positions to array
        for (let key in json.positions) {
            plist.push([key, json.positions[key]])
        }

        // sort by order key
        plist.sort((a, b) => a[1].order - b[1].order)

        plist = plist.map((item) => item[0])

        json.positionsList = plist

        console.log(json.positionsList)

        return json;
    } else {
        let errorData = await res.text();
        throw error(500, errorData);
    }
}
