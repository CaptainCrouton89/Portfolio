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


        // DATA
        let dataPath = "data/";

        this.load.json('tambourine', dataPath + 'modules/weapons/tambourine.json');
        this.load.json('whistler', dataPath + 'modules/weapons/whistler.json');
        this.load.json('johnston_j-beam', dataPath + 'modules/weapons/johnston_j-beam.json');
 

        // AUDIO
        let auidoPath = 'assets/audio/';

        this.load.audio('startMusic', auidoPath + 'revelatory01.mp3');
        this.load.audio('localMapAmbient', auidoPath + 'unobtrusive01.mp3');


        // GRAPHICS
        let graphicsPath = 'assets/graphics/';

        // graphics/_common/
        let commonPath = graphicsPath + '_common/';

        // graphics/_common/background/
        let backgroundPath = commonPath + 'background/';

        // graphics/_common/background/starscapes
        let starscapesPath = backgroundPath + 'starscapes/'
        this.load.image('spaceBackground', starscapesPath + 'Galaxy.png');
        this.load.image('stars', starscapesPath + 'spaceBackground4.png');
        this.load.image('starrySky2', starscapesPath + 'starrySkies.png');
        this.load.image('localSpaceBackground', starscapesPath + 'spaceBackground3.png');

        // graphics/_common/ui/
        let uiPath = commonPath + 'ui/';

        // graphics/actors/
        let actorPath = graphicsPath + 'actors/';

        // graphics/actors/planets/
        let planetPath = actorPath + 'planets/';
        // this.load.atlas('largePlanets', planetPath + 'largePlanets/largePlanetsAtlas.png', planetPath + 'largePlanets/largePlanetsAtlas.json');
        // this.load.atlas('mediumPlanets', planetPath + 'mediumPlanets/mediumPlanetsAtlas.png', planetPath + 'mediumPlanets/mediumPlanetsAtlas.json');
        this.load.atlas('smallPlanets', planetPath + 'smallPlanets/smallPlanetsAtlas.png', planetPath + 'smallPlanets/smallPlanetsAtlas.json');

        // graphics/actors/satellites/
        let satellitePath = actorPath + 'satellites/';

        // graphics/actors/crewMembers/
        let crewMembersPath = actorPath + 'crewMembers/';

        // graphics/actors/ships/
        let shipsPath = actorPath + 'ships/';

        // graphics/actors/starGates/
        let starGatesPath = actorPath + 'starGates/';

        // graphics/actors/suns/
        let sunsPath = actorPath + 'suns/';

        this.load.image('sun1', sunsPath + '/sun1.png')

        // graphics/actors/weapons/
        let weaponsPath = actorPath + 'weapons/';

        // graphics/scenes/
        let scenePath = graphicsPath + 'scenes/';

        // graphics/scenes/localSpace/
        let localSpacePath = scenePath + 'localSpace/';
        this.load.image('selectionIndicator', localSpacePath +'selectionIndicator.png'); 

        // graphics/scenes/cockpit/
        let cockpitPath = scenePath + 'cockpit/';
        this.load.image('cockpit', cockpitPath + 'cockpit.png'); 

        // graphics/scenes/start/
        let startPath = scenePath + 'start/';

        this.load.image('startButton', startPath + 'startButton.png');

        // graphics/logo/
        let logoPath = graphicsPath + 'logo/';
        this.load.image('titleText', logoPath + "titleText.png"); 

        for (var i = 0; i < 500; i++) {
            this.load.image('sun1'+i, sunsPath + '/sun1.png');
        }        
    }
    
    create () {
        super.create();

        // LOAD SAVE/NEW GAME
        StarTheory.loadGame();

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