"use strict"

class Planet {
    
    constructor(starSystem, layer) {
        this.name = "defaultPlanetName" + layer;
        this.description = "defaultPlanetDescription";
        this.layer = layer;

        this.starSystem = starSystem;
        this.faction;

        // Orbiting ships
        this.shipManager = new ShipManager();

        // Planet inventories
        this.cargoMarket = new CargoMarket(this);
        this.upgradesMarket = new UpgradesMarket(this);
        this.modulesMarket = new ModulesMarket(this);
        this.crewMarket = new CrewMarket(this);
        this.questPool = new QuestPool(this);
        
        // Sprite Info
        this.LAYER_DEPTH = 90; // Pixel distance apart each planet is from the next
        this.sprite = null;
        // Used to update position in localMapMenu
        this.orbitalSpeed = (1/(this.layer + 1)) * 7; 
        this.angularSpeed = (Math.random() * 2 - 1) * 30 - this.orbitalSpeed;

        // Unimplemented
        
        // These stats never change
        this.staticStats = {
            temperatureLevel: 1/(this.layer + 1),
            resources: {},
            resourceScore: 0,
            population: 0,
            traffic: 0,
            wealth: 0,
            skill: 0,
            orbitalStation: false,
            settlementType: null,
        }

        this.selectedOptions = {
            "v": [this.visit, this]
        }

        this.visitedOptions = {
            "t": [this.trade, this],
            "q": [this.quest, this]
        }
    }

    getSelectionOptions () {
        return this.selectedOptions;
    }

    getVisitOptions () {
        return this.visitedOptions;
    }

    setStats(config) {
        this.orbitalRadius = config.orbitalRadius;
        this.resources = config.resources;
    }

    render (scene) {
        // Randomly determines the location of the sprite in its orbit
        let vec = new Phaser.Math.Vector2(getRandomFloat(-1, 1), getRandomFloat(-1, 1)).normalize();
        let modifier = (this.layer+1)*this.LAYER_DEPTH;
        vec.scale(modifier, modifier);
        // Set sprite
        this.sprite = new PlanetButton(scene, 0, 0, 'planet1', this.clicked, this);

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

    visit (planet) {
        StarTheory.gameManager.player.setLocation(planet);
        console.log("Player entering", StarTheory.gameManager.player.getLocation().name);
    }

    trade (planet) {

    }

    quest (planet) {

    }

}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}