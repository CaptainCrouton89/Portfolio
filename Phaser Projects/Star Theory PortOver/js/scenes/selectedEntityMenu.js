"use strict"

class SelectedEntityMenu extends MenuScene {

    constructor(config) {
        super(config);
        this.entity;
        this.name = "selectedEntityMenu";

        // Implement both buttons, and keybinds, separately
    }

    init () {
        super.init();
        this.entity = StarTheory.gameManager.player.getLocation();
        this.infoBox = new SelectedEntityInfoBox(this, this.entity); // move this into constructor if I can have gameConfig.width defined before hand. 
        // Perhaps sequentially add scenes after inputing the config so that scenes can use the config in their constructors.
    }

    setEntity (entity) {
        // delete keybinds for old entity
        if (this.entity) {
            for (const [key, value] of Object.entries(this.entity.getSelectionOptions())) {
                delete this.keyboardConfig[key]
            }
        }
        
        // updates entity to new entity and changes infobox information
        this.entity = entity;
        this.infoBox.update(this.entity);

        // adds new keybinds to the keyboardConfig
        for (const [key, value] of Object.entries(this.entity.getSelectionOptions())) {
            this.keyboardConfig[key] = value;
        }
    }

    preload () {
        super.preload();
        this.selected = StarTheory.scene.getScene("localMapMenu").selected;
        
        // this.infoBox.render();

    }
    
    create () {
        super.create();
        for (const [key, value] of Object.entries(this.entity.getSelectionOptions())) {
            this.keyboardConfig[key] = value;
        }
    }

    update () {
        super.update();        
        // When opened, must have called setEntity() in localMapMenu. Called again whenever they cycle through menus
    }
}