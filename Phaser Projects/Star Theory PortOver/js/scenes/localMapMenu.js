"use strict"

class LocalMapMenu extends MenuScene {
    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "LocalMapMenuScene";

        this.selected;
        this.planetSelectionIndex = 0;
        this.shipSelectionIndex = 0;

        this.keyboardConfig["p"] = [this.nextPlanet ];
        this.keyboardConfig["s"] = [this.nextShip ];
        this.keyboardConfig["w"] = [this.wormhole ];
        this.keyboardConfig["Enter"] = [this.enterSelected, this.selected];
    }
    
    init () {
        super.init();
        this.name = StarTheory.gameManager.player.starSystemLocation
        this.starSystem = StarTheory.gameManager.player.starSystemLocation;
        this.planets = this.starSystem.planetManager.getPlanets();
    }
    
    preload () {
        super.preload();
    }
    
    create () {
        super.create();

        this.startMusic = this.sound.add('localMapAmbient');
        this.startMusic.play();

        // Sets background
        this.background = new Background(this, 'localSpaceBackground');
        
        // Renders solar system
        this.starSystem.render(this);
    }

    update (time, delta) {
        super.update();

        // Loop through planets in star system and cause them to spin and orbit
        this.starSystem.planetManager.getPlanets().forEach(planet => {
            planet.orbitContainer.angle += delta/1000 * planet.orbitalSpeed;
            planet.spinContainer.angle += delta/1000 * planet.angularSpeed;
        });
    }

    nextPlanet () {

        // Running into errors because context is not the class.
        console.log(this.planets);
        this.selected = this.planets[this.planetSelectionIndex];
        console.log("selecting planet:", this.planets[this.planetSelectionIndex].name, "with index:", this.planetSelectionIndex);
        this.planetSelectionIndex+=1;
        if (this.planetSelectionIndex >= this.planets.length) {
            this.planetSelectionIndex = 0;
        }
    }
}


