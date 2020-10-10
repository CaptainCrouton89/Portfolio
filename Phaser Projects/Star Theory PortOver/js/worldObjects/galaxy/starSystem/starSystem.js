"use strict"

class StarSystem {
    
    constructor(galaxy) {
        this.planetManager = new PlanetManager();
        this.galaxy = galaxy;
        this.adjacentStars = [];
        this.x;
        this.y;
    }

    getAdjacentStars() {
        return this.adjacentStars;
    }

    

}