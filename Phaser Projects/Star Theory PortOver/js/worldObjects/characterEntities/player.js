"use strict"

class Player extends Pilot {
    constructor(config=null, settings=null) {
        super();
        this.settings = settings;
        this.starSystemLocation;
        this.planetaryLocation;
        this.location = {
            "star": this.starSystemLocation,
            "planet": this.planetaryLocation
        }

        

        this.ship = new Ship(this);

        
        // Load saved player if possible, otherwise create a new ones
        if (config) {
            this.load(config);
        } else {
            this.newPlayer();
        }
    }

    getLocation() {
        return this.location;
    }

    newPlayer () {
        console.log("Creating player...");
        this.reputation = 0
        this.honor = {
            good: 0,
            bad: 0
        }
        this.factionAffinity = {}
    }

    load (config) {
        console.log("Loading player...");
    }
}