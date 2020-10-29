'use strict';

class CargoInventory extends Inventory {

    constructor(inventoryManager) {
        super(inventoryManager);
        this.contents = {

        };
    }

    addCargo(cargo, quantity) {
        if (this.contents[cargo]) {
            this.contents[cargo] += quantity;
        } else {
            this.contents = quantity;
        }
    }

    removeCargo(cargo, quantity) {
        if (this.contents[cargo]) {
            this.contents[cargo] -= quantity;
            if (this.contents[cargo] < 0) {
                this.contents[cargo] = 0;
            }
        }
    }


};
