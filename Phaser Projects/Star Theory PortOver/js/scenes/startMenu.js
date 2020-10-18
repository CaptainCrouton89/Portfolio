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
        var titleText = this.make.text({
            x: gameConfig.width / 2,
            y: gameConfig.height / 2 - 50,
            text: 'STAR THEORY',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        titleText.setOrigin(0.5, 0.5);
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

    StarTheory.gameManager.switchScenes("startMenu", "cockpitMenu");
    // StarTheory.scene.stop('startMenu')
    // StarTheory.scene.start('cockpitMenu');
}


// function goCrazy () {
//     console.log("I'm CRAAAAYYYYZZZZEEEEEE");
// }