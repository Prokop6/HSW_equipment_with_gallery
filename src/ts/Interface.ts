import { Counter } from "./Counter";
import { increment } from "./increment";
import { decrement } from "./decrement";
import { logThis } from "./logThis";


export class Interface {
    innerHTML: HTMLDivElement
  constructor(currentID: number, maxID: number) {
    this.innerHTML = document.createElement("div");
    this.innerHTML.className = "interface";

    if (maxID > 1) {
        const incrementingBtn: HTMLAnchorElement = document.createElement("a");
      incrementingBtn.href = "javascript:;";
      incrementingBtn.textContent = ">";

        const decrementingBtn: HTMLAnchorElement = document.createElement("a");
      decrementingBtn.href = "javascript:;";
      decrementingBtn.textContent = "<";

      incrementingBtn.addEventListener(
        "click",
        () => { currentID = increment(currentID, maxID), logThis("Click!", currentID); });

      decrementingBtn.addEventListener(
        "click",
        () => { currentID = decrement(currentID, maxID), logThis("Click!", currentID); });

        this.innerHTML.append(decrementingBtn);
        this.innerHTML.append(new Counter(currentID, maxID));
        this.innerHTML.append(incrementingBtn);
    };
      return this.innerHTML;
  };
}
;
