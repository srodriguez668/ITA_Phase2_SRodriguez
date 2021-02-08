//2.8.21
//Create a function that returns any words greater than or equal to 5 characters in reverse

function spinWords(word){

    const splitString = word.split(" ");

    var output = "";
      
    splitString.forEach(word => {
        if(word.length>=5){
            output = output.concat(word.split('').reverse().join(''), " ");
        } else {
            output = output.concat(word, " ");
        }        
    });

    output = output.trim();
    return output;

  }
  
  spinWords("test Hello there")