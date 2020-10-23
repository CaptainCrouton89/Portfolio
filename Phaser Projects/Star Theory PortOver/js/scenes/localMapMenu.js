"use strict"

class LocalMapMenu extends MenuScene {

    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "LocalMapMenuScene";

        this.selected;
        this.selectedEntityInfoMenu = false;
        this.currentEntityInfoMenu = false;
        this.planetSelectionIndex = 0;
        this.shipSelectionIndex = 0;

        this.keyboardConfig["p"] = [this.nextPlanet, this];
        this.keyboardConfig["s"] = [this.nextShip ];
        this.keyboardConfig["w"] = [this.wormhole ];
        this.keyboardConfig["Enter"] = [this.enterSelected, this.selected];
    }
    
    init () {
        super.init();
        this.starSystem = StarTheory.gameManager.player.getStarSystem();
        this.planets = this.starSystem.planetManager.getPlanets();
    }
    
    preload () {
        super.preload();
        // Automatically starts the currentEntityMenu
        StarTheory.scene.start("currentEntityMenu");

        // StarTheory.scene.getScene("currentEntityMenu").setEntity(this.selected); Maybe load this in create function of current entity menu?
    }
    
    create () {
        super.create();

        // Starts music
        this.startMusic = this.sound.add('localMapAmbient');
        this.startMusic.play();

        // Sets background
        this.background = new Background(this, 'localSpaceBackground');
        
        // Renders solar system
        this.starSystem.render(this);

        // Creates selection indicator, though hides it at start
        this.selectionIndicator = new PixelSprite(this, 0, 0, 'selectionIndicator');
        this.selectionIndicator.depth = 2;
        this.selectionIndicator.visible = false;
    }

    update (time, delta) {
        super.update();

        // Loop through planets in star system and cause them to spin and orbit
        this.starSystem.planetManager.getPlanets().forEach(planet => {
            planet.orbitContainer.angle += delta/1000 * planet.orbitalSpeed;
            planet.spinContainer.angle -= delta/1000 * planet.orbitalSpeed;
            planet.sprite.angle += delta/1000 * planet.angularSpeed;
        });

    }

    initializeSelector () {
        // Creates the selectedEntityMenu and displays it
        if (!this.selectedEntityInfoMenu) {
            this.selectedEntityInfoMenu = true
            StarTheory.scene.start("selectedEntityMenu");
        }

        // Makes the selector visible
        this.selectionIndicator.visible = true;
    }

    selectPlanet (planet) {
        this.initializeSelector();
        this.selected = planet;
        this.selected.spinContainer.add(this.selectionIndicator);
        StarTheory.scene.getScene("selectedEntityMenu").setEntity(this.selected);

        this.planetSelectionIndex = planet.layer + 1;
        if (this.planetSelectionIndex >= this.planets.length) {
            this.planetSelectionIndex = 0;
        }
    }

    nextPlanet (context) {
        context.initializeSelector();

        // sets localMapMenu's selector to the next planet in the list
        context.selected = context.planets[context.planetSelectionIndex];
        context.selected.spinContainer.add(context.selectionIndicator);
        console.log("selecting planet:", context.planets[context.planetSelectionIndex].name, "with index:", context.planetSelectionIndex);
        
        // Updates the information being shown in the selectedEntityMenu
        StarTheory.scene.getScene("selectedEntityMenu").setEntity(context.selected);
        
        // updates index so that the next function call will select the next planet. Automatically resets
        context.planetSelectionIndex+=1;
        if (context.planetSelectionIndex >= context.planets.length) {
            context.planetSelectionIndex = 0;
        }
    }

    nextShip (context) {
        context.initializeSelector();
    }

    enterPlanet (context) {
        context.initializeSelector();
        
    }

    
}


