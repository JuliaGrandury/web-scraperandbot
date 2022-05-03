class StageRequested {
    constructor(support, location, level) {
        this.support = support;
        this.location = location;
        this.level = level;
        //url of requested course made from makeLink
        this.stageUrl;
        //map of weeks to prices and spots which are both strings
        this.weekInfo = new Map();
    }
}

// class StageFound {
//     constructor(name, location, weeks, remainingSpots, prices) {
//         this.name = name;
//         this.location = location;
//         this.weeks = weeks;
//         this.remainingSpots = remainingSpots;
//         this.prices = prices;
//     }
// }

// returns user email, pw, array index of location, 
//array index of support and array index of level 

export { StageRequested, StageFound };
