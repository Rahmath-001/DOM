
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
