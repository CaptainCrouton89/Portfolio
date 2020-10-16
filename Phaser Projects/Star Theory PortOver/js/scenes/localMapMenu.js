"use strict"

class LocalMapMenu extends MenuScene {
    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "LocalMapMenuScene";
    }
    
    init () {
        super.init();
        this.name = StarTheory.gameManager.player.starSystemLocation
        this.starSystem = StarTheory.gameManager.player.starSystemLocation;
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
        this.starSystem.planetManager.getPlanets().forEach(planet => {
            planet.orbitContainer.angle += delta/1000 * (1/(planet.layer + 1)) * 7;
            planet.spinContainer.angle += delta/1000 * (planet.angularSpeed * 2 - 1) * 22;
        });
        // Loop through planets in star system and cause them to spin and orbit
    }
}


