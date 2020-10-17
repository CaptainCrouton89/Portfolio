"use strict"

class StarSystem {
    
    constructor(galaxy, layer, degree) {
        
        this.name = "defaultStarSystemName";
        this.galaxy = galaxy;
        this.adjacentStars = [];
        this.layer = layer;
        this.degree = degree;
        this.sprite;
        this.planetManager = new PlanetManager(this);
        this.planetManager.init();
    }

    getAdjacentStars() {
        return this.adjacentStars;
    }

    getContainer () {
        return this.spinContainer;
    }

    // Called when entering the local view
    render (scene) {
        this.sprite = new PlanetButton(scene, 0, 0, 'sun1', this.clicked, this);

        // adds a container in the middle of the scene
        this.spinContainer = scene.add.container(gameConfig.width/2, gameConfig.height/2);
        this.spinContainer.add(this.sprite);
        console.table("My table:", this.planetManager.getPlanets())
        this.planetManager.getPlanets().forEach(planet => planet.render(scene))   
    }

    clicked () {
        console.log(this.name);
    }

    genPlanets () {
        this.planetManager.genPlanets()
    }

}

