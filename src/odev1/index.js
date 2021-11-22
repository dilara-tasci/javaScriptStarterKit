// 1. JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir 
// fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak 
// asal olup olmadığını yazınız.
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
        let counter = 0
        if(numbers[i] == 2){
            counter = 0
        }
        else{
            for (let j = 2; j < numbers[i]; j++) {
                if(numbers[i] % j == 0){
                    counter += 1
                }   
            }
        }
        if(counter > 0){
            console.log(numbers[i] + " is not prime")
        }
        else{
            console.log(numbers[i] + " is prime")
        }
    }
}
console.log("1. asal sayı bulma")
findPrime(2, 5, 8, 21)
findPrime(3, 5)

// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını 
// bulan programı yazınız.

function findFriendlyNumber(...numbers){
    
}