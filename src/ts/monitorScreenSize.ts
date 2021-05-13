import { logThis } from "./logThis"
import { checkIfFullsizeScreen } from "./checkIfFullsizeScreen"
import { isFullsizeScreen } from "./source"

export function monitorScreenSize(): void {
  window.addEventListener('resize',
    () => {
      isFullsizeScreen = checkIfFullsizeScreen();
      logThis("current screen size is:", document.body.clientWidth);
      logThis("screen considerd Fullsize?", isFullsizeScreen);
    });
};