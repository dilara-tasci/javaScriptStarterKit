<<<<<<< HEAD
function addToCart(quantity, productName = "Elma"){
    console.log("Sepete Eklendi ürün: " + productName + " adet: " + quantity);
}

//addToCart()
//addToCart("Yumurta", 10)
addToCart(15)

let sayHello =  () => {
    console.log("Hello World!");
=======
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}

sayHello()

<<<<<<< HEAD
let sayHello2 = function() {
    console.log("Hello World 2");
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)
=======
let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
<<<<<<< HEAD
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

=======
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
<<<<<<< HEAD
product2.productName = "Karpuz"
=======
product2.productName = "KARPUZ"
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}
<<<<<<< HEAD
//eğer kendi scope'unda bulamazsa bir üst scope'a bakar
=======
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

<<<<<<< HEAD
function add(...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

//rest yazımında dikkat edilmesi gereken nokta her zaman en sona bırakılması gerektiğidir. 
/*function add(...numbers, bisey) { //rest
    let total = 0
=======
function add(bisey,...numbers) { //rest
    let total = 0;
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
<<<<<<< HEAD
}*/ //hatalı kullanım

/*function add(bisey, ...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}*/ //doğru kullanım

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)

let numbers = [30, 10, 500, 600, 120]
//console.log(numbers)
//console.log(...numbers)
console.log(Math.max(...numbers)) //spread

//Not: spread ayrıştırır rest toparlar

// let regions =["İç Anadolu", "Marmara", "Karadeniz"]
// console.log(regions[1])

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] =[
    {name: "İç Anadolu", population: "20M"}, 
    {name: "Marmara", population: "30M"}, 
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]
=======
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
<<<<<<< HEAD
({productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity} 
=======
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
<<<<<<< HEAD
console.log(newQuantity)
=======
console.log(newQuantity)

>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
