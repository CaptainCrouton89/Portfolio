'use strict';

class StarSystemManager {
    constructor(galaxy) {
        this.starSystems = [[]];
        this.galaxy = galaxy;

        // Generates datastructure to hold stars
        let numberOfStarLayers = this.galaxy.settings.starLayers.range.current;
        this.starSystems = Array(numberOfStarLayers).fill().map(() => Array(8));
    }

    add(starSystem, l, d) {
        this.starSystems[l][d] = starSystem;
        // this.starSystems[l].append(starSystem);
    }

    genStarsAndPlanets () {
        console.log('Generating stars and planets...');

        // Loops through empty data structure and fills it with stars, and the for each star, generates planets
        for (let l=0; l<this.starSystems.length; l++) {
            for (let d=0; d<8; d++) {
                let currentStarSystem = new StarSystem(this.galaxy, l, d);
                currentStarSystem.genPlanets();
                this.add(currentStarSystem, l, d);
            }
        }
        // console.table(this.starSystems);
    }
};
