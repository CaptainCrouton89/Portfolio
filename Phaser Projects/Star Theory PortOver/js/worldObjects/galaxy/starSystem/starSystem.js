"use strict"

class StarSystem {
    
    constructor(galaxy, layer, degree) {
        this.planetManager = new PlanetManager();
        this.name = "defaultStarSystemName";
        this.galaxy = galaxy;
        this.adjacentStars = [];
        this.layer = layer;
        this.degree = degree;
        this.sprite;
    }

    getAdjacentStars() {
        return this.adjacentStars;
    }

    getContainer () {
        return this.container;
    }

    // Called when entering the local view
    render (scene, img) {
        this.sprite = new PlanetButton(scene, 0, 0, 'sun1', this.clicked);

        // adds a container in the middle of the scene
        this.container = scene.add.container(gameConfig.width/2, gameConfig.height/2);
        this.container.add(this.sprite);
    }

    clicked () {
        console.log("Clicked this star!");
    }

}

