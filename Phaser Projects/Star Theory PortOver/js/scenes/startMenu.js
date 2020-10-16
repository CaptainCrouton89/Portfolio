"use strict"

class StartMenu extends MenuScene {
    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "StartMenu";
        this.keyboardConfig["Enter"] = startGame;
        // this.keyboardConfig["u"] = goCrazy;

    }
    
    init () {
        super.init();

    }
    
    preload () {
        super.preload();
    }
    
    create () {
        super.create();

        this.background = new Background(this, 'spaceBackground');
        this.startButton = new Button(this, 640, 500, 'startButton', startGame);
        // this.settingsButton = new Button(this, 640, 600, 'startButton', goCrazy);

        // this.myText = this.add.text(640, 500, "hi");
        this.music = this.sound.add('startMusic');
        this.music.play();
    }

    update () {
        super.update();
    }
}

function startGame () {
    // StarTheory.scene.music.stop();
    StarTheory.scene.stop('startMenu')
    StarTheory.scene.start('cockpitMenu');
}


function sayHi () {
    console.log("HI!");
}

// function goCrazy () {
//     console.log("I'm CRAAAAYYYYZZZZEEEEEE");
// }