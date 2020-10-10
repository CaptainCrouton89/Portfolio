"use strict"

class BaseScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    init () {
        
    }
    
    preload () {

    }
    
    create () {
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    update () {
        
    }
}


class MenuScene extends BaseScene {
    constructor(config, lastScene) {
        super(config);
        this.lastScene = lastScene;
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
        super.update();
    }
}