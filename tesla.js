const heights = [10, 65,70,67,45,41,5,52,77]
//  const result =  Math.max(heights);
//  console.log(result);
//  console.log( Math.max(heights));

function getMax(numbers){
    let max = numbers[0];
    // console.log(numbers);
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('Max value is ' , max);