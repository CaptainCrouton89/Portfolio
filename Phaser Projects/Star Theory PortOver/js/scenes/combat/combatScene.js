"use strict"

class CombatScene extends MenuScene {

    constructor() {
        this.name = "combatScene";
        this.keyboardConfig["Enter"] = [endRound, this]

        this.animations; // Manager for all the actions, so that everything gets animated and you see the combat play out, in order

        this.enemies = [];
        this.allies = [];

    }

    init () {
        super.init();
    }

    preload () {
        super.preload();
    }
    
    create () {
        super.create();
    }

    update (time, delta) {
        super.update();
        
        
    }
}

/**
 * Lots of sub-menus. Achieved by having each menu scene linked to others, and responsible for listening for actions. Start and end different scenes.
 */