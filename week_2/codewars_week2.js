//2.16.21
//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    let allNames = ''
    names.forEach(element => {
        if (names.indexOf(element) + 2 === names.length) { 
            allNames += element.name + ' & '; 
        } else if(element != '' && names.indexOf(element) + 2 < names.length) {
            allNames += element.name + ', '; 
        } else {
            allNames += element.name;
        } 
    })
    return allNames
}

//tried to figure out how to use map but failed at it, someone submitted an answer with it though
//let's talk through their solution
//function list(names) {
//    var xs = names.map(p => p.name)
//    var x = xs.pop()
//    return xs.length ? xs.join(", ") + " & " + x : x || ""
//  }


//2.17.21
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
   return (/^[0-9]{4}$/.test(pin) === true || /^[0-9]{6}$/.test(pin) === true) ? true : false
}

  validatePIN(1342)

  //how could I have made my regex just 1, doing {4,6} was also including 5?