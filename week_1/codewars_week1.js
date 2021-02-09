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

function openOrSenior(data){
    results = []
    data.forEach(person => {
        if (person[0]>=55 && person[1]>7){
            results.push('Senior')
        } else {
            results.push('Open')
        }
    })
    return results
  }

  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])