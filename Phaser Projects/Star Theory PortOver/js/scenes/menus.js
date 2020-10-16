"use strict"

class BaseScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    init () {
        console.log("Loading " + this.name + "...");
    }
    
    preload () {

    }
    
    create () {
        
    }
}


class MenuScene extends BaseScene {
    constructor(config, lastScene) {
        super(config);
        this.lastScene = lastScene;
        this.keyboardConfig = {
            "h": sayHi
        }
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

    update () {
        this.input.keyboard.on('keydown', runKey, this);
    }
}

function runKey (keyEvent) {
    let key = keyEvent.key
    // console.log(key);
    if (key in this.keyboardConfig) {
        this.keyboardConfig[keyEvent.key]();
    }
}