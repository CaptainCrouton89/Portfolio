"use strict"

class CurrentEntityMenu extends MenuScene {

    constructor (config) {
        super(config);
        this.entity;
        this.name = "currentEntityMenu";
        }

    init () {
        super.init();
        this.entity = StarTheory.gameManager.player.getLocation();
        this.infoBox = new CurrentEntityInfoBox(this, this.entity);
        this.setEntity();
        console.log("current entity name:", this.entity.name);
    }

    setEntity () {
        // delete keybinds for old entity
        if (this.entity) {
            for (const [key, value] of Object.entries(this.entity.getVisitOptions())) {
                delete this.keyboardConfig[key]
            }
        }
        
        // updates entity to new entity and changes infobox information
        this.entity = StarTheory.gameManager.player.getLocation();
        this.infoBox.update(this.entity);

        // adds new keybinds to the keyboardConfig
        for (const [key, value] of Object.entries(this.entity.getVisitOptions())) {
            this.keyboardConfig[key] = value;
        }
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

    debug (entity) {

    }
}