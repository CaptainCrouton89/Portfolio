"use strict"

class StartMenu extends MenuScene {
    constructor(config, lastScene) {
        super(config, lastScene);
        
    }
    
    init () {
        super.init();

    }
    
    preload () {
        super.preload();
        this.load.audio('startMusic', 'assets/audio/revelatory01.mp3');

        this.load.image('spaceBackground', 'assets/graphics/background/Galaxy.png');
        this.load.image('cockpit', 'assets/graphics/background/cockpit.png');

        this.load.image('demo-button32', 'assets/graphics/UI/demo-button32.png');
        this.load.image('demo-button32x2', 'assets/graphics/UI/demo-button32x2.png');
        this.load.image('demo-button64', 'assets/graphics/UI/demo-button64.png');
        this.load.image('startButton', 'assets/graphics/UI/startButton.png');
    }
    
    create () {
        super.create();

        this.background = new Background(this, 'spaceBackground');
        this.startButton = new Button(this, 640, 500, 'startButton', sayHi);

        // this.myText = this.add.text(640, 500, "hi");
        let startMusic = this.sound.add('startMusic');
        startMusic.play();
    }

    update () {
        super.update();
    }
}

function sayHi () {
    console.log("HI!");
    this.scene.start('cockpitMenu');
    console.log(getGameManager());
}


