export function childSplitter({ innerText }: any | null): Array<string> {
    if (! innerText) return []
    let splitData: Array<string> = innerText.split(',');
    return splitData
};