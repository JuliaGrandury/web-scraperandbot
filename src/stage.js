class StageRequested {
    constructor(location, support, level) {
        this.location = location;
        this.support = support;
        this.level = level;

        //url of requested course made from makeLink
        this.pageUrl = String;
        //reference name as shown on website
        this.name = String;
        //map of weeks to prices and spots which are both strings
        this.weekInfo = new Map();
    }
    get pageUrl(){
        return this.pageUrl;
    }
    set pageUrl(url) {
        this.pageUrl = url;
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

// returns user email, pw, array index of location, 
//array index of support and array index of level 

export { StageRequested, StageFound };
