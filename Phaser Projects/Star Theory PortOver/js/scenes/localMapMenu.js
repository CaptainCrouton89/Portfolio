"use strict"

class LocalMapMenu extends MenuScene {

    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "LocalMapMenuScene";

        this.selected;
        this.planetSelectionIndex = 0;
        this.shipSelectionIndex = 0;

        this.keyboardConfig["p"] = [this.nextPlanet, this];
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
        //this.background = new Background(this, 'localSpaceBackground');
        
        // Renders solar system
        this.starSystem.render(this);

        this.selectionIndicator = new PixelSprite(this, 0, 0, 'selectionIndicator');
        this.selectionIndicator.depth = 2;
        this.selectionIndicator.visible = false;
    }

    update (time, delta) {
        super.update();

        // Loop through planets in star system and cause them to spin and orbit
        this.starSystem.planetManager.getPlanets().forEach(planet => {
            planet.orbitContainer.angle += delta/1000 * planet.orbitalSpeed;
            planet.spinContainer.angle += delta/1000 * planet.angularSpeed;
        });

        if (this.selected) {
            this.selected.spinContainer.add(this.selectionIndicator)
        }
    }

    nextPlanet (context) {
        context.selectionIndicator.visible = true;
        // Running into errors because context is not the class.
        context.selected = context.planets[context.planetSelectionIndex];
        console.log("selecting planet:", context.planets[context.planetSelectionIndex].name, "with index:", context.planetSelectionIndex);
        context.planetSelectionIndex+=1;
        if (context.planetSelectionIndex >= context.planets.length) {
            context.planetSelectionIndex = 0;
        }
    }

    nextShip (context) {
    }

    enterPlanet (context) {
        
    }

    
}


