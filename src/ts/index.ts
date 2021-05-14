import { logThis } from './logThis';
import { dataCollector } from './dataCollector';

logThis("Statement", "Website Is up, commencing processing");

let data = dataCollector();

logThis("Statement", "Processing compleated. Standing by")