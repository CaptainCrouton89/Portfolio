"use strict"

class CurrentEntityMenu extends MenuScene {

    constructor (config) {
        super(config);
        this.entity;
        // this.name = this.entity.name + " Info";
        this.keyboardConfig["t"] = [this.trade, this.entity];
    }

    init () {
        super.init();
        this.entity = StarTheory.gameManager.player.getLocation()["planet"];
    }

    setEntity (entity) {
        this.entity = entity;
        this.infoBox.update(this.entity);
    }

    preload () {
        super.preload();

        this.infoBox = new InfoBox(this, this.entity, true, "right"); // 
        // this.infoBox.render();

    }
    
    create () {
        super.create();
        
    }

    update () {
        super.update();
        // When opened, must have called setEntity() in localMapMenu. Called again whenever they cycle through menus
    }

    trade (entity) {
        console.log("trading!");
    }

    quest (entity) {

    }

    debug (entity) {

    }
}