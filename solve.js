
// const price = 40000;
// if(price >= 5000){
//     // 10% discount 
//     const discount = price * 10 / 100;
//     const payAmount = price - discount
//     console.log(payAmount)
// }
// else if (price >= 4010) {
//     const discount = price * 5 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else {
//     console.log(price)
// }


function monthlySavings(arr , livingCost) {
 if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return "invalid input";
}
 let totalEarn = 0;
    for (let i = 0; i < arr.length; i++) {
        totalEarn += arr[i];
    }
    const saving = totalEarn - livingCost;
    
    if (saving >= 0) {
        return saving;
    } else {
        return 'earn more'
    }
}

console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // Output: "invalid input"