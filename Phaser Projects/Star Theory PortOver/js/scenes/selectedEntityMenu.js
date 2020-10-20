"use strict"

class SelectedEntityMenu extends MenuScene {

    constructor(config) {
        super(config);
        this.entity;
        this.name = "selectedEntityMenu";
        this.keyboardConfig["s"] = [this.sailTo, this.entity];
    }

    init () {
        super.init();
    }

    setEntity (entity) {
        this.entity = entity;
        this.infoBox.update(this.entity);
    }

    preload () {
        super.preload();

        this.infoBox = new InfoBox(this, this.entity, false, "left"); // move this into constructor if I can have gameConfig.width defined before hand. 
        // Perhaps sequentially add scenes after inputing the config so that scenes can use the config in their constructors.
        // this.infoBox.render();

    }
    
    create () {
        super.create();
        
    }

    update () {
        super.update();
        // When opened, must have called setEntity() in localMapMenu. Called again whenever they cycle through menus
    }

    sailTo(location) {
        // StarTheory.gameManager.player.sailTo(location);
        StarTheory.scene.getScene("currentEntityMenu").update(location)
        // StarTheory.scene.stop("selectedEntityMenu");
        // StarTheory.scene.start("localMapMenu");
        
    }
}