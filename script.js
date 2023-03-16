function crateCalculator() {
  return {
    displayTop: document.querySelector(".container-top-display"),
    displayBottom: document.querySelector(".container-bottom-display"),

    init() {
      this.buttonClick();
      this.pressEnter();
    },

    buttonClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("button-num")) {
          this.btnValueToDisplay(el.innerText);
        } else if (el.classList.contains("button-clear")) {
          this.clearDisplay();
        } else if (el.classList.contains("button-del")) {
          this.deleteChar();
        } else if (el.classList.contains("button-equal")) {
          this.equalOperation();
        }
      });
    },

    btnValueToDisplay(text) {
      this.displayTop.value += text;
    },

    clearDisplay() {
      this.displayTop.value = "";
    },

    deleteChar() {
      this.displayTop.value = this.displayTop.value.slice(0, -1);
    },

    equalOperation() {
      let evaluate = this.displayTop.value;
      try {
        evaluate = eval(evaluate);

        if (!evaluate) {
          alert("Conta inválida");
          return;
        }

        this.displayBottom.value = evaluate;
      } catch (error) {
        this.displayBottom.value = "Error"
        return;
      }
    },

    pressEnter() {
      this.displayTop.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.equalOperation();
        }
      });
    },
  };
}

const calculator = crateCalculator();
calculator.init();
