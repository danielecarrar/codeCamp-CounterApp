let saveEl = document.getElementById("save-el")
let damiano = document.getElementById("contatore")

let count = 0

console.log(saveEl)



function incrementa() {
    count += 1
    contatore.innerText = count

}

function save() {

let countStr = count + " - "
saveEl.textContent += countStr
contatore.innerText = 0
count = 0

    console.log(count)
}

let welcomeEl = document.getElementById("welcome-El")


let name = "visitatore!"
let greeting = "Benvenuto, "


welcomeEl.innerText = greeting + name


//untouchable up

welcomeEl.innerText += " Ti presento la mia App Contatore!"