"use strict"

class CockpitMenu extends MenuScene {

    constructor(config, lastScene) {
        super(config, lastScene);
        this.keyboardConfig["Enter"] = [openLocalMap];
        this.keyboardConfig["f"] = [enterCombat];
        
        this.name = "CockpitMenuScene";
    }

    init () {
        super.init();
    }

    preload () {
        super.preload();

    }
    
    create () {
        super.create();
        this.background = new Background(this, 'cockpit');

        this.localMapButton = new Button(this, 300, 100, 'sun1', openLocalMap);

    }

    update () {
        super.update();
    }
}

function openLocalMap () {
    StarTheory.scene.stop("cockpitMenu");
    StarTheory.scene.start("localMapMenu");
}

function enterCombat () {
    StarTheory.scene.stop("cockpitMenu");
    StarTheory.scene.start("combatScene");
}