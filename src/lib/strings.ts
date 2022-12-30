export function title(str: string) {
    return str.replace(/(^|\s)\S/g, function(t: string) { return t.toUpperCase() });
}

export function cast(a: any): string {
    return a.toString()
}

export function castToObj(a: any): any {
    if(typeof a === "object") {
        return a
    }
    return {}
}
