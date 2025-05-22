const btn = document.querySelectorAll("button")
const display = document.getElementById("display")
const clearBtn = document.getElementById("clear-btn")
const enterBtn = document.getElementById("enter-btn")
const deleteBtn = document.getElementById("delete-btn")
const sciBtn = document.getElementById("sci-btn")
let simpleBool = false
let inputValue = ""
let sciValue = false

const btnCheck = () => {
    
}

const simpleCalc = () => {
    if (sciValue) {
        display.innerText = inputValue
    } else {
        const regex = /\d+(\s([+]|[-]|[*]|[/])\s)\d+/g
        if (regex.test(inputValue)) {
            enterCalc()
            simpleBool = true
        } else {
            display.innerText = inputValue
        }
    }
}

const valueOfBtn = btn.forEach(btn => btn.addEventListener("click", () => {
    if (simpleBool) {
        const regex = /\d/
        if (regex.test(btn.value)) {
            simpleBool = false
            inputValue = btn.value;
            display.innerText = inputValue
        } else {
            simpleBool = false
            inputValue += btn.value
            display.innerText = inputValue
        }
    } else {
        inputValue += btn.value
        simpleCalc()
    }
}))


const enterCalc = () => {
    const regex = /^(\s([+]|[-]|[*]|[/]))|[.]+|(\s([+]|[-]|[*]|[/])\s){2,}|(([+]|[-]|[*]|[/])\s)$/g
    if (regex.test(inputValue)) {
        inputValue = ""
        return display.innerText = "ERROR"
    } else if (!sciValue) {
        inputValue = eval(inputValue)
        return display.innerText = eval(inputValue)
    } else {
        const calc = eval(inputValue)
        inputValue = ""
        return display.innerText = calc
    }
}

const deleteChar = () => {
    inputValue = inputValue.slice(0, -1)
    display.innerText = inputValue
}

clearBtn.addEventListener("click", () => {
    inputValue = ""
    display.innerText = inputValue
})

enterBtn.addEventListener("click", enterCalc)

deleteBtn.addEventListener("click", deleteChar)

document.addEventListener("keydown", (event) => {
    // debugger
    const regex = /[0-9]/
    if (regex.test(event.key)) {
        if (simpleBool) {
        const regex = /\d/
            if (regex.test(event.key)) {
                simpleBool = false
                inputValue = event.key;
                display.innerText = inputValue
            } else {
                simpleBool = false
                inputValue += event.key
                display.innerText = inputValue
            }
        } else {
            inputValue += event.key
            simpleCalc()
        }
    }
    switch (event.key) {
        case "Enter": 
            // console.log(true)
            event.target.blur()
            enterCalc()
            break
        case "Backspace":
            deleteChar()
            break
        case "+":
            inputValue += " + "
            display.innerText = inputValue
            simpleBool = false
            break
        case "-":
            inputValue += " - "
            display.innerText = inputValue
            simpleBool = false
            break
        case "/":
            inputValue += " / "
            display.innerText = inputValue
            simpleBool = false
            break
        case "*":
            inputValue += " * "
            display.innerText = inputValue
            simpleBool = false
            break
        default:
            inputValue
    }
})

sciBtn.addEventListener("click", () => {
    sciValue ? sciValue = false : sciValue = true
    sciValue ? sciBtn.style.backgroundColor = "#fb8500" : sciBtn.style.backgroundColor = "#ffffff"
    inputValue = ""
    display.innerText = inputValue
})