"use strict"

class StarSystemManager {
    constructor() {
        this.starSystems = [];
    }

    add(starSystem) {
        this.starSystems.push(starSystem);
    }

    genStars (n) {
        console.log("Generating stars...");
        for (i=0; i<n; i++) {
            currentStar = new StarSystem();
        }
    }
}