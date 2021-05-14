import { childSplitter } from "./childSplitter"
import { fatalError } from "./fatalError";
import { parseData } from "./parseData";


export function parseColection(inputCollection: NodeListOf<Element>): any {
	let collectedArray = Array.from(inputCollection)

	let parsedData: Object = {}

	collectedArray.forEach(element => {
		let newValue = parseData(element);
		Object.assign(parsedData, newValue);
	})

	try {
		return parsedData
	} catch (error) {
		fatalError("Failure to parse data");
	}
};