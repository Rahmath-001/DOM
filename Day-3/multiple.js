
    function getMultiples(num) {
        let multiples = [];
        
        for(let i = num; i<= 100; i= i++){
          if ((i%num) == 0){
            multiples.push(i)
          }
        }
        return multiples;
      }

      console.log(multiples)
    //   document.getElementById(clickednumber).value=getMultiples
    //   getMultiples(21)
