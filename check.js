function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const janitorFee = 500;
    const staffLunch = 8;
    const perPersonlunch = 50;

    if(ticketSale >= 0){
        const allMoney = ticketSale * ticketPrice ; 
        const total = staffLunch * perPersonlunch + janitorFee;
        const safeMoney = allMoney - total ; 
         return safeMoney;

    }else{
        return 'Invalid your number'
    }
  }
 
function checkName(name) {
        
        if (typeof name !== 'string') {
            return "invalid";
        }        
        const goodNamesLastWords = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        const smallCase = name.toLowerCase();
        const lastChar = smallCase.slice(-1);
        if (!goodNamesLastWords.includes(lastChar)) {
            return "Bad name";
        } else {
            return "Good Name";
        }
    }

function deleteInvalids(array) {  
    if (Array.isArray(array)) {       
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number' && !isNaN(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    } else {
        return "Invalid Array";
    }
}

function password(obj) {
    if(!obj || typeof obj !=='object'){
    return "Invalid"
    }
    let {name,birthYear,siteName} = obj;

    if(!name || typeof name !== 'string'){
        return 'Invalid'
    }else if(!birthYear || typeof birthYear !=='number' || birthYear.toString().length !==4){
        return 'Invalid'
    }else if(!siteName || typeof siteName !=='string' ){
        return 'invalid'
    }

    const upperCase = siteName.toUpperCase().charAt(0) +siteName.slice(1);
    let password = `${upperCase}#${name}@${birthYear}`;
    return password;

    }

 

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


