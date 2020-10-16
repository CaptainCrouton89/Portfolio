"use strict"

class Planet {
    
    constructor(starSystem) {
        this.name = "defaultPlanetName"
        this.sprite = null;
        this.starSystem = starSystem;
        this.shipManager = new ShipManager();
        this.market = new Market();
    }

    setStats(config) {
        this.orbitalRadius = config.orbitalRadius;
        this.resources = config.resources;
    }

    render(scene, img) {
        // Randomly determines the location of the sprite in its orbit
        let vec = new Vector2(helper.getRandomFloat(-1, 1), helper.getRandomFloat(-1, 1)).normalize();
        vec.scale(this.orbitalRadius, this.orbitalRadius);
        // Set sprite
        this.sprite = new PlanetButton(scene, 0, 0, img, this.clicked);

        // Create new container, add a sprite, then add it to the starsystem
        this.orbitContainer = scene.add.container(0, 0); // This container causes the entire planet to orbit the sun
        this.spinContainer = scene.add.container(vec.x, vec.y) // This is where the ships and moons get placed, to orbit the planet
        this.spinContainer.add(this.sprite); // Adding the sprite to the spinning of the planet. 
        this.starSystem.getContainer().add(this.orbitContainer); // Adding the orbitContainer to the starsystem
        this.orbitContainer.add(this.spinContainer); // Adding the spinContainer to the rotation around the star
    }

    clicked() {
        console.log(this.name);
        // execute code to updated the "selected item" info to info from this item;
        // Scene.LocalMapScene.showPlanetInfo(this);
    }

}