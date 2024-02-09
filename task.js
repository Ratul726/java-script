// const products = [
//     {name : 'shampoo' , price : 300 , quantity : 2 }  , 
//     {name : 'chironi' , price : 100 , quantity : 4 }  , 
//     {name : 'shart' , price : 600 , quantity : 1 }   ,
//     {name : 'pant' , price : 1200 , quantity : 5 }   ,
// ]

// function getShopingTotal(products) {
//     let total = 0;
//  for(const product of products){
//  total = total +product.price;
//  }
//  return total
// }

// const total = getShopingTotal(products);
// console.log('total ajke khosabe : ' ,total);


// function findLongestWord(words){
//     let wordArray = words.split(' ');
//     let longestWord = '';

//     for(const word of wordArray){
//         // console.log(word)
//         if(word.length > longestWord.length){
//             longestWord = word ;
//         }
//     }
//     return longestWord;
// }

// const longestWord = findLongestWord('I am a learning programming to become a programmer');
// console.log(longestWord)

// problem one________=________
// function cubeNumber(number){
//     if(typeof number !== 'string'){
//         return 'please proved a number'
//     }

//     const result = Math.pow(number,3);
//     return result
// }
// console.log(cubeNumber(3));

// problem two____________________________---------------------------------------

function macthFinder(string1,string2){
// if(typeof string1 !== 'string' || string2 !== 'string'){
//     return 'pleace specify a parameter'
// }

    const result = string1.includes(string2);
    return result;
}
console.log(macthFinder("this is on", "on"))
// console.log(macthFinder('kaka vat khan', 'kaka'))
// console.log(macthFinder(12))


// problem three_______________________________------------------------------


// function sortMaker(arr){
//     const [a,b] = arr;

//     if(a < 0 || b < 0){
//         return "Invalid Input"
//     }
//     else if(a === b ){
//         return 'equal'
//     }
//     else if(a > b){
//         return [a,b]
//     }
//     else{
//         return [b,a]
//     }

// }
// console.log(sortMaker([4,6]))


// problem four 

// function findAddress (obj) {
//     const street = obj.street || '__';
//     const house = obj.house || '__';
//     const society = obj.society || '__';

//     const str = street + ',' + house + ','+society;

//     return str;
// }

// console.log(findAddress({street :10,}))

function password(obj) {
    if (!obj || typeof obj !== 'object') {
        return "invalid";
    }

    const { name, birthYear, siteName } = obj;

    if (!name || !birthYear || !siteName || typeof name !== 'string' || typeof siteName !== 'string' || typeof birthYear !== 'number' || birthYear.toString().length !== 4) {
        return "invalid";
    }

    const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const password = `${capitalizedSiteName}#${name}@${birthYear}`;
    return password;
}

// Test cases
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Output: Google#kolimuddin@1999
console.log(password({ name: "Koli", birthYear: 2003 })); // Output: "invalid"
console.log(password({ name: "Rahim", siteName: "facebook" })); // Output: "invalid"
console.log(password({ name: "Sohel", birthYear: "1999", siteName: "yahoo" })); // Output: "invalid"


function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return 'invalid Input'
    }
    let totalEarn = 0;
    for(let i = 0; i < arr.length; i++){
         totalEarn = totalEarn + arr[i];
        
    }

    const saveMoney = totalEarn - livingCost;
    if(saveMoney >= 0 ){
        return saveMoney;
    }
    else{
        return 'earn more'
    }

   }
   console.log(monthlySavings([1000,2000,3000],5400))