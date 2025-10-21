
const monedas = document.querySelectorAll(".mon")
const ardillas = document.querySelectorAll(".ard")
const contador = document.querySelector(".score")
const contar = document.querySelector(".score2")
let i = 0
let j = 0

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
contar.textContent = `SCORE = ${j}`

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




