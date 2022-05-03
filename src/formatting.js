//FORMATTING THE WEEKS DATA INTO AN ARRAY OF STRINGS such as 'samedi 16 avril'
const formatWeeks = (weeks) => {
    //remove the accent on "août" bc it interferes with regex expression
    weeks = weeks.replaceAll('û', 'u')
    //split the string between letters and numbers and rejoin it with spaces
    var arrayPostRegex = weeks.match(/[a-z]+|[^a-z]+/gi)
    weeks = arrayPostRegex.join(' ')
    //split the string where there are weekdays
    var tempArr = weeks.split(/sam|ven/)
    tempArr = formatMonths(tempArr)
    //add the weekday before each array element and remove the first empty one
    const weeksArr = []
    for (let i = 1; i < tempArr.length; i++) {
        weeksArr[i - 1] = 'samedi' + tempArr[i]
    }
    return weeksArr
}

//HELPER FUNCTION TO FORMAT THE MONTHS
const formatMonths = (array) => {
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
            //console.log('None of the months applied')
        }
    }
    return array;
}

//FORMATTING THE SPOTS DATA INTO AN ARRAY OF NUMBERS
const formatSpots = (spots) => {
    const tempArr = spots.split('.')
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i].charAt(0);
    }
    tempArr.pop();
    return tempArr;
}

//FORMATTING THE PRICE DATA INTO AN ARRAY OF STRINGS
const formatPrices = (prices) => {
    const tempArr = prices.split('€')
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i] + '€';
    }
    tempArr.pop()
    return tempArr;
}

//FORMATTING ALL OF THE DATA BEFORE PRINTING
const printSummary = (stage) => {
    const today = new Date();
    const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    console.log(`Summary of your requested courses on ${date}:`);

    console.log(`For the ${stage.name} at the ${stage.location} location:`)
    var number = stage.weeks.length
    for (let i = 0; i < number; i++) {
        console.log(`There are ${stage.remainingSpots[i]} spots left for the week of ${stage.weeks[i]} for the price of ${stage.prices[i]}`);
    }
}

export { formatSpots, formatWeeks, formatPrices, printSummary };