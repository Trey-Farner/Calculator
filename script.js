const btn = document.querySelectorAll("button")
const display = document.getElementById("display")
const clearBtn = document.getElementById("clear-btn")
const enterBtn = document.getElementById("enter-btn")
const deleteBtn = document.getElementById("delete-btn")
let inputValue = ""
const valueOfBtn = btn.forEach(btn => btn.addEventListener("click", () => {
    inputValue += btn.value
    display.innerText = inputValue
}))

const enterCalc = () => {
    const regex = /^(\s([+]|[-]|[*]|[/]))|(\s([+]|[-]|[*]|[/])\s){2,}|(([+]|[-]|[*]|[/])\s)$/g
    if (regex.test(inputValue)) {
        inputValue = ""
        return display.innerText = "ERROR"
    } else {
        const calc = eval(inputValue)
        inputValue = ""
        return display.innerText = calc
    }
}

const deleteChar = () => {
    inputValue = inputValue.slice(0, -1)
    console.log(inputValue)
    display.innerText = inputValue
}

clearBtn.addEventListener("click", () => {
    inputValue = ""
    display.innerText = inputValue
})

enterBtn.addEventListener("click", enterCalc)

deleteBtn.addEventListener("click", deleteChar)

document.addEventListener("keydown", (event) => {
    console.log(event.key)
    const regex = /[0-9]/
    if (regex.test(event.key)) {
        inputValue += event.key
        return display.innerText = inputValue
    }
    switch (event.key) {
        case "Enter": 
            enterCalc()
            break
        case "Backspace":
            deleteChar()
            break
        case "+":
            inputValue += " + "
            display.innerText = inputValue
            break
        case "-":
            inputValue += " - "
            display.innerText = inputValue
            break
        case "/":
            inputValue += " / "
            display.innerText = inputValue
            break
        case "*":
            inputValue += " * "
            display.innerText = inputValue
            break
        default:
            inputValue
    }
})