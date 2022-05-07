class StageRequested {
    constructor() {
        this.location;
        this.support;
        this.level;
        //url of requested course made from makeLink
        this.pageUrl;
        //reference name as shown on website
        this.stageName;
        //map of weeks to prices and spots which are both strings
        this.weekInfo = new Map();
        //an array of summary strings
        this.summary;
    }
}

class StageFound {
    constructor(type, location, weeks, spots, prices) {
        this.type = type;
        this.location = location;
        this.weeks = weeks;
        this.spots = spots;
        this.prices = prices;
    }
}

//used to facilitate testing purposes
class TestStage {
    constructor(location, support, level) {
        this.location = location;
        this.support = support;
        this.level = level;
    }
}

export { StageRequested, StageFound, TestStage };

