"use strict"

class StarSystemManager {
    constructor(galaxy) {
        this.starSystems = [[]];
        this.galaxy = galaxy;
    }

    add(starSystem, l, d) {
        this.starSystems[l][d] = starSystem;
        // this.starSystems[l].append(starSystem);
    }

    genStars (numberOfLayers) {
        console.log("Generating stars...");
        this.starSystems = Array(numberOfLayers).fill().map(() => Array(8));
        for (let l=0; l<numberOfLayers; l++) {
            for (let d=0; d<8; d++) {
                let currentStarSystem = new StarSystem(this.galaxy, l, d);
                this.add(currentStarSystem, l, d);
            }
        }
        // console.table(this.starSystems);
    }
}