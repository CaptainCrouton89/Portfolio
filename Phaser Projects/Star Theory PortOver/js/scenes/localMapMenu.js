"use strict"

class LocalMapMenu extends MenuScene {
    constructor(config, lastScene) {
        super(config, lastScene);
        this.name = "LocalMapMenuScene";
    }
    
    init () {
        super.init();
        this.name = StarTheory.gameManager.player.starSystemLocation
    }
    
    preload () {
        super.preload();
    }
    
    create () {
        super.create();

        this.startMusic = this.sound.add('localMapAmbient');
        this.startMusic.play();

        this.background = new Background(this, 'localSpaceBackground');
        StarTheory.gameManager.player.starSystemLocation.render(this);
        // this.sprites.add()
    }

    update () {
        super.update();
        
    }
}


