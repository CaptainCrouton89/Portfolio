"use strict"

class BootScene extends BaseScene {

    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "BootScene";
    }

    init () {
        super.init();
    }

    preload () {
        super.preload();
        this.load.image('bootImage', 'assets/graphics/background/Galaxy.png');
    }
    
    create () {
        super.create();
        StarTheory.scene.stop(this);
        StarTheory.scene.start("loadScene");
    }
}