"use strict"

class LoadScene extends BaseScene {

    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "LoadScene";
    }

    init () {
        super.init();
        this.background = new Background(this, 'bootImage');
    }

    preload () {
        super.preload();
        // Load all images for game
        this.load.image('startButton', 'assets/graphics/UI/startButton.png');
        this.load.audio('startMusic', 'assets/audio/revelatory01.mp3');

        this.load.image('spaceBackground', 'assets/graphics/background/Galaxy.png');
        this.load.image('starrySky2', 'assets/graphics/background/starrySkies.png');
        this.load.image('cockpit', 'assets/graphics/background/cockpit.png');
        this.load.image('localSpaceBackground', 'assets/graphics/background/spaceBackground3.png');

        this.load.image('demo-button32', 'assets/graphics/UI/demo-button32.png');
        this.load.image('demo-button32x2', 'assets/graphics/UI/demo-button32x2.png');
        this.load.image('demo-button64', 'assets/graphics/UI/demo-button64.png');
        
        this.load.image('sun1', 'assets/graphics/spritesheets/suns/sun1.png')
        this.load.audio('localMapAmbient', 'assets/audio/unobtrusive01.mp3');


        
    }
    
    create () {
        super.create();
        StarTheory.scene.stop("loadScene");
        StarTheory.scene.start("startMenu");

    }
}