export class Counter {
  innerHTML: HTMLElement;
  constructor(currentIndex: number, maxIndex: number) {

    let counter: HTMLDivElement = document.createElement("div");
    let counterLable: HTMLParagraphElement = document.createElement("p");
    counterLable.innerText = `(${currentIndex + 1}/${maxIndex})`;

    counter.appendChild(counterLable);

    counter.className = "counter";

    this.innerHTML = counter;
    return this;
  }
}
;
