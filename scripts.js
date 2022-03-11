let previousOperand = document.querySelector('div.previous-operand');
let currentOperand = document.querySelector('div.current-operand');

function insert(num){
    let numero = currentOperand.innerHTML;
    document.querySelector('div.current-operand').innerHTML = numero + num;
}

function clean(){
    previousOperand.innerHTML = "";
    currentOperand.innerHTML = "";
}

function back(){
    let currentOperand = document.querySelector('div.current-operand').innerHTML;
    document.querySelector('div.current-operand').innerHTML = currentOperand.substring(0, currentOperand.length -1)
}

function calculate(){
    let currentOperand = document.querySelector('div.current-operand').innerHTML;
    if (currentOperand){
        document.querySelector('div.current-operand').innerHTML = eval(currentOperand)
        document.querySelector('div.previous-operand').innerHTML = currentOperand   
    }

}