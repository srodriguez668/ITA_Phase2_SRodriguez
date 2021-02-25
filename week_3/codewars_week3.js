//2.22.21
//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
//For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

function firstNonRepeatingLetter(s) {
    var first;
    s.split('').some(function (character, index, obj) {
        if (obj.indexOf(character) === obj.lastIndexOf(character) || obj.indexOf(character.toLowerCase()) === obj.lastIndexOf(character.toLowerCase())) {
            first = character;
            return true;
        }
        return false
    });

    return s === "" ? "" : first;
}

firstNonRepeatingLetter('moonmen')

// In the process of looking for a good regex I came across this one. I was creating
// a forEach loop which this code does a much better job at. As they say, don't try to reinvent the wheel.
// I did learn that .some is same thing as .test with regex but a test for an array (super useful)
// Also big brain move to use lastIndexOf to make sure something is not repeating. All this to say while I 
// did not code most of it I spent a good 30-40 mins googling and learning from this one


//2.23.21
//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
//after it in the alphabet. ROT13 is an example of the Caesar cipher.

const rot13 = (message) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
}

rot13("grfg");

//gi = case insensitve for regex
//Could not find any prebuilt alphabate method or a regex version to add 13, is that thing?
//Foud the the code that matches each letter but that feels less legiable than this solution

//2.25.21
//Given a list lst and a number N, create a new list that contains each number of lst at most N times without 
//reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next 
//[1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr, n) {
    let checkValue = new Map()

    //filter options by if they passed the test
    return arr.filter((currentValue) => checkIt(currentValue) === 1)

    function checkIt(currentValue) {
        //checks that it is the same character and that the count had not been passed
        if (checkValue.get(currentValue) === n) {
            return 0

        } else if(checkValue.has(currentValue) === true) {
                checkValue.set(currentValue, (checkValue.get(currentValue) + 1))
                return 1

        //updates character and increases count to appropriate amount   
        } else {
            checkValue.set(currentValue, 1)
            return 1
        }

}};

//deleteNth([20, 37, 20, 21], 1)
deleteNth([1,1,3,3,7,2,2,2,2], 3)

//do I get bonus points for no one doing anything close to this?? hahaha
//can you explain this one to me:
// function deleteNth(arr,x) {
//     var cache = {};
//     return arr.filter(function(n) {
//       cache[n] = (cache[n]||0) + 1;
//       return cache[n] <= x;
//     });
//   }