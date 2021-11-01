<<<<<<< HEAD
// console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "Ankara"
{
    let dolarDun = 9.10
}
// console.log(dolarDun)

const euroDun = 11.20
// euroDun = 11.10 //const'a yeniden atama yapılmaz
// console.log(euroDun)
=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

//array
//camelCasing
//PascalCasing
<<<<<<< HEAD
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]
let konutKredileri2 = [12, "Emlak Konut Kredisi", ["a","b","c"]]

// console.log("<ul>")
// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log("<li>" + konutKredileri[i] + "</li>")
// }
// console.log("</ul>")    

// console.log(konutKredileri)
// console.log(konutKredileri2)

=======
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
