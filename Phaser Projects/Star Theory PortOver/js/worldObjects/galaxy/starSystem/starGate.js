'use strict';

class StarGate {

    constructor (starSystem) {
        this.name = 'defaultStarGateName';

        this.starSystem = starSystem;
        this.faction;
        this.layer = 0;
        this.LAYER_DEPTH = 90;

        this.orbitalSpeed = (1/(this.layer + 1)) * 7;
        this.angularSpeed = (Math.random() * 2 - 1) * 30 - this.orbitalSpeed;
        this.sprite = null;

    }

    render (scene) {
        // Randomly determines the location of the sprite in its orbit
        let vec = new Phaser.Math.Vector2(getRandomFloat(-1, 1), getRandomFloat(-1, 1)).normalize();
        let modifier = (this.layer+1)*this.LAYER_DEPTH;
        vec.scale(modifier, modifier);
        // Set sprite
        this.sprite = new PlanetButton(scene, 0, 0, 'starGate1', this.clicked, this);

        // Create new container, add a sprite, then add it to the starsystem
        this.orbitContainer = scene.add.container(0, 0); // This container causes the entire planet to orbit the sun
        this.spinContainer = scene.add.container(vec.x, vec.y) // This is where the ships and moons get placed, to orbit the planet
        this.spinContainer.add(this.sprite); // Adding the sprite to the spinning container.
        this.starSystem.getContainer().add(this.orbitContainer); // Adding the orbitContainer to the starsystem
        this.orbitContainer.add(this.spinContainer); // Adding the spinContainer to the rotation around the star
    }
};

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
