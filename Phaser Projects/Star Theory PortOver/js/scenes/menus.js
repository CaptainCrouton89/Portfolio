"use strict"

class MenuScene extends BaseScene {
    constructor(config, lastScene) {
        super(config);
        this.lastScene = lastScene;
        this.keyboardConfig = {
            "h": [sayHi, "buddy"],
            "b": [back]
        }
    }

    init () {
        super.init();
        this.input.keyboard.on('keydown', runKey, this);
    }

    preload () {
        super.preload();

    }
    
    create () {
        super.create();

    }

    update () {
        super.update();
    }
}

function runKey (keyEvent) {
    /**
     * Nifty function for running commands in the format 
     * char: [function, param1, param2, param3...]
     * 
     * Issue: Repeatedly calls function over and over
     */
    let key = keyEvent.key
    // console.log(key);
    if (key in this.keyboardConfig) {
        let command = this.keyboardConfig[keyEvent.key];
        command[0](...command.slice(1));
    }
}

function back () {
    StarTheory.gameManager.switchScenes(this.name, this.lastScene);
}

function sayHi (otherwords) {
    console.log("hi", otherwords);
}