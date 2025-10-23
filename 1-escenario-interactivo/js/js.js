
const monedas = document.querySelectorAll(".mon")
const ardillas = document.querySelectorAll(".ard")
const contador = document.querySelector(".score")
const contar = document.querySelector(".score2")
let i = 0
let j = 0
let y = 0
let a = 0

console.log(monedas)
console.log(ardillas)
console.log(contador)
console.log(contar)


ardillas.forEach( item => {
    /* console.log("Elemento: ", item)
     */

    item.addEventListener("click", () => {
item.classList.add("saltar")

j++
contar.textContent = `ARDILLAS = ${j}`

    })



item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})

})


monedas.forEach( item => {
    /* console.log("Elemento: ", item)
     */

    item.addEventListener("click", () => {
item.classList.add("saltar")

i++
contador.textContent = `SCORE = ${i}`



    })

item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})


})







const camisass = document.querySelectorAll(".cami")
const contadorcami = document.querySelector(".scoremi")



console.log(camisass)


camisass.forEach( item => {
    /* console.log("Elemento: ", item)
     */

    item.addEventListener("click", () => {
item.classList.add("saltar")

y++
contadorcami.textContent = `CAMISAS = ${y}`

    })



item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})

})













const aguilitas = document.querySelectorAll(".aguila")
const coontaagui = document.querySelector(".scoreag")



console.log(aguilitas)


aguilitas.forEach( item => {
    /* console.log("Elemento: ", item)
     */

    item.addEventListener("click", () => {
item.classList.add("saltar")

a++
coontaagui.textContent = `AGUILAS = ${a}`

    })



item.addEventListener("animationend", () => {
    item.style.display = "none"
}, {once: true})

})