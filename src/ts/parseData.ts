import { childSplitter } from "./childSplitter"
import { logThis } from "./logThis";

export function parseData (item: Element) {
    let newData = {};

    let newValues: Array<string> = childSplitter(item.querySelector('.gallery'));
    let newKey = item.id;
    newData[newKey] = newValues;

    return newData
};