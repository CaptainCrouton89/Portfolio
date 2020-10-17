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

        let BAR_WIDTH = gameConfig.width / 2; // width = 640
        let BAR_HEIGHT = gameConfig.height / 15; // height = 72
        let PADDING = 5;


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

        // this.load.image('logo', 'zenvalogo.png');
        //     for (var i = 0; i < 5000; i++) {
        //         this.load.image('logo'+i, 'zenvalogo.png');
        //     }
 

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
        this.load.image('planet1', 'assets/graphics/spritesheets/planets/magentaPlanet.png')

        this.load.audio('localMapAmbient', 'assets/audio/unobtrusive01.mp3');


        
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