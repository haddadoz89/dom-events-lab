/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator')
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let previousNumber
let currentNumber
let operator
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    if (event.target.classList.contains('number')) {
        let value = event.target.innerText
        currentNumber = value
        display.textContent = value
    } else if (event.target.classList.contains('operator')) {
        let operation = event.target.innerText
        display.textContent = operation
        if (operation === 'C'){
            previousNumber = ''
            currentNumber = ''
            operator = ''
            display.textContent ='clear'
        }
        else{
            if(currentNumber !== ''){
            operator = operation
            previousNumber = currentNumber
            currentNumber = ''
            display.textContent = "Enter 2nd number"
            return
        }else {
            display.textContent = "Please enter numbers first"
        }
        }
    }else if (event.target.classList.contains('equals')) {
        let result  = 0
        if (previousNumber !== '' && currentNumber !== '' && operator !== ''){
            if (operator === '+'){
                result = previousNumber + currentNumber
            }else if (operator === '-' && currentNumber < previousNumber){
                result = previousNumber - currentNumber
            }else if (operator === '*'){
                result = previousNumber * currentNumber
            }else if  (operator === '/' && currentNumber !== '0'){
                result = previousNumber / currentNumber
            }else {
                display.textContent = "please clear the calculator"
            }
            display.textContent = result
    }
    }
    })
  })
  
/*-------------------------------- Functions --------------------------------*/
