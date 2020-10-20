"use strict"

class StartMenu extends MenuScene {
    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "StartMenu";
        this.keyboardConfig["Enter"] = [startGame];
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
        this.titleText = new PixelSprite(this, gameConfig.width / 2, gameConfig.height / 2 - 150, 'titleText');
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
    // StarTheory.scene.add('cockpitMenu', new CockpitMenu('cockpitMenu'));
    // StarTheory.scene.music.stop();

    StarTheory.gameManager.switchScenes("startMenu", "cockpitMenu");
    // StarTheory.scene.stop('startMenu')
    // StarTheory.scene.start('cockpitMenu');
}


// function goCrazy () {
//     console.log("I'm CRAAAAYYYYZZZZEEEEEE");
// }