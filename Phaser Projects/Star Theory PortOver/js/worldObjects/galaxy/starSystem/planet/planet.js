"use strict"

class Planet {
    
    constructor(starSystem, layer) {
        this.LAYERDEPTH = 90;
        this.name = "defaultPlanetName";
        this.layer = layer;
        this.sprite = null;
        this.starSystem = starSystem;
        this.shipManager = new ShipManager();
        this.market = new Market();
        this.angularSpeed = Math.random();
    }

    setStats(config) {
        this.orbitalRadius = config.orbitalRadius;
        this.resources = config.resources;
    }

    render (scene) {
        // Randomly determines the location of the sprite in its orbit
        let vec = new Phaser.Math.Vector2(getRandomFloat(-1, 1), getRandomFloat(-1, 1)).normalize();
        let modifier = (this.layer+1)*this.LAYERDEPTH;
        vec.scale(modifier, modifier);
        // Set sprite
        this.sprite = new PlanetButton(scene, 0, 0, 'planet1', this.clicked, this); // context must be set to the planet object, not the button itself

        // Create new container, add a sprite, then add it to the starsystem
        this.orbitContainer = scene.add.container(0, 0); // This container causes the entire planet to orbit the sun
        this.spinContainer = scene.add.container(vec.x, vec.y) // This is where the ships and moons get placed, to orbit the planet
        this.spinContainer.add(this.sprite); // Adding the sprite to the spinning container. 
        this.starSystem.getContainer().add(this.orbitContainer); // Adding the orbitContainer to the starsystem
        this.orbitContainer.add(this.spinContainer); // Adding the spinContainer to the rotation around the star
    }

    clicked() {
        console.log(this.name);
        // execute code to updated the "selected item" info to info from this item;
        // Scene.LocalMapScene.showPlanetInfo(this);
    }

}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}