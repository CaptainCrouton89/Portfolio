'use strict';

class InventoryManager {

    constructor(owner) {
        this.owner = owner;

        // Inventories
        this.moduleInventory = new ModuleInventory(this);
        this.crewInventory = new CrewInventory(this);
        this.cargoInventory = new CargoInventory(this);

        this.moduleHotbars = {};
        /**
         * {"a": Hotbar, "s": Hotbar, ...}
         */

        this.test()

    }

    test() {
        this.addHotbar(new Hotbar(this, "a", "hotbar1"));
        this.addHotbar(new Hotbar(this, "s", "hotbar2"));
    }

    addHotbar(hotbar) {
        this.moduleHotbars[hotbar.key] = hotbar;
    }

    getHotbars() {
        return this.moduleHotbars;
    }

    getHotbar(key) {
        return this.moduleHotbars[key];
    }

    getInventoryList () {
        // return list of names of all objects in inventory?
    }

    getModuleInventory() {
        return this.moduleInventory.getContents();
    }

    addModule(mod) {
        // adds items to inventory
        this.moduleInventory.addModule(mod);
    }

    removeModule(mod) {
        this.moduleInventory.removeModule(mod);
    }

    addCargo(cargo, quantity) {
        this.cargoInventory.addCargo(cargo, quantity);
    }

    removeCargo(cargo, quantity) {
        this.cargoInventory.removeCargo(cargo, quantity);
    }

    addCrew(crewMember) {
        this.crewInventory.addCrew(crewMember);
    }

    removeCrew(crewMember) {
        this.crewInventory.removeCrew(crewMember);
    }

}

/**
 * Implement multiple types of inventory. They all must have the methods defined above, though what they do behind the scenes can be different
 *
 *
 * Orrr... maybe not
 *
 *
 * Crew inventory: List of crewMember objects
 *
 * Weapon Inventory: List of weapon objects
 *
 * Module Inventory: List of module objects
 *
 * Cargo Inventory: List of cargo objects
 */
