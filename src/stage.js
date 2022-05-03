class Stage {
    constructor(name, location, weeks, remainingSpots, prices) {
        this.name = name;
        this.location = location;
        this.weeks = weeks;
        this.remainingSpots = remainingSpots;
        this.prices = prices;
    }
}

class stageRequested extends Stage {
    constructor(){

    }
}

class stageFound extends Stage {

}

// returns user email, pw, array index of location, 
//array index of support and array index of level 

export default Stage;
