//2.16.21
//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    let allNames = ''
//could have used array.splice and -1 to simplify logic (splice changes the array so declare a new variable)
//also array.join could have converted this to a string and added the ,
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

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

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
  // you can do (^\d{4}$|^\d{6}$) ? true : false 

  //2.18.21
  //There is a bus moving in the city, and it takes and drop some people in each bus stop.
  //You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.


  var number = function(busStops){
    let busCount=0
    busStops.forEach(busStop => {
        let [onBus, offBus] = busStop
        busCount = busCount + onBus - offBus
    })
    return busCount
}

var number = function(busStops){
    return busStops.reduce(busTotal, currentValue => {
        let [onBus, offBus] = currentValue
        return busTotal + onBus - offBus
    })
}

console.log(number([[10,0],[3,5],[5,8]]))
//I saw this being done with just a .reduce??