function crateCalculator() {
  return {
    display: document.querySelector(".container-bottom-display"),

    init() {
      this.buttonClick();
      this.pressEnter()
    },

    buttonClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("button-num")) {
          this.btnValueToDisplay(el.innerText);
        } else if(el.classList.contains("button-clear")){
            this.clearDisplay()
        } else if(el.classList.contains("button-del")){
            this.deleteChar()
        } else if(el.classList.contains("button-equal")){
            this.equalOperation()
        }
    }
    )},

    btnValueToDisplay(text){
        this.display.value += text
    },

    clearDisplay(){
        this.display.value = ""
    },

    deleteChar(){
        this.display.value = this.display.value.slice(0, -1)
    },

    equalOperation(){
        let evaluate = this.display.value
        try {
            evaluate = eval(evaluate)

            if(!evaluate){
                alert('Conta inválida')
                return
            }

            this.display.value = evaluate
        } catch (error) {
            alert('Conta inválida')
            return
        }
    },

    pressEnter(){
        this.display.addEventListener('keyup', (e)=>{
            if(e.keyCode === 13){
                this.equalOperation()
            }
        })
    }

  };
}

const calculator = crateCalculator();
calculator.init();
