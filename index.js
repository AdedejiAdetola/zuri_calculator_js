//get type of operation
const operator = prompt("What arithmetic opertion Would you like to perform? \n Type A for Addition \n Type S for Subtraction \n Type D for Division \n Type M for Multiplication \n Type Mod for Modulus (%) \n")

//get two input values
const input1 = prompt("Enter value 1: ")
const input2 = prompt("Enter value 2: ")  


//check if operation type is correct
if (operator == "A" || operator == 'a'){
    alert(`${input1} + ${input2} = ${(parseFloat(input1) + parseFloat(input2)).toFixed(2)}`)
} else if (operator == "S" || operator == 's') {
    alert(`${input1} - ${input2} = ${(parseFloat(input1) - parseFloat(input2)).toFixed(2)}`)
} else if (operator == "D" || operator == 'd') {
    alert(`${input1} / ${input2} = ${(parseFloat(input1) / parseFloat(input2)).toFixed(2)}`)
} else if (operator == "M" || operator == 'm') {
    alert(`${input1} x ${input2} = ${(parseFloat(input1) * parseFloat(input2)).toFixed(2)}`)
} else if (operator == "Mod" || operator == 'mod') {
    alert(`${input1} % ${input2} = ${(parseFloat(input1) % parseFloat(input2)).toFixed(2)}`)
}