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

        let width = gameConfig.width
        let height = gameConfig.height

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        var background = this.add.graphics();

        let BAR_WIDTH = gameConfig.width / 2; // width = 640
        let BAR_HEIGHT = gameConfig.height / 15; // height = 72
        let PADDING = 5;

        background.fillRect(0, 0, width, height);

        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(
            (width/2)-(BAR_WIDTH/2), 
            (height/2)-(BAR_HEIGHT/2), 
            BAR_WIDTH, 
            BAR_HEIGHT);
        
        
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            background.clear();
            background.fillStyle(0x000000, 1 - value);
            background.fillRect(0, 0, width, height);

            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(
                (width/2)-(BAR_WIDTH/2)+PADDING, 
                (height/2)-(BAR_HEIGHT/2)+PADDING, 
                (BAR_WIDTH - 2 * PADDING) * value, 
                (BAR_HEIGHT - 2 * PADDING)
                );
        });
        
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        for (var i = 0; i < 2000; i++) {
            this.load.image('sun1'+i, 'assets/graphics/spritesheets/suns/sun1.png');
        }
 

        // Load all images for game

        // AUDIO
        this.load.audio('startMusic', 'assets/audio/revelatory01.mp3');
        this.load.audio('localMapAmbient', 'assets/audio/unobtrusive01.mp3');

        // UI
        this.load.image('startButton', 'assets/graphics/UI/startButton.png');
        this.load.image('selectionIndicator', 'assets/graphics/UI/selectionIndicator.png');
        
        // LOGO
        this.load.image('titleText', 'assets/graphics/logo/titleText.png');

        // BACKGROUNDS
        this.load.image('spaceBackground', 'assets/graphics/background/Galaxy.png');
        this.load.image('starrySky2', 'assets/graphics/background/starrySkies.png');
        this.load.image('cockpit', 'assets/graphics/background/cockpit.png');
        this.load.image('localSpaceBackground', 'assets/graphics/background/spaceBackground3.png');
        
        // GAME OBJECTS
        this.load.image('sun1', 'assets/graphics/spritesheets/suns/sun1.png')
        this.load.image('planet1', 'assets/graphics/spritesheets/planets/magentaPlanet.png')
        this.load.image('starGate1', 'assets/graphics/spritesheets/starGates/starGate01.png')

        
        


        
    }
    
    create () {
        super.create();
        StarTheory.scene.stop("loadScene");
        StarTheory.scene.start("startMenu");
        

    }

    update () {
    this.load.on('progress', function (value) {
        console.log(value);
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
    });
    }
}