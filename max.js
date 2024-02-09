// function getMax (num1,num2,num3,num4){
//     if(num1 > num2 && num1 > num3 && num1 > num4){
//         console.log('Number ONE is the most bigest Number of the element');
//     }
//     else if(num2 > num1 && num2 > num3 && num2 > num4){
//   console.log('Number TWO is the most bigest Number of the element');
//     }
//     else if(num3 > num1 && num3 >num2 && num3 > num4){
//         console.log('Number THREE is the most bigest Number of the element');
//     }
//     else{
//         console.log('Number FOUR is the most bigest Number of the element');
//     }
// }
// getMax(10,211,1200,500);

const phoneList = [
    { quantity:1, name: "oppo", price: 20000, color: "black" },
    { quantity:2, name: "Iphone", price: 120000, color: "black" },
    { quantity:1, name: "vivo", price: 22000, color: "black" },
    { quantity:1, name: "Walton", price: 40000, color: "black" },
    ];
    function shoppingCost(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
    total = total + array[i]["price"]*array[i]["quantity"];
    }
    return total;
    }
    console.log(shoppingCost(phoneList));

    // 

    const array = [85,10,20,3,0,74,54];
    function getMax(numbers){
        let max = numbers[0]
        for(const number of numbers){
            if(number < max){
                  max = number; 
            }     
           }
        return max;
    } 
    const max =getMax(array)
    console.log("the max value of the element of " ,max)