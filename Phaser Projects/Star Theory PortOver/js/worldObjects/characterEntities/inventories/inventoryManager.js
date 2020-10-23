"use strict"

class InventoryManager {

    constructor(owner) {
        this.owner = owner;
        this.contents; // the datastructure used to hold inventory items
        this.moduleInventory = new ModuleInventory(this);
        this.crewInventory = new CrewInventory(this);
        this.cargoInventory = new CargoInventory(this);
    }

    getInventoryList () {
        // return list of names of all objects in inventory?
    }

    add(itemDict) {
        // adds items to inventory
        // item dict has form {itemName: quantity, itemName: quantity}
    }

    remove(itemDict) {
        // removes items from inventory
        // item dict has form {itemName: quantity, itemName: quantity}
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