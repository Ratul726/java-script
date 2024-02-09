// problem two____________________________---------------------------------------

// function macthFinder(string1,string2){
//     if(typeof string1 !== 'string' && string2 !== 'string'){
//         return 'pleace specify a parameter'
//     }
    
//         const result = string1.includes(string2);
//         return result;
//     }
//     console.log(macthFinder("this is on", "on"));
//     console.log(macthFinder(10,12))
//     console.log(macthFinder("this is on", "ono"))
//     // console.log(macthFinder('kaka vat khan', 'kaka'))
//     // console.log(macthFinder(12))


//     function checkName(name){
//         if(typeof name !== 'string'){
//         return "Type A Name In String"
//         }
//         const goodNameEnding = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
//         const lastCharacter = name.charAt(name.length - 1);
//         if(goodNameEnding.includes(lastCharacter.toLowerCase())){
//         return "Good Name"
//         }else{
//         return "Bad Name"
//         }
//         }
//         console.log(checkName('salman'))


function password(obj) {
    if (!obj || typeof obj !== 'object') {
        return "invalid";
    }

     let { name, birthYear, siteName } = obj;
    // const obj ={name,birthYear,siteName}

    if (!name || !birthYear || !siteName || typeof name !== 'string' || typeof siteName !== 'string' || typeof birthYear !== 'number' || birthYear.toString().length !== 4) {
        return "invalid";
    }

     const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1)
    const password = `${capitalizedSiteName}#${name}#${birthYear}`;
    return password;
}

// Test cases
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Output: Google#kolimuddin@1999
console.log(password({ name: "Rahat", birthYear: 2002, siteName:'facebook' })); // Output: "invalid"
console.log(password({ name: "Rahim", siteName: "facebook" })); // Output: "invalid"
console.log(password({ name: "Sohel", birthYear: "1999", siteName: "yahoo" })); // Output: "invalid"
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));