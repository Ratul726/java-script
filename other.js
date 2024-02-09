const obj = [
    {name : 'Ratul', age : 17, class : 11, demand : 'normal'},
    {name : 'Abdur Rob', age : 55, class : 5, demand : 'normal'},
    {name : 'Romana Akter', age : 42, class : 10, demand : 'normal'},
    {name : 'Rabbi', age : 16, class : 12, demand : 'normal'}
]

function degriar (numbers){
    let max = numbers[0]
    for(const nums of numbers){
        if(max.age < nums.age){
            max = nums;
        }
    }
    return max;
}

const avg = degriar(obj);
console.log(avg)



function findLongestWord(words){
        let wordArray = words.split(' ');
        let longestWord = '';
    
        for(const word of wordArray){
            // console.log(word)
            if(word.length > longestWord.length){
                longestWord = word ;
            }
        }
        return longestWord;
    }

    const longestWord = findLongestWord('I am a learning programming to become a programmer');
console.log(longestWord)