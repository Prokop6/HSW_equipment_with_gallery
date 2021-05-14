import { logThis } from './logThis'
import { parseColection } from './parseCollection';

export function dataCollector(): NodeListOf<Element> 
{
	let collectedData = document.querySelectorAll('main.content_wraper .element_wraper');

	let parsedData = parseColection(collectedData)

	return parsedData
}

