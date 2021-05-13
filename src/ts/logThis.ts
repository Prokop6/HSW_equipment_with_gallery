export function logThis(label: string, info: string|number|boolean): void {
  console.log(`%c${label}: %c${info}`, "color:#42826D; font-weight:bold", "color:gray; font-style: italic");
};