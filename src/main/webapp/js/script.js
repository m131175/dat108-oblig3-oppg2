class Dice {
    #value = 0;

    roll = () => {
        this.#value = Math.trunc(Math.random() * (6) + 1);
    }

    getValue() {
        return this.#value;
    }
}

class DiceController {
    #rootElement;

    constructor(rootElement) {
        this.#rootElement = rootElement;
    }

}

const dice = new Dice();

const rootElement = new DiceController("root"); 

const diceoutputElement = document.querySelector("[data-diceoutput]");
let clickHandler = function(event) {
    let dicebutton = event.target.getAttribute("data-dicebutton");
    if (!dicebutton) return;
    dice.roll();
    diceoutputElement.innerText = dice.getValue();
}

document.addEventListener('click', clickHandler);