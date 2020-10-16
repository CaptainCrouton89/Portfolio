"use strict"

class Player {
    constructor(config=null, settings=null) {
        this.settings = settings;
        this.starSystemLocation;
        
        // Load saved player if possible, otherwise create a new ones
        if (config) {
            this.load(config);
        } else {
            this.newPlayer();
        }
    }

    newPlayer () {
        console.log("Creating player...");
    }

    load (config) {
        console.log("Loading player...");
    }
}