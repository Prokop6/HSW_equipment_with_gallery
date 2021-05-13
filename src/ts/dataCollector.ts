import { logThis } from "./logThis"

export function dataCollector() : void {
    let collectedData = document.querySelectorAll('.contentWrapper .gallery')

    logThis("Statement", JSON.stringify(collectedData))
}