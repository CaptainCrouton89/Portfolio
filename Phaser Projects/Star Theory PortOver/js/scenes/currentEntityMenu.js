"use strict"

class CurrentEntityMenu extends MenuScene {

    constructor (config) {
        super(config);
        this.entity;
        this.name = "currentEntityMenu";
        this.keyboardConfig["t"] = [this.trade, this.entity];
    }

    init () {
        super.init();
        this.entity = StarTheory.gameManager.player.getLocation();
        this.infoBox = new CurrentEntityInfoBox(this, this.entity);
        this.setEntity();
        console.log("current entity name:", this.entity.name);
    }

    setEntity () {
        this.entity = StarTheory.gameManager.player.getLocation();
        this.infoBox.update(this.entity);
    }

    preload () {
        super.preload();
        // this.infoBox.update(this.entity);
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