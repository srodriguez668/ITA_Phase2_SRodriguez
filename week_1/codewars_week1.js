//2.8.21
//Create a function that returns any words greater than or equal to 5 characters in reverse

function spinWords(word) {

    const splitString = word.split(" ");

    var output = "";

    splitString.forEach(word => {
        if (word.length >= 5) {
            output = output.concat(word.split('').reverse().join(''), " ");
        } else {
            output = output.concat(word, " ");
        }
    });

    output = output.trim();
    return output;

}

spinWords("test Hello there")

//2.9
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data) {
    results = []
    data.forEach(person => {
        if (person[0] >= 55 && person[1] > 7) {
            results.push('Senior')
        } else {
            results.push('Open')
        }
    })
    return results
}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])

//2.10
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    result = ""
    ccr = cc.split("").reverse().join("")

    for (let i = 0; i < ccr.length; i++) {
        if (i > 3) {
            result += "#"
        } else {
            result += ccr[i]
        }
    }

    result = result.split("").reverse().join("")
    return result
}

maskify("should")


//2.11
//More generally given parameters:
//p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
    totalPopulation = 0
    currentPopulation = p0;
    years = 0 ;

    while (totalPopulation < p) {
        totalPopulation = currentPopulation + currentPopulation * (percent/100) + aug;
        currentPopulation = totalPopulation
        years ++;
    }
    
    return years;
}

nbYear(1500, 5, 100, 5000)

//smarter answer then the one I had
// function nbYear(p0, percent, aug, p) {
//     var count = 0;   
//     while(p0<p){
//         p0 += p0 * percent/100 + aug;
//         count++;
//     }
//     return count;
}