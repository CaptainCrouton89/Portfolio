"use strict"

class Player extends Pilot {
    constructor(config=null, settings=null) {
        super();
        this.settings = settings;
        this.location;

        

        this.ship = new PlayerShip(this);

        
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

    setLocation(location) {
        this.location = location;
    }

    getStarSystem() {
        if (this.location.starSystem) {
            return this.location.starSystem;
        }
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