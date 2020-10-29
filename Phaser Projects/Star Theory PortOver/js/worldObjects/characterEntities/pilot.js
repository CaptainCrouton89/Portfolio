'use strict';

class Pilot {
    constructor () {
        this.reputation;
        this.honor;
        this.factionAffinity;
        this.inventory = new InventoryManager(this);

        this.testModules();

    }

    testModules() {
        this.inventory.addModule(new Module('tambourine'));
        this.inventory.addModule(new Module('johnston_j-beam'));
        this.inventory.addModule(new Module('whistler'));
        console.log(this.inventory.getModuleInventory());
    }

    getInventory() {
        return this.inventory;
    }
};
