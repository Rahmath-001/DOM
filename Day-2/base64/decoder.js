// import readlineSync from "readline-sync"

// import base64encoding from './encoder.js'


//  check the input is a valid base64 & check for ==
// get base64 decimal values. 
// convert decimal to 6bit binary 
// join everything. (concatenate)
// remove last zeros accord  to equal count.
// split into 8 bits.
// convert to decimal.
// ASCII array.
// Join and display ASCII string.



// var encodedString = "SEKSMA"

// var decodedString = atob(encodedString);
// console.log(decodedString);

// spread operator are highly used in react.






// // let base64encoding = "SEVMTE8=";
// // let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// // console.log(finalbase64string)

// //  let deencoding=base64encoding.toString()


// let inputstring = readlineSync.question("Enter the string to decode : ");


// // while(inputstring = " "){
// //     console.log(" entered sting is empty.")
// //     if (inputstring > 0){
// //         console.log(inputstring);
// //     }
// //     i++;
// // }


// const base64regex=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/


// while(!inputstring || (!(base64regex.test(inputstring)))){
//     inputstring=readlineSync.question("Invalid Input, please try again : ");
// }





// let dec=inputstring.split()
// console.log(dec)


// // let lastelement=binarycode6bit[binarycode6bit.length-1]
// var counter=0;
// if(dec[dec.length-1] == "="){
//     dec.pop()
//     counter++;
//     if(dec[dec.length-1] == "="){
//     dec.pop()
//     counter++;
//     }
// }

// let decimal =  dec.map((num) =>base64.indexOf(num))
// console.log(decimal)


// let binary = decimal.map((bin) =>bin.toString(2))   // decimal.toString(2)
// console.log(binary)

// let binarycode6bit=binary.map((bin)=>{
//     while(bin.length<6){
//        bin="0"+bin;
//     }
//     return bin;
//     })
//    console.log(binarycode6bit) 

// // let binary8bit = binarycode6bit.join("")

// // console.log(binary8bit)

// let lastelement = binarycode6bit[binarycode6bit.length-1]
// while(counter>0){
// //   lastelement = lastelement.split("")
//   lastelement =lastelement.slice(0,lastelement.length-2)
//   counter--;
// }
// binarycode6bit.pop()
// binarycode6bit.push(lastelement)

// binarycode6bit=binarycode6bit.join("").split("");

// console.log(binarycode6bit)
// let binarycodejoin=[];
//     while(binarycode6bit.length !=0){
        // binarycodejoin.push(binarycode6bit.splice(0,8).join(""))
//     }
// console.log(binarycodejoin)

// let bintodec = binarycodejoin.map((char)=>parseInt(char,2));
// console.log(bintodec)

// let decode=bintodec.map((temp) => String.fromCharCode(temp))
// console.log(decode)

// export default decode;










function base64decode() {
    let inputstring = document.getElementById("textinput").value
 
    const base64regex=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    
while(!inputstring || (!(base64regex.test(inputstring)))){
    inputstring=prompt("Invalid Input, please try again : ");
}

document.getElementById("textinput").value=inputstring;

let splitstring=inputstring.split("")
// console.log(splitstring)


var counter=0;

if(splitstring[splitstring.length-1] == "="){
    if(splitstring[splitstring.length-2] == "="){
    splitstring.pop();
    counter++;
    }
    splitstring.pop();
    counter++;
}
// console.log(splitstring)


let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

let decimal =  splitstring.map((num) =>base64.indexOf(num))
// console.log(decimal)


let binary = decimal.map((bin) =>bin.toString(2))   // decimal.toString(2)
// console.log(binary)

let binarycode6bit=binary.map((bin)=>{
    while(bin.length<6){
       bin="0"+bin;
    }
    return bin;
    })
//    console.log(binarycode6bit) 

   let lastelement = binarycode6bit[binarycode6bit.length-1]
   while(counter>0){
   //   lastelement = lastelement.split("")
     lastelement =lastelement.slice(0,lastelement.length-2)
     counter--;
   }
   binarycode6bit.pop()
   binarycode6bit.push(lastelement)
   
   binarycode6bit=binarycode6bit.join("").split("");
//    console.log(binarycode6bit)

   let binarycodejoin=[];
       while(binarycode6bit.length !=0){
           binarycodejoin.push(binarycode6bit.splice(0,8).join(""))
       }
//    console.log(binarycodejoin)
   
   let bintodec = binarycodejoin.map((char)=>parseInt(char,2));
//    console.log(bintodec)
   
   let decode=bintodec.map((temp) => String.fromCharCode(temp))
   decode=decode.join("")
   console.log(decode)
   document.getElementById("newtext").innerText = decode

//    return decode;

}

// base64decode();
// export default base64decode;
