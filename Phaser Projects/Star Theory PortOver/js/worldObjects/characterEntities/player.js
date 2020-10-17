"use strict"

class Player extends Pilot {
    constructor(config=null, settings=null) {
        super();
        this.settings = settings;
        this.starSystemLocation;

        

        this.ship = new Ship(this);

        
        // Load saved player if possible, otherwise create a new ones
        if (config) {
            this.load(config);
        } else {
            this.newPlayer();
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