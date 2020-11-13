"use strict"

class ActionSelectionMenu extends MenuScene {

    constructor(config) {
        super(config);
        this.name = "actionSelectionMenu";
        this.combatManager;
        this.currentHotbar;
        this.hotbars;
    }

    init () {
        super.init();
        this.hotbars = StarTheory.gameManager.getPlayer().getInventory().getHotbars();
        this.currentHotbar = this.hotbars["a"];
        console.log(this.currentHotbar);
    }

    preload () {
        super.preload();
    }
    
    create () {
        super.create();
    }

    update () {
        super.update();
    }

    loadHotbar(hotbar) {
        // create keyboard config by attaching hotbars to keys, and adding children to keys 
        for (const [key, mod] of Object.entries(hotbar.getContents())) {
            if (mod) {
                this.keyboardConfig[key] = [selectModule, mod]; // SHOULD add function selectModule(value) to hotkeys, where value is the module
            }
        }
    }
}

function selectModule (mod) {
    // This code will run if hotkeys 1-9, "0", "-", or "=" are pressed
    // Should run code for selecting crew member for chosen module
}

