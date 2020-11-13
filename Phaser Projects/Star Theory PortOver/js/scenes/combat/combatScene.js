"use strict"

class CombatScene extends MenuScene {

    constructor(config) {
        super(config);
        this.name = "combatScene";
        this.keyboardConfig["h"] = [function sayHi() {console.log("hi")}]

        this.animations; // Manager for all the actions, so that everything gets animated and you see the combat play out, in order

        this.enemies = [];
        this.allies = [];

        this.actionSelectionMenu; // Whichever action selection menu is currently open
    }

    init () {
        super.init();
        StarTheory.scene.start("actionSelectionMenu");
        this.actionSelectionMenu = StarTheory.scene.getScene("actionSelectionMenu");
    }

    preload () {
        super.preload();
    }
    
    create () {
        super.create();
        this.background = new Background(this, 'stars');
    }

    update (time, delta) {
        super.update();
        
        
    }
}

/**
 * Lots of sub-menus. Achieved by having each menu scene linked to others, and responsible for listening for actions. Start and end different scenes.
 */