"use strict"

class PlanetManager {
    constructor(starSystem) {
        this.planetSystem = [];
        this.starSystem = starSystem;
    }

    add(planet, l) {
        this.planetSystem[l] = planet;
    }

    genPlanets () {
        console.log("Generating planets for starsystem...");

        let numberOfLayers = this.starSystem.galaxy.settings.averageNumPlanets.range.current;
        this.planetSystem = Array(numberOfLayers);
        for (let l=0; l<numberOfLayers; l++) {
            let currentPlanet = new Planet(this.starSystem, l);
            this.add(currentPlanet, l);
        }
        // console.table(this.starSystems);
    }
}