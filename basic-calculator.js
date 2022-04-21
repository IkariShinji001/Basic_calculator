let operand1, operand2, opt;

function inputOperand(num){
    if(opt){
        operand2 = num;
    }else{
        operand1 = num;
    }
}

function inputOperator(operator){
    opt = operator;
}

function clear(){
    operand1 = undefined;
    operand2 = undefined;
    opt =undefined;
}

function calculate(){
    let result;
    switch(opt){
        case "+":
            result = operand1 + operand2;
            alert(`${operand1} ${opt} ${operand2} = ${result}`);
            break;
        case "-":
            result = operand1 - operand2;
            alert(`${operand1} ${opt} ${operand2} = ${result}`);
            break;
        case "*":
            result = operand1 * operand2;
            alert(`${operand1} ${opt} ${operand2} = ${result}`);
            break;
        case "/":
            if(operand2 == 0)
            {
                alert("Không thể chia cho 0");
                break;
            }else{
                result = operand1 / operand2;
                alert(`${operand1} ${opt} ${operand2} = ${result}`);
                break;   
            }
           
    }
}