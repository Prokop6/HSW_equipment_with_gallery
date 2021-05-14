export function fatalError (info: string ): void {
    console.log(`FATAL ERROR: %c${info}`, "color:#crimson; font-weight:bold", "color:gray; font-style: italic");
};