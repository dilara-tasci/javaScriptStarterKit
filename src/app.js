console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "Ankara"
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.20
// euroDun = 11.10 //const'a yeniden atama yapılmaz
console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]
let konutKredileri2 = [12, "Emlak Konut Kredisi", ["a","b","c"]]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")    

console.log(konutKredileri)
console.log(konutKredileri2)