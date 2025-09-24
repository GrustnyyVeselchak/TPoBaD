const myInput = document.querySelector('input.myInput')
const myButton = document.querySelector('button.myButton')
const myOutput = document.querySelector('p.myOutput')

let str = ""

const valitationData = (str) => {
    if (str === '') {
        throw new Error("Не ввели данные")
    }

    if (str[0] !== "(" && str[str.length-1] !== ")") {
        throw new Error("В начале и конце должны быть скобки. Например ( 1 2 3 )")
    }

    let isValid = /^[0-9()]+$/.test(str) //возвращает ture если строка состоит из чисул и знаков скобок

    if (!isValid) {
        throw new Error("Невалидные данные, пишите только цифры и символы '(', ')' ")
    }
}

const customParse = (str) => {
    let arr = Array.from(str)
    let i = 0
    let r = arr.length

    for (i; i<r; i++) {
        if ( arr[i] === "(") {
            console.log("опа")
        } else if ( arr[i] === ")") {
            console.log("Оппапулички")
        } else  {
            console.log(arr[i])
        }
    }

    str = arr.join("")
    return str
}

myInput.addEventListener('input', (event) => {
    str = event.target.value.replace(/\s+/g, '').trim()
})

myButton.addEventListener('click', () => {
    try {
        valitationData(str)
        myOutput.textContent = customParse(str)
    } catch(err) {
        console.log("Возникла ошибка" + " " + err.message)
        myOutput.textContent = "Возникла ошибка" + " " + err.message
    }
    
})
