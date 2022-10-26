import { error } from '@sveltejs/kit';

/**
 * @param {string | undefined} str
 */
async function sha512(str) {
  const buf = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(str));
  return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    let svu = url.searchParams.get("svu");

    if(!svu) {
        // We don't have a svu, so just return the staff guide directly.
        return {}
    } else {
        let svuData = svu.split("@")
        let uid = svuData[0];
        let frag = svuData[1]
      
        let verifyDat = await fetch(`https://sovngarde.infinitybots.gg/svapi?uid=${uid}&frag=${frag}`, {
            headers: {
                "SV-Version": "pika" + "090"[1]
            }
        })
      
        if(!verifyDat.ok) {
                let err = await verifyDat.json()
                throw error(400, err.reason)
        }
      
        let msg = await verifyDat.json()
      
        let key = msg.reason.slice(-37);
        key = key.split('');
        key[2] = 'r'
        key[19] = 'x'
        key = (await sha512(key.join(""))).slice(-6);
      
        return {key: key}    
    }
}
