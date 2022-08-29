// import readlineSync from "readline-sync";

function base64encoding(){

//  Step 1 : ACCEPT STRING INPUT.

    let inputstring = document.getElementById("textinput").value


//  Step 2 : spliting STRING INPUT.

    let splitstring = inputstring.split("");
    // console.log("the string is : ",splitstring);

//  Step 3 : convert ASCII to binary.

    let asciicodes = splitstring.map((char)=>char.charCodeAt());        // => arrow function is a function which will return.
    // console.log("the ASCII Array is : ",asciicodes)

//  Step 4 : converting ASCII to binary.

    let binarycode=asciicodes.map((num)=>num.toString(2));
    // console.log("Binary code for ASCII Array",binarycode);

//  Step 5 : padding to 8 bit.

    let binarycode8bit=binarycode.map((bin)=>{
    while(bin.length<8){
       bin="0"+bin;
    }
    return bin;
    })
    // console.log("binary value in 8bit are : ",binarycode8bit)


//  Step 6 : adding the biinary value.
    
    let onebinary=binarycode8bit.join("").split("");
    // console.log(onebinary);


//  Step 7 : splitting into 6 bits.
    let binarycode6bit=[];
    while(onebinary.length !=0){
        binarycode6bit.push(onebinary.splice(0,6).join(""))
    }
    // console.log("binaries in 6bit are : ",binarycode6bit)


//  Step 8 : padding and adding.

    let lastelement=binarycode6bit[binarycode6bit.length-1]
    if(lastelement.length!=6){
        var counter=0;
        while(lastelement.length<6){
            lastelement=lastelement+"0";
            counter++;
        }
        binarycode6bit[binarycode6bit.length-1]=lastelement;
    }
    // console.log("binaries in 6bit are : ",binarycode6bit)

    let bintodecimal = binarycode6bit.map((str)=>parseInt(str,2))
    // console.log("base64 decimals : ",bintodecimal);


    //  Step 8 : decimal to baea64 

    let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let base64final=bintodecimal.map((dec)=>base64[dec])
    // console.log("Base 64 string",base64final)
    if(counter==2){
        base64final.push("=")
    }else if (counter==4){
        base64final.push("==")
    }

    let finalbase64string=base64final.join("");
    console.log("your base64 output is : ",finalbase64string);

    // return finalbase64string;
    document.getElementById("newtext").innerText = finalbase64string

}


// base64encoding()


// export default base64encoding;