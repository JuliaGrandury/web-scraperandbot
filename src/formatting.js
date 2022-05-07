//FORMATTING THE WEEKS DATA INTO AN ARRAY OF STRINGS such as 'samedi 16 avril'
const formatWeeks = (weeks) => {
    if (typeof weeks !== 'string') {
        throw new TypeError('Error: Only a string can be passed into this function');
    }

    //remove "août" accent due to regex expression interference
    weeks = weeks.replaceAll('û', 'u');

    //split the string where there are numbers and rejoin it with spaces
    let arrayPostRegex = weeks.match(/[a-z]+|[^a-z]+/gi);
    weeks = arrayPostRegex.join(' ');

    //split the string where there are weekdays (sam, ven, jeu) and turn into array
    let tempArr = weeks.split(/(sam|ven|jeu)/)
    tempArr = tempArr.filter(element => element !== '')
    tempArr = tempArr.filter(element => element !== undefined)

    //change months from abbreviated to full
    tempArr = formatMonths(tempArr);

    //change sam and ven to samedi and vendredi
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] == 'sam') {
            tempArr[i] = 'samedi';
        } else if (tempArr[i] == 'ven') {
            tempArr[i] = 'vendredi';
        } else if (tempArr[i] == 'jeu') {
            tempArr[i] = 'jeudi';
        }
    }

    //join days with numbers and months
    let finalArr = [];
    for (let j = 0; j < tempArr.length; j += 2) {
        finalArr.push(tempArr[j] + tempArr[j + 1]);
    }
    return finalArr;
}

//HELPER FUNCTION TO FORMAT THE MONTHS
const formatMonths = (array) => {
    if (!Array.isArray(array) || typeof array === "string") {
        throw new TypeError('Error: Only an array can be passed into this function');
    }
    for (let i = 0; i < array.length; i++) {
        const exp = array[i].replace(/[0-9]/g, '')
        switch (exp) {
            case '  janv':
                array[i] = array[i] + 'ier';
                break;
            case '  fev':
                array[i] = array[i] + 'rier';
                break;
            case '  mars':
                break;
            case '  avr':
                array[i] = array[i] + 'il';
                break;
            case '  mai':
                break;
            case '  juin':
                break;
            case '  juil':
                array[i] = array[i] + 'let';
                break;
            case '  aout':
                break;
            case '  sept':
                array[i] = array[i] + 'embre';
                break;
            case '  oct':
                array[i] = array[i] + 'obre';
                break;
            case '  nov':
                array[i] = array[i] + 'embre';
                break;
            case '  dec':
                array[i] = array[i] + 'embre';
                break;
            default:
                break;
        }
    }
    return array;
}

//FORMATTING THE SPOTS DATA INTO AN ARRAY OF NUMBERS
const formatSpots = (spots) => {
    if (typeof spots !== 'string') {
        throw new TypeError('Error: Only a string can be passed into this function');
    }
    const tempArr = spots.split('.')
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i].charAt(0);
    }
    tempArr.pop();
    return tempArr;
}

//FORMATTING THE PRICE DATA INTO AN ARRAY OF STRINGS
const formatPrices = (prices) => {
    if (typeof prices !== 'string') {
        throw new TypeError('Error: Only a string can be passed into this function');
    }
    const tempArr = prices.split('€')
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i] + '€';
    }
    tempArr.pop()
    return tempArr;
}

//FORMATTING ALL OF THE DATA BEFORE PRINTING
const fetchSummary = (stage) => {
    let resultArr = [];

    const today = new Date();
    const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    resultArr.push(`Summary of your requested courses on ${date}:`);

    resultArr.push(`For the ${stage.type} at the ${stage.location} location:`);
    for (let i = 0; i < stage.weeks.length; i++) {
        resultArr.push(`There are ${stage.spots[i]} spots left for the week of ${stage.weeks[i]} at the price of ${stage.prices[i]}`);
    }
    return resultArr;
}

export { formatWeeks, formatMonths, formatSpots, formatPrices, fetchSummary };

