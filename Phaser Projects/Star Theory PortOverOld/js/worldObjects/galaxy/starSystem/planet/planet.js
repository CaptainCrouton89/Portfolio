"use strict"

class Planet {
    
    constructor(starSystem) {
        this.sprite = null;
        this.starSystem = starSystem;
        this.shipManager = new ShipManager();
        this.market = new Market();
    }

    setSprite(scene, img) {
        this.sprite = new PixelSprite(scene, x, y, img)
        scene.add.existing(this);
        this.sprite.setInteractive();
    }


}