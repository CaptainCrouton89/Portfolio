'use strict';

class ModuleInventory extends Inventory {
    constructor(inventoryManager) {
        super(inventoryManager);
        this.contents = [];

    }

    addModule(mod) {
        this.contents.push(mod);
    }

    removeModule(mod) {
        this.contents.remove(mod);
    }

    getContents() {
        return this.contents;
    }


};
